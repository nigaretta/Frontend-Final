import React from 'react'
import '../CSS/satilan.css'

const Lorem = (props) => {
  return (
    <div className="lorem">
            <div className="lorem-container">
                <div className="lorem-box">
                    <img src={props.image} />
                    <h4>{props.heading}</h4>
                    <p>{props.lorem}</p>
                </div>
            </div>
        </div>
  )
}

export default Lorem