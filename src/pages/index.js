import * as React from "react"
import Header from "../components/header/header"
import Navbar from "../components/navbar/navbar"
import Recommendation from "../components/recommendation/recommendation"

import "./index.sass"

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Recommendation />
    </main>
  )
}

export default IndexPage
