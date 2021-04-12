import { API } from '@aws-amplify/api';
import { listCourseIDs } from '../../src/graphql/custom-queries.ts';
import { getCourse } from '../../src/graphql/queries.ts';

const Course = (props) => {

    return (
        <h1>{props.course.courseName}</h1>
    );
};

export default Course;

export async function getStaticProps({ params }) {

    const courses = await API.graphql({
        query: getCourse,
        variables: { id: params.id }
    });

    return {
        props: {
            course: courses.data.getCourse,
        }
    }
};

export async function getStaticPaths() {
    let courses = null;
    let nextToken = null;
    let courseArgs = [];

    do {
        courses = await API.graphql({
            query: listCourseIDs,
            variables: { limit: 20000, nextToken }
        });

        nextToken = courses.data.listCourses.nextToken;
        courseArgs = courseArgs.concat(courses.data.listCourses.items.map(courseId => ({
            params: courseId
        })));
    } while (nextToken)

    return {
        paths: courseArgs,
        fallback: false
    };
}