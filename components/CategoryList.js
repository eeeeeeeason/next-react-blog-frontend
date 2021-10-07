import React, { Component } from 'react'
import { getCategoryList } from '../api/blogServer'
import styles from '../styles/Home.module.css'

export default class CategoryList extends Component {
  
  render() {
    
    return (
      <div className={styles.tabContent}>
        {
          (this.props.catedata).tagList.map(tagIt => {
            return (<a className={styles.tab} key={tagIt._id} href={'/category?id='+tagIt.tagName}>
              {tagIt.tagName}
              
            </a>)
          })
        }

      </div>
    )
    
  }
}
