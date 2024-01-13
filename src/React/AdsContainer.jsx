import React from 'react'
import ss1 from '../IMG/ss1.png'
import ss2 from '../IMG/ss2.png'

const AdsContainer = () => {
    return (
        <div className="ads-container">
            <div className="left-card">
                <div className="text">
                    <h3>Iphone 11</h3>
                    <h3>Rəngli.Güclü.<br />Əsl sizə lazım olan.</h3>
                    <h5>1519AZN</h5>
                    <p>Faizsiz taksitlə 127 AZN-dən </p>
                    <button>İndi alın</button>
                </div>
                <div className="photo">
                    <img src={ss1} alt="" />
                </div>
            </div>

            <div className="right-card">
                <div className="text">
                    <h3>AirTag</h3>
                    <h3>Əşyalarınızı tapmağın super asan yolu.</h3>
                    <h5>79 AZN-dən</h5>
                    <button>İndi alın</button>
                </div>
                <div className="photo">
                    <img src={ss2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AdsContainer