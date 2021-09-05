const moment = require('moment-timezone');
const cityMapping = require('./dataset/cityMap.json')
const moment2=require('moment')

function cityTime(city,options) {
    var object=false,format='';
if(options){
    object = options.object ;
    format = options.format ;
}

 const cityTimzone = cityMapping.filter(item=> item.city.toLowerCase() === city.toLowerCase())
 const now = moment().utc();
 const time= now.tz(cityTimzone[0].timezone)
 if(object===true){
     return time;
 }else if (format.length>0){
    switch(format){
        case "MMMM Do YYYY, h:mm:ss a":
           return moment(time).format('MMMM Do YYYY, h:mm:ss a');
        case "dddd":
            return moment(time).format('dddd');
        case "MMM Do YY":
                return moment(time).format('MMM Do YY');
    }
 }
 else{
     return time.toString();
 }
  



}


module.exports = {
  cityTime,
};