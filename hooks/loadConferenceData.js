import { useState, useEffect } from 'react'
// import fs from 'fs'
const fs = require('fs')

const normalizedPath = require("path").join(__dirname, "data");


const useLoadConferenceData = () => {
  const [conferenceList, setConferenceList] = useState([]);

  useEffect(() => {
    console.log('hi')

    require('fs').readdirSync(normalizedPath).forEach((file) => {
      console.log(file);
      // require("./routes/" + file);
    });
  }, []);

  return {
    conferenceList
  }
}

export default useLoadConferenceData;
