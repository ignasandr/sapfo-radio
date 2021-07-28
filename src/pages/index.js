import * as React from "react"
import "./styles.scss" 

// markup
const IndexPage = () => {
  return (
    // <main>
    <main>
      <div className="center">
          <div className="player">
            {/* // frame */}
            <div id="f1" className="frame"></div>
            <div id="f2" className="frame"></div>
            <div id="f3" className="frame"></div>
            <div id="f4" className="frame"></div>



            {/* // cassette */}

            <div id="c1" className="cassetteA"></div>
            <div id="c2" className="cassetteA"></div>
            <div id="c3" className="cassetteA"></div>
            <div id="c4" className="cassetteA"></div>

            <div id="c5" className="cassetteB"></div>
            <div id="c6" className="cassetteB"></div>
            <div id="c7" className="cassetteB"></div>
            <div id="c8" className="cassetteB"></div>

            <div id="c9" className="cassetteA"></div>
            <div id="c10" className="cassetteA"></div>
            <div id="c11" className="cassetteA"></div>
            <div id="c12" className="cassetteA"></div>

            <div id="c13" className="cassetteA"></div>
            <div id="c14" className="cassetteA"></div>
            <div id="c15" className="cassetteA"></div>
            <div id="c16" className="cassetteA"></div>

            <div id="c17" className="cassetteA"></div>
            <div id="c18" className="cassetteA"></div>
            <div id="c19" className="cassetteA"></div>
            <div id="c20" className="cassetteA"></div>

            <div id="c21" className="cassetteA"></div>
            <div id="c22" className="cassetteA"></div>
            <div id="c23" className="cassetteA"></div>
            <div id="c24" className="cassetteA"></div>

            {/* // empty */}

            <div id="e1" className="empty"></div>
            <div id="e2" className="empty"></div>
            <div id="e3" className="empty"></div>
            <div id="e4" className="empty"></div>
            <div id="e9" className="empty"></div>

            {/* // label */}

            <div id="l1" className="labelA"></div>
            <div id="l2" className="labelB"></div>
            <div id="l3" className="labelA"></div>
            <div id="l4" className="labelC"></div>

            {/* // dots */}
            <div id="d1" className="bg"></div>
            <div id="d2" className="bg"></div>
            <div id="d3" className="bg"></div>
            <div id="d4" className="bg"></div>

            <div id="d5" className="labelA"></div>
            <div id="d6" className="bg"></div>
            <div id="d7" className="bg"></div>
            <div id="d8" className="labelB"></div>

            {/* // button */}
            <div id="button" className="button">
              <h1>▶</h1>
            </div>

        </div>
      </div>
    </main>
  )
}

export default IndexPage
