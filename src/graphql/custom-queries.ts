export const listCourseIDs = /* GraphQL */ `
  query ListCourseIDs(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;

export const listCoursesForAutcomplete = /* GraphQL */ `
  query ListCoursesForAutcomplete(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id,
        clubName,
        courseName,
        city,
        state
      }
      nextToken
    }
  }
`;