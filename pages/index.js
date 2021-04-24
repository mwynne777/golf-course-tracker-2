import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { API, graphqlOperation } from '@aws-amplify/api';
import { searchCourses } from '../src/graphql/queries.ts';
import { AutoComplete } from 'antd';
const { Option } = AutoComplete;
import Link from 'next/link';

export default function Home() {
  const [autoCompleteOptions, setAutoCompleteOptions] = useState([]);

  const getAutoComplete = async (userText) => {
    let result = [];
    if (userText) {
      let response = await API.graphql(graphqlOperation(searchCourses,
        {
          filter: { courseName: { matchPhrasePrefix: userText } },
          limit: 5
        }));
      result = response.data.searchCourses.items;
    }
    setAutoCompleteOptions(result);
  }

  const getAutoCompleteOptionsAsLinks = () => {
    return autoCompleteOptions.map(item => (
      <Option value={item.courseName} key={item.courseName}>
        <Link href={`/courses/${item.id}`}>
          {item.courseName}
        </Link>
      </Option>
    ));
  }

  return (
    <>
      <Head>
        <title>Course Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AutoComplete
        onChange={getAutoComplete}
        style={{ width: 200 }}
        placeholder='Enter Course or City'
      >
        {getAutoCompleteOptionsAsLinks()}
      </AutoComplete>
    </>
  )
}
