import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const centerScreen = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "90vh",
}

const player = {
  display: "grid",
  gridTemplateColumns: "repeat(41, 15px)",
  gridTemplateRows: "repeat(35, 15px)",
  backgroundColor: "red"
}

// markup
const IndexPage = () => {
  return (
    // <main>
    <main style={pageStyles}>
      <div style={centerScreen}>
        <div style={player}>
          {/* <p>Casette player</p> */}
        </div>
      </div>
    </main>
  )
}

export default IndexPage
