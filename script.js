function search(){
    const input=document.querySelector("#search");
   
   return input.value;
    
}


async function getData(event){

     event.preventDefault();

const targetLocation =search().trim();

if (!targetLocation) {
    alert("Please enter a city name.");
    return;
}

       

       let url =`https://api.weatherapi.com/v1/current.json?key=e307e2562ffd4df6a70142557250207&q=${targetLocation}&aqi=no`;

       const res= await fetch(url);

       const data = await res.json();

       console.log(data);



       const city=document.querySelector("#city");

       const country=document.querySelector("#country");

       const time=document.querySelector("#time");

       const temp=document.querySelector("#temp");

       const weatherCondition=document.querySelector("#weather-condition");

       const icon=document.querySelector("#icon");

       
       city.innerHTML=data.location.name;
       country.innerHTML=`${data.location.region},${data.location.country}`;
       time.innerHTML=data.location.localtime;
       temp.innerHTML=data.current.temp_c;
       weatherCondition.innerHTML=data.current.condition.text;
       icon.setAttribute("src",`https:${data.current.condition.icon}`)


// console.log(data.location.name);
}

const submit =document.querySelector("#submit");

submit.addEventListener("click",getData);









   








  
   


 

