/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      clubName
      courseName
      city
      state
      courseAndSlopeRatings {
        id
        teeName
        gender
        par
        courseRating
        bogeyRating
        slopeRating
        frontCourseRating
        frontSlopeRating
        backCourseRating
        backSlopeRating
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clubName
        courseName
        city
        state
        courseAndSlopeRatings {
          id
          teeName
          gender
          par
          courseRating
          bogeyRating
          slopeRating
          frontCourseRating
          frontSlopeRating
          backCourseRating
          backSlopeRating
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchCourses = /* GraphQL */ `
  query SearchCourses(
    $filter: SearchableCourseFilterInput
    $sort: SearchableCourseSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchCourses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        clubName
        courseName
        city
        state
        courseAndSlopeRatings {
          id
          teeName
          gender
          par
          courseRating
          bogeyRating
          slopeRating
          frontCourseRating
          frontSlopeRating
          backCourseRating
          backSlopeRating
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
