import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className="container mx-auto mt-16 px-4 md:px-64">
        <div className="flex justify-center text-2xl mb-4"><Link to="/pages/story">Read The Story</Link></div>
      </div>
    </Layout>
  )
}

export default IndexPage