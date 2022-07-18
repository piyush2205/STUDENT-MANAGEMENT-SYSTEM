// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
/////////////////////////////////////////////////////////////////
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


/////////////////////////////////////////////////////////////

let serch=document.getElementById("query")

serch.addEventListener("search",function(){
    searchnews()
})


async function searchnews(){
    let query=document.getElementById("query").value;

    let data=await getDatabysearch(query);
    append(data);
}
async function getDatabysearch(query){
  const url=`https://masai-api.herokuapp.com/news?q=${query}`
  let res =await fetch(url);
  let data =await res.json();
  console.log(data)
  return data.articles;
  
}

function append(data){
    let resultsnews= document.getElementById("results")

    data.forEach(function(el){
        let div=document.createElement("div")
        div.setAttribute("class","news")

        let img =document.createElement("img");
        img.src=el.urlToImage

        let h1=document.createElement("h2");
        h1.innerText=el.title

        let p1=document.createElement("p");
        p1.innerText=el.description

        
    
        div.append(img,h1,p1)
        resultsnews.append(div)
    }) ;
}