const moment = require('moment-timezone');

const cityMapping = require('./dataset/cityMap.json')


function getTimeForCity(city,options) {
    var object=false,format='';
if(options){
    object = options.object;
    format = options.format ;
}

 const cityTimzone = cityMapping.filter(item=> item.city.toLowerCase() === city.toLowerCase())
 
 if(cityTimzone.length == 0){
    throw 'Given City is not found';
   
 }
 const now = moment().utc();
 const time= now.tz(cityTimzone[0].timezone)
 if(object===true){
     return time;
 }else if (format.length>0){
    return moment(time).format(format);
 }
 else{
     return time.toString();
 }
  

}

module.exports = {
  getTimeForCity,
};


console.log(getTimeForCity('Colombo',options={format:'MMMM'}))