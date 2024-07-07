import { city } from "./city.js";


let localitiescontainerEl=document.querySelector(".localities_container")
let htmllocalitieslist=city.map((el)=>{
return `
<div class="localities_list">
<div class="localities_card">
    <h3>${el.name}</h3>
    <p>${el.place ? el.place + "places" : ""}</p>
</div>
<i class="fa-solid fa-angle-right"></i>
</div>
`
}).join("")

localitiescontainerEl.innerHTML=htmllocalitieslist