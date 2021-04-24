import { useEffect, useState } from 'react';
import { API } from '@aws-amplify/api';
import { listCourseIDs } from '../../src/graphql/custom-queries.ts';
import { getCourse } from '../../src/graphql/queries.ts';
import { PageHeader, Tag, Button, Statistic, Row } from 'antd';

const Course = (props) => {
    const [course, setCourse] = useState(props.course);

    useEffect(() => {
        const fetchCourse = async () => {
            const result = await API.graphql({
                query: getCourse,
                variables: { id: props.course.id }
            });
            //TODO: Error handling
            setCourse(result.data.getCourse);
        }
        if (props.error) {
            console.log("Making the extra call because of error in pre-rendering");
            fetchCourse();
        }
    }, []);

    return (
        <PageHeader
            onBack={() => window.history.back()}
            title={course.courseName}
            tags={<Tag color="blue">Running</Tag>}
            subTitle={`${course.city}, ${course.state}`}
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Enter Score</Button>,
                <Button key="1" type="primary">Write Review</Button>,
            ]}
        >
            <Row>
                <Statistic title="Status" value="Pending" />
                <Statistic title="Balance" prefix="$" value={3345.08} />
            </Row>
            <Row>
                <Statistic title="Status" value="Pending" />
                <Statistic
                    title="Price"
                    prefix="$"
                    value={568.08}
                    style={{
                        margin: '0 32px',
                    }}
                />
                <Statistic title="Balance" prefix="$" value={3345.08} />
            </Row>
        </PageHeader>
    );
};

export default Course;

export async function getStaticProps({ params }) {

    let course = { id: params.id, courseName: '', city: '', state: '' };

    try {
        course = await API.graphql({
            query: getCourse,
            variables: { id: params.id }
        });

        if (!course || !course.data || !course.data.getCourse || course.errors) {
            console.log("Uncaught Error on course: ", params.id);
        }

    } catch (e) {
        console.log("Caught Error on course: ", params.id)
        return {
            props: {
                course,
                error: true
            }
        }
    }

    return {
        props: {
            course: course.data.getCourse,
            error: false
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