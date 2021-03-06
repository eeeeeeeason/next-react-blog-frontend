import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Component} from "react";
import { getAllList, getCategoryList, searchByKey } from '../api/blogServer'
import CategoryList from '../components/CategoryList';
import Nav from '../components/Nav';
import SearchBar from '../components/SearchBar';
export default class Home extends Component {
  static async getInitialProps({query}) {
    let data
    const catedata = await getCategoryList()

    if (!query.keyword) {
      console.log(1);
      data = await getAllList(0)
    } else {
      console.log(2);
      data = await searchByKey(query.keyword)
      data.Articles = data.Article
    }
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
        <main className={styles.main}>
          
          <SearchBar className={styles.content}></SearchBar>
          <p className={styles.description}>
            热门搜索：{' '}
            <code className={styles.code}>量子计算、 shor算法、 薛定谔的猫</code>
          </p>
  
          <div className={styles.grid}>
            {
              (this.props.res).Articles.map(it => {
                return (<a className={styles.card} href={'/detail?id='+it._id}>
                  <h2>{it.title} &rarr;</h2>
                  <div>{it.introduce}</div>
                </a>)
              })
              /*(JSON.stringify(this.props.res))*/
            }
          </div>
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
