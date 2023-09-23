let temp= document.getElementsByTagName("p")[3];
let wind = document.getElementsByTagName("p")[4];
let key = '28047a77b7057afc4721ac3fa6ca4b22';
let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let inp = document.getElementsByTagName('input')[0];
let city =document.querySelector(".city").firstElementChild;
let click  = document.getElementsByTagName('img')[0];
document.querySelector(".p").firstElementChild.hidden= true;
function getTemp(){
if (inp.value=='' || inp.value==undefined){
    document.querySelector(".p").firstElementChild.hidden= false;
}else{
    async function s (){
        let a = await fetch(url+inp.value+"&appid="+key+'&units=metric');
        let r = await a.json();
        if (r.name ==undefined){
            city.textContent='No redord Found!';
            temp.textContent ='~~~';
            wind.textContent = '~~~'
        }else{
            city.textContent=r.name;
            temp.textContent = r.main.temp+ " °C";
            wind.textContent = r.wind.speed+ " KM/H"
        }
    }
    s();
}
}
inp.oninput = ()=>{
    if (inp.value=='' || inp.value==undefined){
        document.querySelector(".p").firstElementChild.hidden= false;
    }
    else{
        document.querySelector(".p").firstElementChild.hidden= true;
    }
}

document.addEventListener("keypress", (e)=>{
    if (inp.value=='' || inp.value==undefined){}
    else{
       if (e.key==='Enter') getTemp();
    }
})



