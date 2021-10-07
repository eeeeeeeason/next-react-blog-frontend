import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Component} from "react";
import { getCategoryList, articleDetail } from '../api/blogServer'
import CategoryList from '../components/CategoryList';
import Nav from '../components/Nav';

export default class Home extends Component {
  static async getInitialProps({query}) {
    const catedata = await getCategoryList()
    const data = await articleDetail(query.id)
    console.log(catedata);
    return {
    	res: data,
      catedata
    }
  }
  render () {
    return (
      <div className={styles.container}>
        <Head>
          <title>Quantum Knowledge</title>
          <meta name="keywords" content="量子计算入门,量子计算,量子计算科普,量子计算软件,量子计算线路设计,量子计算测控,量子计算应用,林育丞" />
          <meta name="description" content="从初学者角度分享量子计算学习过程，与软件的开发相关难点" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav catedata={this.props.catedata}></Nav>
        <main className={styles.content}>
          {this.props.res.articleDetails.articleContent}
          
          
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
  }
}
