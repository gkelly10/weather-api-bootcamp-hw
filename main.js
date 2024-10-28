

document.querySelector('button').addEventListener('click', getTemperature)
// https://www.weatherbit.io/api/weather-current


function getTemperature(){
    const userInput = document.querySelector('.userTypeHere').value
    const url = `https://api.weatherbit.io/v2.0/current?key=&city=${userInput}&units=I`
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.data[0].app_temp)
            console.log(data.data[0].city_name)
            
           
           document.querySelector('#temperature').innerText = `${data.data[0].temp} °F`
           document.querySelector('#cityNameHere').innerText = ` Today in : 
           ${data.data[0].city_name} `
           
            
        })
        .catch(err => {
        console.log(`error ${err}`)
    });
}




















/* function -> instructions pic of the day */
// function picOfTheDay(){
    //  variable usierInput to contain the date of input
    // const userInput=document.querySelector('input').value
    // variable to hold in API key
    // 
// func to let the API work//
//      fetch(url) 
//   .then(res => res.json()) // parse response as JSON 
//   .then(data => { 
    // method -> taking in res outputting res.json | taking in date it's the res json |outputting a series of things(console, docqueryselectors)
    // look into late since this was an example Leon told us to use.
    
    // console.log(data) 
    // console.log(data.text)
    // console.log(data.hdurl)
    // console.log(data.title)
    //  inserting stuff(date/exp/pic url/title) into html
    // document.querySelector('h1').innerText=data.date
    // document.querySelector('h3').innerText=data.explanation
    // document.querySelector('img').src = data.hdurl
    // document.querySelector('h2').innerText=data.title

//    }) 
  //  func for in case of errors
//   .catch(err => { 
//       console.log(`error ${err}`) 
//   });

//   }