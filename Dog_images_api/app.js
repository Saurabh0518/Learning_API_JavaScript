let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click",async ()=>{
    console.log("button clicked");
    let image = await dogImage();
    console.log(image);
    img.setAttribute("src",image);
})

let url = "https://dog.ceo/api/breeds/image/random";

async function dogImage()
{
    let res = await fetch(url);
    let data = await res.json();
    return data.message;
}