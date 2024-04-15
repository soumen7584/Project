const hoursel=document.getElementById("hours");
const minutesel=document.getElementById("minutes");
const secondsel=document.getElementById("seconds");
const ampmel=document.getElementById("ampm");

function updateclock(){
    let h=new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm ="am";
    if(h>12){
        h=h-12;
        ampm="pm";
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    hoursel.innerText=h;
    minutesel.innerText=m;
    secondsel.innerText=s;
    ampmel .innerText=ampm;
    setTimeout(()=>{
        updateclock()
    },1000)
    
}
updateclock();

