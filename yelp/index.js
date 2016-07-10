'use strict';

const yelpApiSignatures = require('./config/yelpAPI.js')
let Yelp = require('yelp')

let yelp = new Yelp(yelpApiSignatures)

let testCoords = {
  accuracy:72,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  latitude: 40.250834399999995,
  longitude :-111.666535,
  speed: null
}

function printBiz(data){
  console.log(data.businesses);
}

yelp.search({
  term: 'pizza',
  location: 'orem',
  cll: testCoords.latitude + ',' + testCoords.longitude
})
  .then(printBiz)
  .catch(function (err) {
    console.error(err);
  });
