"use strict";(function(){(function gnbDepth1On(){var a=location.pathname;a=a.split("/"),a=a[2].split("."),a=a[0];var b=document.querySelectorAll("#gnb .depth1_list .depth1");"project"===a?b[0].classList.add("on"):"profile"===a&&b[1].classList.add("on")})();(function projectSpecialMedal(){for(var a,b=document.querySelectorAll(".project_con.special"),c=0;c<b.length;c++)a=document.createElement("div"),a.classList.add("medal"),a.innerHTML="\u2764\uFE0F",b[c].querySelector(".thumb").appendChild(a)})();(function topBtn(){var a=document.querySelector("#footer .top");a.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})})()})();