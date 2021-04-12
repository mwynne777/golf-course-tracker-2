/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCourseInput = {
  id?: string | null,
  clubName: string,
  courseName: string,
  city: string,
  state: string,
  courseAndSlopeRatings: Array< CourseAndSlopeRatingInput | null >,
};

export type CourseAndSlopeRatingInput = {
  id: string,
  teeName: string,
  gender?: string | null,
  par: number,
  courseRating?: number | null,
  bogeyRating?: number | null,
  slopeRating?: number | null,
  frontCourseRating?: number | null,
  frontSlopeRating?: number | null,
  backCourseRating?: number | null,
  backSlopeRating?: number | null,
};

export type ModelCourseConditionInput = {
  clubName?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Course = {
  __typename: "Course",
  id?: string,
  clubName?: string,
  courseName?: string,
  city?: string,
  state?: string,
  courseAndSlopeRatings?:  Array<CourseAndSlopeRating | null >,
  createdAt?: string,
  updatedAt?: string,
};

export type CourseAndSlopeRating = {
  __typename: "CourseAndSlopeRating",
  id?: string,
  teeName?: string,
  gender?: string | null,
  par?: number,
  courseRating?: number | null,
  bogeyRating?: number | null,
  slopeRating?: number | null,
  frontCourseRating?: number | null,
  frontSlopeRating?: number | null,
  backCourseRating?: number | null,
  backSlopeRating?: number | null,
};

export type UpdateCourseInput = {
  id: string,
  clubName?: string | null,
  courseName?: string | null,
  city?: string | null,
  state?: string | null,
  courseAndSlopeRatings?: Array< CourseAndSlopeRatingInput | null > | null,
};

export type DeleteCourseInput = {
  id?: string | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  clubName?: ModelStringInput | null,
  courseName?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items?:  Array<Course | null > | null,
  nextToken?: string | null,
};

export type CreateCourseMutationVariables = {
  input?: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    clubName: string,
    courseName: string,
    city: string,
    state: string,
    courseAndSlopeRatings:  Array< {
      __typename: "CourseAndSlopeRating",
      id: string,
      teeName: string,
      gender?: string | null,
      par: number,
      courseRating?: number | null,
      bogeyRating?: number | null,
      slopeRating?: number | null,
      frontCourseRating?: number | null,
      frontSlopeRating?: number | null,
      backCourseRating?: number | null,
      backSlopeRating?: number | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input?: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    clubName: string,
    courseName: string,
    city: string,
    state: string,
    courseAndSlopeRatings:  Array< {
      __typename: "CourseAndSlopeRating",
      id: string,
      teeName: string,
      gender?: string | null,
      par: number,
      courseRating?: number | null,
      bogeyRating?: number | null,
      slopeRating?: number | null,
      frontCourseRating?: number | null,
      frontSlopeRating?: number | null,
      backCourseRating?: number | null,
      backSlopeRating?: number | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input?: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    clubName: string,
    courseName: string,
    city: string,
    state: string,
    courseAndSlopeRatings:  Array< {
      __typename: "CourseAndSlopeRating",
      id: string,
      teeName: string,
      gender?: string | null,
      par: number,
      courseRating?: number | null,
      bogeyRating?: number | null,
      slopeRating?: number | null,
      frontCourseRating?: number | null,
      frontSlopeRating?: number | null,
      backCourseRating?: number | null,
      backSlopeRating?: number | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCourseQueryVariables = {
  id?: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    clubName: string,
    courseName: string,
    city: string,
    state: string,
    courseAndSlopeRatings:  Array< {
      __typename: "CourseAndSlopeRating",
      id: string,
      teeName: string,
      gender?: string | null,
      par: number,
      courseRating?: number | null,
      bogeyRating?: number | null,
      slopeRating?: number | null,
      frontCourseRating?: number | null,
      frontSlopeRating?: number | null,
      backCourseRating?: number | null,
      backSlopeRating?: number | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items?:  Array< {
      __typename: "Course",
      id: string,
      clubName: string,
      courseName: string,
      city: string,
      state: string,
      courseAndSlopeRatings:  Array< {
        __typename: "CourseAndSlopeRating",
        id: string,
        teeName: string,
        gender?: string | null,
        par: number,
        courseRating?: number | null,
        bogeyRating?: number | null,
        slopeRating?: number | null,
        frontCourseRating?: number | null,
        frontSlopeRating?: number | null,
        backCourseRating?: number | null,
        backSlopeRating?: number | null,
      } | null >,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    clubName: string,
    courseName: string,
    city: string,
    state: string,
    courseAndSlopeRatings:  Array< {
      __typename: "CourseAndSlopeRating",
      id: string,
      teeName: string,
      gender?: string | null,
      par: number,
      courseRating?: number | null,
      bogeyRating?: number | null,
      slopeRating?: number | null,
      frontCourseRating?: number | null,
      frontSlopeRating?: number | null,
      backCourseRating?: number | null,
      backSlopeRating?: number | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    clubName: string,
    courseName: string,
    city: string,
    state: string,
    courseAndSlopeRatings:  Array< {
      __typename: "CourseAndSlopeRating",
      id: string,
      teeName: string,
      gender?: string | null,
      par: number,
      courseRating?: number | null,
      bogeyRating?: number | null,
      slopeRating?: number | null,
      frontCourseRating?: number | null,
      frontSlopeRating?: number | null,
      backCourseRating?: number | null,
      backSlopeRating?: number | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    clubName: string,
    courseName: string,
    city: string,
    state: string,
    courseAndSlopeRatings:  Array< {
      __typename: "CourseAndSlopeRating",
      id: string,
      teeName: string,
      gender?: string | null,
      par: number,
      courseRating?: number | null,
      bogeyRating?: number | null,
      slopeRating?: number | null,
      frontCourseRating?: number | null,
      frontSlopeRating?: number | null,
      backCourseRating?: number | null,
      backSlopeRating?: number | null,
    } | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};
