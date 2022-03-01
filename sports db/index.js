const allplayers = ()=>{
    const input = document.getElementById("input");
    inpuValue = input.value;
    input.value=""
    //error handle
   spiner('block')
    clearResult('none')

    if(inpuValue==""){
       
       document.getElementById("search").style.display="block"
       spiner('none')
    }
   else{
    document.getElementById("search").style.display="none"
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inpuValue}`)
    .then(res=>res.json())
    .then(data=>showPlayer(data))
    
   }
    };
    //error handle spiner and search dile spiner asbe r result hide hobe
    const spiner = (display)=>{
        document.getElementById("spiner").style.display=display;
    }
   
    const clearResult = (display)=>{
        document.getElementById("player-container").style.display=display;
    }
   

const showPlayer = (player) =>{
    const parent = document.getElementById("player-container")
    parent.innerText=""
    const players = player.player;
    if(!players){
        document.getElementById("d").style.display="block"
        spiner('none')
    }
    else{
        document.getElementById("d").style.display="none"
        for(const play of players){
         const div =  document.createElement("div");
         div.innerHTML=`<div class="card">
         <div class="pro-pic">
             <img class="w-25" src="${play.strThumb}" alt="">
             <h2>Name:${play.strPlayer}</h2>
             <h5>Country:${play.strNationality}</h5>
             <p></p>
             <div class="allbutton">
                 <button  class="btn btn-danger">delete</button>
                 <button onclick="details('${play.idPlayer}')" class="btn btn-primary">details</button>
             </div>
         </div>
     </div>`
         parent.appendChild(div)
    }

   }
   //error handle
   spiner("none")
   clearResult("block")
   
}
const details = (value)=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${value}`)
    .then(res=>res.json())
    .then(data=>singleDetails(data))
    }
const singleDetails = (singleValue)=>{
    const singleValues = singleValue.players;
    const player = document.getElementById("player-details")
    player.innerHTML=""
   
    for(const singleV of singleValues){
        if(singleV.strGender=='Male'){
            document.getElementById("img1").style.display='none';
            document.getElementById("img2").style.display='block';
        }
        else{
            document.getElementById("img1").style.display='block';
            document.getElementById("img2").style.display='none';
        }
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card">
        <div class="pro-pic">
            <img class="w-25" src="${singleV.strThumb}" alt="">
            <h2>Name:${singleV.strPlayer}</h2>
            <h5>Country:${singleV .strNationality}</h5>
            <p></p>
        </div>
    </div>`
        
        player.appendChild(div)
    }
} 