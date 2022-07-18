// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// let navbar1=document.getElementById("navbar")

// let a1=document.createElement("a")
// a1.href="index.html"
// a1.innerText="News App"

// let navinput=document.createElement("input")
// navinput.innerText="search"

// navinput.setAttribute("id","navsearch")
// // navinput.addEventListener("search",function(){

// // })
// button1=document.createElement("button")
// button1.innerText="hsahas"
// button1.setAttribute("id","bt")
// navbar1.append(a1,navinput,button1)

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

/////////////////////////////////////////////////////////////////////////////
// let sr=getElementById("query")
// sr.addEventListener("search",function(){
//     searchnews()
//     window.location.href="search.html"
// })


let sidebar=document.getElementById("sidebar")

let hs2=document.createElement("h2")
hs2.innerText="Countries"

let a=document.createElement("h3")
a.innerText="india"
a.setAttribute("id","in")

let b=document.createElement("h3")
b.innerText="china"
b.setAttribute("id","ch")

let d=document.createElement("h3")
d.innerText="usa"
d.setAttribute("id","us")

let e=document.createElement("h3")
e.innerText="uk"
e.setAttribute("id","uk")

let f=document.createElement("h3")
f.innerText="Newzeland"
f.setAttribute("id","nz")

sidebar.append(hs2,a,b,d,e,f)



///////////////////////////////////////////////////
//https://masai-api.herokuapp.com/news/top-headlines?country={country code}//

//https://masai-api.herokuapp.com/news?q={query} (for searching based on query, will only work for "tesla" and "twitter")//

const url=`https://masai-api.herokuapp.com/news/top-headlines?country={country code}`

async function getData(){
    try {
        let res=await fetch(url);
        let data=await res.json();
        console.log(data);
    }catch (err){
        console.log(err);
    }
}

getData()




// let newsresults=document.getElementById("results")



///////////////////////////////////////////////////
// let serch=document.getElementById("query")

// serch.addEventListener("search",function(){
//     searchnews()
// })


// async function searchnews(){
//     let query=document.getElementById("query").value;

//     let data=await getDatabysearch(query);
//     append(data);
// }
// async function getDatabysearch(query){
//   const url=`https://masai-api.herokuapp.com/news?q=${query}`
//   let res =await fetch(url);
//   let data =await res.json();
//   console.log(data)
//   return data.articles;
  
// }

// function append(data){
//     let resultsnews= document.getElementById("results")
//     window.location.href="search.html"
//     data.forEach(function(el){
//         let div=document.createElement("div")
//         div.setAttribute("class","news")

//         let img =document.createElement("img");
//         img.src=el.urlToImage

//         let h1=document.createElement("h2");
//         h1.innerText=el.title

//         let p1=document.createElement("p");
//         p1.innerText=el.description

        
    
//         div.append(img,h1,p1)
//         resultsnews.append(div)
//     }) ;
// }