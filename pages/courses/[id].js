import { API } from '@aws-amplify/api';
import { listCourseIDs } from '../../src/graphql/custom-queries.ts';
import { getCourse } from '../../src/graphql/queries.ts';
import { PageHeader, Tag, Button, Statistic, Row } from 'antd';

const Course = (props) => {

    return (
        <PageHeader
            onBack={() => window.history.back()}
            title={props.course.courseName}
            tags={<Tag color="blue">Running</Tag>}
            subTitle={`${props.course.city}, ${props.course.state}`}
            extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Enter Score</Button>,
                <Button key="1" type="primary">Write Review</Button>,
            ]}
        >
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