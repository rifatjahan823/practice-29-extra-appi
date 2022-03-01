// -- ----------practice-1----- --
const comment = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>updateComment(data))
}
const updateComment = (updateC)=>{
  for(const updatesC of updateC){
    const div = document.createElement("div");
    div.classList.add('commentStyle')
    div.innerHTML=`<div onclick="commentDetails('${updatesC.id}')" class = "comment">
    Comment:${updatesC.body.slice(0,100)}
    </div>`
    document.getElementById('showComment').appendChild(div)
  }
}
const commentDetails = (detailsName)=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${detailsName}`)
    .then((response) => response.json())
    .then((json) => updateDetails(json));
}

const updateDetails = (updateD)=>{
    showCommentDetails.innerText=""
    for(const updatesD of updateD){
    const div =  document.createElement("div");
    div.classList.add('showCommentDetails')
    div.innerHTML=`<h3><span style="color:red;font-weight:bold">Title:</span>${updatesD.name}</h3>
   <p> <span style="color:red;font-weight:bold">Description:</span>${updatesD.body}</p>
   <h3>Id:${updatesD.id}</h3>
   <p><span style="color:red;font-weight:bold">Email:</span>${updatesD.email}</p>
   `
    const showCommentDetails= document.getElementById("showCommentDetails")
    showCommentDetails.appendChild(div)
    
    }
    
}