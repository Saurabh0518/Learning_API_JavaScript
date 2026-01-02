 
// fetch(url).then((response)=>{console.log(response);
//     return response.json();
// })
// .then((data)=>{console.log(data.fact);})

let url = "https://catfact.ninja/fact";
async function getFacts()
{
    let result1 = await axios.get(url);
    // console.log(result1.data.fact);
    return result1.data.fact;
}


let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let facts = await getFacts();
    console.log(facts);
    let p = document.querySelector("#result");
    p.innerText = facts;
})