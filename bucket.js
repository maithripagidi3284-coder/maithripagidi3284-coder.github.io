const list=document.getElementById("bucketList");
let bucket=JSON.parse(localStorage.getItem("bucketList")) || [];
bucket.forEach(place=>{
    let li=document.createElement("li");
    li.textContent=place;
    list.appendChild(li);
});