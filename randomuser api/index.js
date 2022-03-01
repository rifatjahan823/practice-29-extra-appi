
const randomuse = ()=>{
   fetch('https://randomuser.me/api/')
   .then(res=>res.json())
   .then(data=>updateRandomuse(data))
}
  
        
  const updateRandomuse = updateR =>{
      const updates = updateR.results
    for(const updatesR of updates ){
        const div = document.getElementById("div");
        div.classList.add("style")
        div.innerHTML=`<div class="random">
        <img class = "image"src = "${updatesR.picture.large}">
        </p>Name:${updatesR.name.title} ${updatesR.name.first} ${updatesR.name.last} </p>
        <p>Email:${updatesR.email}</p>
       <div class="location">
       <h3>Location</h3>
       <p>Street:${updatesR.location.street.number} ${updatesR.location.street.name} 
       </p>
       <p>City:${updatesR.location.city} State:${updatesR.location.state}</p>
       <p>Postcode:${updatesR.location.postcode} </p>
       <p>Timezone offset:${updatesR.location.timezone.offset} </p>
       </div>
        </div>`
    }
  }

  