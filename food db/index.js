//meal api
const searchFood = ()=>{
    const input = document.getElementById("input");
    const inputValue = input.value;
    input.value="";

if(inputValue==""){
  const alertt = document.createElement('p')
  alertt.innerText="dont leave empty input give please search"
   document.getElementById("error").appendChild(alertt)
}
else{
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayResult(data))
}
}

const displayResult = meal=>{
   const meal2 = meal.meals
   //  searchResult.innerHTML="";//search result clear
    searchResult.textContent="";//search result clear
   for(const meals of meal2){
       const div = document.createElement("div");
       div.innerHTML=`<div onclick="imageDetails('${meals.idMeal}')" class="card">
       <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meals.strMeal}</h5>
         <p class="card-text">${meals.strInstructions.slice(0,100)}</p>
       </div>
     </div>`  
     const searchResult = document.getElementById("searchResult");
     searchResult.appendChild(div)
 
 }
 

}
// image details
const imageDetails = mealDetails =>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`;

    fetch(url)
    .then(res=>res.json())
    .then(data => detailsdata(data))

}
const detailsdata = value =>{
    console.log(value)
    const valu2 = value.meals
    details.innerText=""//result clear
    for(const value3 of valu2 ){
        const div = document.createElement("div");
    div.innerHTML=`<div class="card">
    <img src="${value3.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${value3.strInstructions.slice(0,300)}</p>
      <a href="${value3.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
 const details =  document.getElementById("details").appendChild(div)

    }
}
