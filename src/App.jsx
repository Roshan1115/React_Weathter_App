import React, { useEffect, useState } from 'react'

const Boxx = () => {

  const [city, setcity] = useState("Mumbai");

  useEffect(() => {
    alert("city changed")
  }, [city])



  return ( <>
    <div className="box">
      <div className="inputdiv">
        <input
          type="search"
          onChange={(e) => {
            setcity(e.target.value)
          }}
           />
      </div>

      <div className="info">
        <h1>{city}</h1>
        <h1>30 °C</h1>
        <p>Min : 25 °C and Max : 31 °C</p>
      </div>
    </div>
  </>
  )
}
export default Boxx;