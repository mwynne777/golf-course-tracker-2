const fetch = require('node-fetch');
const HTMLParser = require('node-html-parser');
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

/* Amplify Params - DO NOT EDIT
	API_GOLFCOURSETRACKER_GRAPHQLAPIENDPOINTOUTPUT
	API_GOLFCOURSETRACKER_GRAPHQLAPIIDOUTPUT
	API_GOLFCOURSETRACKER_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const BASE_URL = 'https://ncrdb.usga.org/courseTeeInfo.aspx?CourseID=';

exports.handler = async (event) => {
    // TODO implement

    for (var i = event.startID; i < event.endID; i++) {
        const result = await fetchCourseAndRatingById(i);
        if (!result.error) {
            await addCourseToDB(result);
        }
    }

    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
        body: 'DUMMY FOR NOW',
    };
    return response;
};

const fetchCourseAndRatingById = async id => {
    const result = await fetch(BASE_URL + id);
    if (!result.ok) {
        console.log(`Error, course id ${id} does not exist`);
        return { error: `Could not find course with id ${id}` }
    }
    const resultText = await result.text();
    const course = parseCourseResult(resultText, id);
    course.id = id;
    return course;
};

const parseCourseResult = (htmlResult, id) => {
    const root = HTMLParser.parse(htmlResult);
    const courseTable = root.querySelector('#gvCourseTees');
    const [clubAndCourseName, city, state] = courseTable.querySelectorAll('td');
    const [clubName, courseName] = clubAndCourseName.text.split(' - ');
    const course = { clubName, courseName, city: city.text, state: state.text };

    const courseRatings = [];
    const teeTable = root.querySelector('#gvTee');
    if (teeTable != null) {
        const tableRows = teeTable.querySelectorAll('tr');
        tableRows.shift();
        tableRows.forEach(row => {
            const [teeName, gender, par, courseRating, bogeyRating, slopeRating, front, back] = row.querySelectorAll('td');
            const [frontCourseRating, frontSlopeRating] = front.text.replace(/\s/g, '').split('/');
            let [backCourseRating, backSlopeRating] = back.text.replace(/\s/g, '').split('/');

            if (backCourseRating == '') {
                backCourseRating = -1;
                backSlopeRating = -1;
            }

            const rating = {
                teeName: teeName.text,
                gender: gender.text,
                par: par.text,
                courseRating: courseRating.text,
                bogeyRating: bogeyRating.text,
                slopeRating: slopeRating.text,
                frontCourseRating,
                frontSlopeRating,
                backCourseRating,
                backSlopeRating,
                id: `${id}_${teeName.text}_${gender.text}`
            };
            courseRatings.push(rating);
        });
    }

    course.courseAndSlopeRatings = courseRatings;
    return course;
};

async function addCourseToDB(course) {
    const createCourse = gql`
        mutation AddCourse($input: CreateCourseInput!) {
            createCourse(input: $input) {
                id
                courseName
            }
        }
    `;

    const result = await fetch(process.env.API_GOLFCOURSETRACKER_GRAPHQLAPIENDPOINTOUTPUT, {
        method: 'post',
        body: JSON.stringify({ query: print(createCourse), variables: { input: { ...course } } }),
        headers: {
            "x-api-key": process.env.API_GOLFCOURSETRACKER_GRAPHQLAPIKEYOUTPUT,
            'Content-Type': 'application/json',
        }
    });

    console.log("-------RESULT-------");
    const resultJson = await result.json();
    console.log(resultJson);

    /*if (resultJson.errors) return;

    for (rating of courseAndRatings.courseRatings) {
        const ratingResult = await fetch(process.env.API_GOLFCOURSETRACKER_GRAPHQLAPIENDPOINTOUTPUT, {
            method: 'post',
            body: JSON.stringify({ query: print(createCourseAndSlopeRating), variables: { input: { ...rating, courseAndSlopeRatingCourseId: courseAndRatings.course.id } } }),
            headers: {
                "x-api-key": process.env.API_GOLFCOURSETRACKER_GRAPHQLAPIKEYOUTPUT,
                'Content-Type': 'application/json',
            }
        });
        console.log("-------RESULT-------");
        const resultJson = await ratingResult.json();
        console.log(resultJson);
    };*/
}