import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}

const buttonStyles = {
  marginTop: 48,
  marginBottom: 48,
  padding: 10,
  backgroundColor: "#212121",
  color: "#fff",
  width: 150,
  textAlign: "center",
  cursor: "pointer"
}

const colStyles = {
  display: "flex",
  justifyContent: "space-evenly"
}


// markup
const IndexPage = () => {
  return (
    <StaticQuery
      query={undefined}
      render={data =>
        <main style={pageStyles}>
          <title>Home Page</title>
          <h1 style={headingStyles}>
            Prisijungimas {console.log(data.strapi.konspektais.data)}
            <br />
            <span style={headingAccentStyles}>— hola, como estas ?</span>
            <span role="img" aria-label="Party popper emojis">
              🎉🎉🎉
            </span>
          </h1>
          <div style={colStyles}>
            <div style={paragraphStyles}>
              <h2>Login</h2>
              <h3>Identifier</h3>
              <input type="text"></input>
              <h3>Password</h3>
              <input type="text"></input>
              <div style={buttonStyles}>Prisijungti</div>
            </div>
            <div style={paragraphStyles}>
              <h2>Register</h2>
              <h3>Identifier</h3>
              <input type="text"></input>
              <h3>Password</h3>
              <input type="text"></input>
              <div style={buttonStyles}>Prisijungti</div>
            </div>
            <div style={paragraphStyles}>
              <h2>Forgot password</h2>
              <h3>Identifier</h3>
              <input type="text"></input>
              <h3>Password</h3>
              <input type="text"></input>
              <div style={buttonStyles}>Prisijungti</div>
            </div>
          </div>
        </main>
      }
    ></StaticQuery>
  )
}
export default IndexPage