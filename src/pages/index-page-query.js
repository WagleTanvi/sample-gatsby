import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>{title}</h2>
          <h3>Develop & Deploy</h3>
          <p>{description}</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/AppLogo.png" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

// export const query = graphql`
// query SiteInfo {
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }`