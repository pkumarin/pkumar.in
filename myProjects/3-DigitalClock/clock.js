const clock = document.getElementById('clock')



setInterval(function(){
    let date = new Date()
const myTime =date.toLocaleTimeString();
clock.innerHTML=myTime;


},1000)
