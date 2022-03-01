const search = ()=>{
    const input = document.getElementById("input");
    spiner ("block")
 
    inputValue = input.value
    input.value=""
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res=>res.json())
    .then(data=>showFood(data))
}
const showFood = (food)=>{
    const showFood = document.getElementById("showFood");
    showFood.innerHTML=""
    const foodi = food.drinks
 if(!foodi){
    document.getElementById("p").style.display="block"
 }
 else{
    document.getElementById("p").style.display="none"
    for(const foods of foodi){
       const div = document.createElement("div") ;
       div.innerHTML=`
        <div onclick="showDetails('${foods.idDrink}')">
        <img class="w-75" src="${foods.strDrinkThumb}" alt="">
        <p>${foods.strCategory}</p>
        </div>
       `
       showFood.appendChild(div)
      
    }
 }
    spiner ("none")
  
}
//spinar show
const spiner = (display)=>{
    document.getElementById("image").style.display=display
}

const showDetails = detailsValue=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${detailsValue}`)
    .then(res=>res.json())
    .then(data=>fullDetails(data.drinks))
}
const fullDetails = detailsValue=>{
    const showDetails = document.getElementById('showDetails')
    showDetails.innerHTML=""
    for(const detailsValues of detailsValue){
        const div = document.createElement("div");
        div.innerHTML=`
        <img class="w-25" src="${detailsValues.strDrinkThumb}" alt="">
        <h3>Category:${detailsValues.strCategory}</h3>
        <p>${detailsValues.strInstructionsDE}</p>
        `
        showDetails.appendChild(div)
    }
}