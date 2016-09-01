import React, { PropTypes } from 'react';
import courses from '../data/courses';
import Radium from 'radium';
import Course from './Course';
class Courses extends React.Component {
  render () {
    let styles = {
      root: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        display: 'flex',
        flexWrap: 'wrap'
      }
    }
    return(
      <div style={styles.root}>
        { courses.map((course, i) => <Course key={i} course={course} />)}
      </div>
    )
  }
}

export default Courses;
