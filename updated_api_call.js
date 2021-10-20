 async function fetchWeather(lat, lon){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a47a5bf0eab40bab4032f07926e3e1f6`).then(value=>value.json());
        return response;
        }
  
        async function convertGeoLocation(city, country){
        let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=9b91ce824ad640db8cb4ad90fecb1c88&q=${city}%20${country}&pretty=1`).then(value => value.json());
        let result = response['results'][0]['geometry'];
        return result;
        }
  
      
  
        async function fetchHourly(lat, ling){
            /*
            Cjnage the return_arr.push method to add more values to the arrary.
            Let's say you need to add the windspeed also (hourly windspeed) just add something like
            'windspeeed':hourly[i]['windspeed']
            */
            
            let data = await fetchWeather(lat, ling);
            let hourly = data['hourly'];
            let return_arr = []
            let number_of_hours = 4
            
            for(let i = 0; i<number_of_hours; i++){
                return_arr.push( {
                    'temp':hourly[i]['temp'],
                    'feels_like':hourly[i]['feels_like']
                });
            }
            return {
                "data":return_arr
            }
            
          
          
        }


// How to call this script now????
// The answer is that, you will be getting the name of the city from the card yes?
// just follow the lines below, any varibale names are just placeholder
    
let geo_lat_ling = convertGeoLocation(THE_NAME_OF_THE_CITY_GOES_HERE)
// now get the lat and ling values 
let y = geo_lat_ling['ling']
let z = geo_lat_ling['lat']
// Now call the fetchhourly function and it will work

let x = await fetchHourly(z, y); //z is the latittue and y will be the longitude you got from the convertedGeoLocation function call so put the values approproatedly 
console.log(x)
