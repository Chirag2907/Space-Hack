import React, {useEffect} from 'react'
import './Prediction.scss'
import cropDataAndra from './andhra_data.js'
import cropassam from './assam_data.js'
import cropDatachattisgarh from './chattisgarh_data.js'
import cropDataharyana from './haryana_data.js'
import cropDataGujarat from './gujarat_data.js'
import cropDataMadhyaPradesh from './madhya_data.js'
import cropDatapunjab from './punjab_data.js'

const Predict = (props) => {

  let monthName = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5:'May',
    6:'June',
    7:'July',
    8:'August',
    9:'September',
    10:'October',
    11:'November',
    12:'December'
  }



  let state = 'Haryana';
  let district = 'Hisar';
  let month = 'August';

  let data;

  if(state==='Andra Pradesh'){
    data = cropDataAndra;
  }

  if(state==='Assam'){
    data = cropassam;
  }

  if(state==='Chattisgarh'){
    data = cropDatachattisgarh;
  }

  if(state==='Haryana'){
    data = cropDataharyana;
  }

  if(state==='Gujarat'){
    data = cropDataGujarat;
  }

  if(state==='Madhya Pradesh'){
    data = cropDataMadhyaPradesh;
  }

  if(state==='Punjab'){
    data = cropDatapunjab;
  }


  let crop = data.find((crop) => {
    return crop.district === district && crop.month === month;
  }
  );

  let predicted_crop = crop.suggestedCrops;
  let ndvi = crop.NDVI;
  let ndbi = crop.NDBI;
  let ndwi = crop.NDWI;
  let temp = crop.temp;
  let rain = crop.rainfall;



  return (
    <div>
        <div className='predict-message'>
          Predicted Crop: {predicted_crop}
        </div>
        <div className='details'>
          <div>NDVI: {ndvi}</div>
          <div>NDBI: {ndbi}</div>
          <div>NDWI: {ndwi}</div>
          <div>Temperature: {temp}</div>
          <div>Rainfall: {rain}</div>
        </div>
    </div>
  )
}

export default Predict
// district: "Anantapur",
//     month: "April",
//     suggestedCrops: "Green Gram",
//     NDVI: 0.76,
//     NDBI: -0.05,
//     NDWI: 0.26,
//     temp: 30.5
