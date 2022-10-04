import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'


const MapSection = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      wpPage(id: {eq: "cG9zdDo4"}) {
        id
        title
        uri
        gatsby {
          fieldGroupName
          logoImage {
            id
            mediaItemUrl
          }
          heroImage {
            id
            mediaItemUrl
          }
        }
      }
    }
  `)
    return (
        <div className='map-and-contact' id='location'>
            <div className='contact-container'>
                <div className='location-container'>
                    <h1 className='location-title'>Location</h1>
                    <p>
                        1513 Third Avenue
                        Huntington, WV 25701

                    </p>
                    <p>(304) 529-5485</p>
                </div>
                <div className='hours-container'>
                <h1 className='hours-title'>Hours of Operation</h1>
                <p>Tuesday-Thursday: 4-10 PM</p>
                <p>Friday & Saturday: 4-11 PM</p>
                <p>Closed Sunday & Monday</p>
                </div>
            </div>
            <div className="mapouter"><div className="gmap_canvas"><iframe width={959} height={423} id="gmap_canvas" src="https://maps.google.com/maps?q=1555%203rd%20Ave,%20Huntington,%20WV%2025701&t=&z=9&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.whatismyip-address.com" /><br /><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:423px;width:959px;}" }} /><a href="https://www.embedgooglemap.net">how to embed a map in wordpress</a><style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:423px;width:959px;}" }} /></div>
            </div>
        </div>
    )

}

export default MapSection