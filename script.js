
const icon = document.querySelector("#icon");
const main_con = document.querySelector(".main");
let percentage_input = document.querySelector("#percentage");
let sum_input = document.querySelector("#sum");
let btn_calc = document.querySelector(".btn_calc");
let btn_res = document.querySelector("#btn_res");
const result = document.querySelector(".result");
let inputs = document.querySelectorAll("input");
let error = document.querySelectorAll(".error");
let body = document.querySelector("body")

icon.addEventListener("click", function(){
  if(icon.classList.contains("moon")){
 icon.classList.remove("moon");
 icon.classList.add("sun");
 main_con.classList.remove("light_con");
 main_con.classList.add("dark_con");

 if(body.classList.contains("light")){
   body.classList.remove("light");
 body.classList.add("dark");
 //body.className = "dark";
 localStorage.setItem("theme","dark");
 localStorage.setItem("iconT","sun");
 localStorage.setItem("mainBg","dark_con");
 }


 main_con.style.background = " linear-gradient(#ff12a9,#981fff,#466dff)";
 


  } else{
     icon.classList.remove("sun");
     icon.classList.add("moon");
      main_con.classList.remove("dark_con");
 main_con.classList.add("light_con");
     
      if(body.classList.contains("dark")){
   body.classList.remove("dark");
 body.classList.add("light");


 localStorage.setItem("theme","light");
  localStorage.setItem("iconT","moon");
   localStorage.setItem("mainBg","light_con");
 }
  
       main_con.style.background = "linear-gradient(#3effd4,#00b4ff,#3262ff)"
        

  }
})


window.addEventListener("DOMContentLoaded", ()=>{
  const savedTh = localStorage.getItem("theme") || "light";
  const savedIc = localStorage.getItem("iconT") || "sun";
  const savedmain = localStorage.getItem("mainBg") || "dark_con";

  
  body.classList.remove("light","dark");
  body.classList.add(savedTh)
 body.className = savedTh;
 icon.classList.add(savedIc);
 icon.className = savedIc;
 main_con.classList.add(savedmain);
 main_con.className = savedmain;

 




})

const err_mess = function(er,mess){
  er.forEach(err => {
    err.style.display = mess;
  })
}

btn_calc.addEventListener("click", function(){

  let per_value = Number(percentage_input.value) / 100
  let sum_value = Number(sum_input.value)
 
  let res_value = sum_value * per_value;
  result.textContent = res_value.toFixed(2);

  if(percentage_input.value === "" || sum_input.value === ""){
   err_mess(error,"block")
  } else{
      err_mess(error,"none")
  }
 

});

btn_res.addEventListener("click", function(){
  percentage_input.value = "";
  sum_input.value = "";
  result.textContent = "0.00"
})

