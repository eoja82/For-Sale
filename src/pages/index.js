import React from "react"
import Layout from "../components/layout"
import AllListings from "../components/allListings"


const Index = () => {
  return (
    <Layout>
      <h1 className="text-center mt-4 mb-4 display-3">My Stuff For Sale</h1>
      <AllListings />
    </Layout>
  )
}

export default Index