const buttons=document.querySelectorAll("button");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        console.log("Button Clicked!");
    });
});
const searchbox=document.getElementById("searchbox");
const cards=document.querySelectorAll(".place-card");
searchbox.addEventListener("keyup",()=>{
    const value=searchbox.value.toLowerCase();
    cards.forEach(card=>{
        const title=card.querySelector("h3").textContent.toLowerCase();
        if(title.includes(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
});
function addToBucket(placeName){
    let bucket=JSON.parse(localStorage.getItem("bucketList")) || [];
    if(!bucket.includes(placeName)){
        bucket.push(placeName);
        localStorage.setItem("bucketList",JSON.stringify(bucket));
        alert(placeName+"Added to bucket list!");
    }
    else{
        alert(placeName+"is already in your bucket list!");
    }
}