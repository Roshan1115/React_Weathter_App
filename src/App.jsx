import React, { useEffect, useState } from 'react'

const Boxx = () => {

  const [city, setcity] = useState("Mumbai");
  const [temperature, settemperature] = useState({})

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=179913c86f43e225a523c3dd41ee40ca`

    const getData = async () => {
      const resposse = await fetch(url);
      const resJson = await resposse.json();
      settemperature(resJson.main)
    }

    getData();
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

      {
        temperature != null ? 

      <div className="info">
        <h1>{city}</h1>
        <h1>{temperature.temp} °C</h1>
        <p>Min : {temperature.temp_min} °C and Max : {temperature.temp_max} °C</p>
      </div>
        :
      <div className="info">
        <h2>No data found 🥲</h2>
      </div>
      }
      
    </div>
  </>
  )
}
export default Boxx;