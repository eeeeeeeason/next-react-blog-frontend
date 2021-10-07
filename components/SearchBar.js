import React, { Component } from 'react'
import styles from '../styles/SearchBar.module.css'
import Router from 'next/router'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }
  handleKeyPress = (event) => {
    console.log(event);
    if(event.key === 'Enter'){
      console.log('enter press here! ')
      Router.push({
        pathname: '/',
        query: {
          keyword: this.state.value
        }
      })
    }
  }
  render() {
    return (
      <div className={styles.bar}>
        <input type="text" placeholder="请输入搜索关键字/如：薛定谔的猫" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
  
}
