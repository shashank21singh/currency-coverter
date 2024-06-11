const BASE_URL=
"https://cdn.jsdelivr.net/gh/fawahmed0/currency-api@1/latest/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg"); 


for(let select of dropdowns){
for(currCode in countryList){
    let newOption =document.createElement("option");
    newOption.innerText = currCode;
    if(select.name === "from" && currCode === "USD"){
        newOption.selected = "selected";
    }else if(select.name === "to" && currCode === "INR"){
        newOption.selected="selected";
    }
    select.append(newOption);
}
select.addEventListener("change", (evt) =>{
    updateFlag(evt.target);
})
}

btn.addEventListener("click",async (evt) => {
    // evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal === "" || amtVal>1){
        amtVal=1;
        amount.value="1";
    }


const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;    
let response=await fetch(URL);
let data= await response.json();
let rate=data[toCurr.value.toLowerCase()];

let finalamount=amtVal *rate;
msg.innerText =`${amtVal} ${fromCurr.value}= ${finalamount} ${toCurr.value}`
});
