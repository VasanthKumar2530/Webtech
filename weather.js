setInterval(() => {
    let date = new Date();
    let time = document.getElementById("time");
    // let day = document.getElementById("day");
    time.textContent = ` ${date.getHours()} :${date.getMinutes()} : ${date.getSeconds()}`;
    // day.textContent = `${date.getDate()}  ${date.getMonth()} ${date.getFullYear()}`;
  
  }, 1000);


  let plac=document.getElementById("place")
  let place=plac.value

  let key = "2ad864b8c66fbf1e48caa02088e78306";
  let prom = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
  );
  prom
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let currentlocation=document.getElementById("currentlocation")
      currentlocation.textContent=data.name;
      let feels=document.getElementById("feels")
      let s1=document.createElement("sup")
      feels.appendChild(s1)
      feels.textContent=`feels like ${Math.round(Number(data.main.feels_like)-273)} ${s1.textContent="o"
          }C`
      let climate = document.getElementById("climate");
      let s=document.createElement("sup")
      climate.appendChild(s)
      climate.textContent = `${
          Math.round(Number(data.main.temp)) - 273 } ${s.textContent="o"}C`;
      let humidit=document.getElementById("humiditydisplay")
      humidit.textContent=`${data.main.humidity} ${"%"}`;
      console.log(data)
      let wind=document.getElementById("winddisplay")

     wind.textContent= `${data.wind.speed} ${'km/h'}`;
     console.log(data)
    })
    .catch(() => {
      console.log("error");
    });

plac.addEventListener("click",()=>{
    let place=plac.value

    let key = "2ad864b8c66fbf1e48caa02088e78306";
    let prom = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`
    );
    prom
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        let currentlocation=document.getElementById("currentlocation")
        currentlocation.textContent=data.name;
        let feels=document.getElementById("feels")
        let s1=document.createElement("sup")
        feels.appendChild(s1)
        feels.textContent=`feels like ${Math.round(Number(data.main.feels_like)-273)} ${s1.textContent="o"
            }C`
        let climate = document.getElementById("climate");
        let s=document.createElement("sup")
        climate.appendChild(s)
        climate.textContent = `${
            Math.round(Number(data.main.temp)) - 273 } ${s.textContent="o"}C`;
        let humidit=document.getElementById("humiditydisplay")
        humidit.textContent=`${data.main.humidity} ${"%"}`;
        console.log(data)
        let wind=document.getElementById("winddisplay")

       wind.textContent= `${data.wind.speed} ${'km/h'}`;
       console.log(data)
      })
      .catch(() => {
        console.log("error");
      });

})