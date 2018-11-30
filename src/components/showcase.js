import React from 'react'
import { Link } from 'gatsby'



const Showcase = (props) => (
  <>
  <section id="showcase" className="pt-5 showcase" style={{backgroundImage: `url(${props.background})`}} >
        <div className="showcaseOverlay"></div>
        <div className='container'><h2 className="teko showCaseTitle">{props.name}</h2></div>
        
    </section>
  </>
)

export default Showcase