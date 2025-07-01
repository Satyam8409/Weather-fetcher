
let btn=document.querySelector('button')
btn.addEventListener('click',()=>{

    function fetchData(data){
        console.log(data);
        
        let represent=document.getElementById('weatherInfo');

        let val1=data.current.temp_c;
        let val2=data.location.name;
        let val3=data.location.region;
        let val4=data.location.country;
        let val5=data.current.condition.text;
        let imgUrl=data.current.condition.icon;

        let values=`${val1}°C <br> ${val2} (${val3}) <br>  ${val4} <br> ${val5} <br> <img src="${imgUrl}">` ;
        represent.innerHTML=values;
    }

    let place=document.getElementById('location').value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=34028ea163234432885100605251606&q=${place}&aqi=yes`)
    .then(response=>response.json())
    .then(data=>fetchData(data))
})


























/*
document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;
    
    function updateTemp(data){
       const element = document.getElementById('weatherInfo');
       element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
    }

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${place}&aqi=yes`)
    


    prom
    .then(response=>response.json())
    .then(data=> updateTemp(data));



})
    */