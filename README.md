# [City Time](https://www.npmjs.com/package/city-time)

<div id="headline" align="center">
  <h1>City Time</h1>
  

  <a href="https://www.npmjs.com/package/city-time">
    <img src="https://badge.fury.io/js/city-time.svg" alt="PyPI version"></img>
  </a>
</div> 
City time is a package whihc will return a the current time of a givent city.This was build with the support of moment js.

## Usage

```bash
$ npm i city-time

```

## Example 

Basic method as follows

```javascript
const citytime= require('city-time');
console.log(citytime.getTimeForCity('Colombo'))

```

The following is the output for above code

```javascript
Sun Sep 05 2021 22:31:22 GMT+0530
```

getTimeForCity() function accpets two paramters
 1. City Name (Required)
 2. option (Optional)

 ## Usage 

 ```javascript
const citytime= require('city-time');
console.log(citytime.getTimeForCity('Colombo',options={object=true}))

```
Object Property is false in default.But once you set it to true it will return a mooment.js object

The following is the output for above code

```javascript
Moment<2021-09-05T22:42:58+05:30>
```


 ```javascript
const citytime= require('city-time');
console.log(citytime.getTimeForCity('Colombo',options={format='YYYY'}))

```
The following is the output for above code

```javascript
2021
```

format Property is empty in default.You can pass mooment js options to get the relevent format dates
Available format :

    YYYY: 4-digit year 
    YY: 2-digit year 
    MMMM: Full-length month 
    MMM: 3 character month 
    MM: Month of the year, zero-padded 
    M: Month of the year 
    DD: Day of the month, zero-padded 
    D: Day of the month 
    Do: Day of the month with numeric ordinal contraction 



Speiccla thanks for city-timezones[city-timezones](https://www.npmjs.com/package/city-timezones) 