import axios from 'axios';
import {config} from 'dotenv';
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Oct','Nov','Dec'];
const FULLMONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const getUrl = (postFix, arg=null) => {
  if(process.env.REACT_APP_HOST.indexOf('localhost') > -1){
    if(arg == 'req'){
      return `//${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}${postFix}`;
    }
    return `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}${postFix}?_limit=${process.env.REACT_APP_REQUEST_MAX}`;
  }
  else{
    if(arg == 'req'){
        return `/strapi${postFix}`;
    }
    return `/strapi${postFix}?_limit=${process.env.REACT_APP_REQUEST_MAX}`;
  }
}


export const getImageURL = (hash,ext) => {
  if(hash && ext){
    return `//${process.env.REACT_APP_CLOUD_FRONT_DOMAIN}/${hash}${ext}`;
  }
}

export const getDateFormat = (timestamp,type=null) => {
  let d = new Date(timestamp);
  let yr = d.getFullYear();
  let mo = d.getMonth();
  let dy = d.getDate();
  switch(type){
    case 'A':
      return `${FULLMONTHS[mo]}.${dy}, ${yr}`;
      break;

    default:
      return `${MONTHS[mo]} ${dy}, ${yr}`;
  }
}

export const getRateScore = (i,e,s,h,b) => {
  let mean = (i+e+s+h+b)/ 5;
  return mean;
}

export const getEmbeddedVideoURL = (url) => {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return `//www.youtube.com/embed/${match[2]}`;
    } else {
        return;
    }
}

export const getCurrentLocation = () => {
  return window.location.pathname;
}

export const getWindowWidth = () => {
  return window.innerWidth;
}

export const getImage = (str) => {
  if(typeof str != 'string') return '';
  let arr = str.split(',');
  return arr[arr.length - 2];
}
