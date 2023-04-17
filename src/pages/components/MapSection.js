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
                    <p>(304) 529-4585</p>
                </div>
                <div className='hours-container'>
                    <h1 className='hours-title'>Hours of Operation</h1>
                    <p>Wednesday & Thursday: 4-10pm</p>
                    <p>Friday & Saturday: 4-11 PM</p>
                    <p>Sunday: 11 AM - 10 PM</p>
                    <p>Closed Monday and Tuesday</p>
                    <div className='social-icons-bottom'>
          <a href='https://www.facebook.com/thegrillonthird' target="_BLANK">
          <img className='social-icon-f' src="https://thegrill.bulldog.rocks/admin/wp-content/uploads/2022/12/107175_circle_facebook_icon.png">

          </img>

          </a>
          <a href='https://www.instagram.com/thegrillonthird/?hl=en' target="_BLANK">
          <img className='social-icon-i' src='https://thegrill.bulldog.rocks/admin/wp-content/uploads/2022/12/1298747_instagram_brand_logo_social-media_icon.png'></img>
          </a>
        </div>
                </div>
            </div>
            <div className="mapouter"><div className="gmap_canvas"><iframe width={959} height={423} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.7719421651514!2d-82.43553154882727!3d38.42363497954671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884609cc9618753f%3A0xe7b1bede79954438!2s1513%203rd%20Ave%2C%20Huntington%2C%20WV%2025701!5e0!3m2!1sen!2sus!4v1669735469027!5m2!1sen!2sus" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.whatismyip-address.com" /><br /><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:423px;width:959px;}" }} /><a href="https://www.embedgooglemap.net">how to embed a map in wordpress</a><style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:423px;width:959px;}" }} /></div>
            </div>
            
        </div>
    )

}

export default MapSection