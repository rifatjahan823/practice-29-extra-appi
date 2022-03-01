// photo
const photos = ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>showPhotos(data))
}
const showPhotos = (photo)=>{
    photo.forEach(photos => {
        const div = document.createElement("div");
        div.innerHTML=`<div onclick="showDetails('${photos.id}')">
        <img class="w-75"src="${photos.url}" alt="">
        </div>
        `
        document.getElementById("showPhoto").appendChild(div)
    });
}

const showDetails = (showValue)=>{
    fetch(`https://jsonplaceholder.typicode.com/photos?id=${showValue}`)
    .then(res=>res.json())
    .then(data=>fullDetails(data))
}
const fullDetails = (detailsValue)=>{
    const showDetails = document.getElementById("showDetails")
    showDetails.innerHTML=""
    for(const detailsValues of detailsValue){
        const div = document.createElement("div");
        div.innerHTML=`
        <h3>${detailsValues.title}</h3>
        <img class="w-25" src="${detailsValues.url}" alt="">
        <img src="${detailsValues.thumbnailUrl}" alt="">
        `
        showDetails .appendChild(div)
    }
}