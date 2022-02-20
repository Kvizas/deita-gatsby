import * as React from "react"
import Header from "../components/header/header"
import Navbar from "../components/navbar/navbar"

import "./index.sass"

// markup
const IndexPage = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Header></Header>
    </main>
  )
}

export default IndexPage
