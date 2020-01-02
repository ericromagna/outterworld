import moment from 'moment'

var cday = new Date();
var today = cday.toLocaleDateString().replace(/\//g, "-");

export const apiKey = 'A8QOwQlPLCc2EYkcNhYxj1SZKIHh83v6tkp55y7e';
export const apodPath = 'https://api.nasa.gov/planetary/apod?api_key=';
export const closestAsteroidsPath = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${moment().format('YYYY-MM-DD')}&end_date=${moment().format('YYYY-MM-DD')}&api_key=${apiKey}`;

//PS: This Api only returns value for large amount of times (5 months before the current date is used in this case)
export const geoMagneticStormPath = `https://api.nasa.gov/DONKI/GST?startDate=${moment().subtract(5,'month').format('YYYY-MM-DD')}&endDate=${moment().format('YYYY-MM-DD')}&api_key=${apiKey}`;
export const todayformatClosestAsteroid = today;
