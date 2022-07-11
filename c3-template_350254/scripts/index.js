//////////////////////////////////////////////////////////////
//navbar


let navbar=document.querySelector("#navbar")



let srch=document.createElement("input")
srch.setAttribute("id","query")
srch.placeholder="search hotel"
srch.type="search"
srch.addEventListener("search" ,function(){
SearchHotel()
})

let Login=document.createElement("a")
 Login.href=""
 Login.innerText="login"
 Login.setAttribute("id","login")

 let Signup=document.createElement("a")
 Signup.href=""
 Signup.innerText="signup"
 Signup.setAttribute("id","signup")
navbar.append(srch,Login,Signup)


/////////////////////////////////////////////////////

////////////////////////////////////////////////////
//sort
let sortingdiv=document.querySelector("#sorting")

let lowtohighsort=document.createElement("button")
lowtohighsort.innerText="Price low to high";
lowtohighsort.setAttribute("id","sort_lth")
lowtohighsort.addEventListener("click",function(){
    lowtohighsort()
})

let hightolowsort=document.createElement("button")
hightolowsort.innerText="Price high to low";
hightolowsort.setAttribute("id","sort_htl")
// hightolowsort.addEventListener("click",function(){
//     hightolowsort()
// })

let ac=document.createElement("button")
ac.innerText="AC";
ac.setAttribute("id","filter_ac")
// lowtohighsort.addEventListener("click",function(){
//     ac()
// })

let nonac=document.createElement("button")
nonac.innerText="NON AC";
nonac.setAttribute("id","filter_nonac")
// lowtohighsort.addEventListener("click",function(){
//     nonac()
// })

sortingdiv.append(lowtohighsort,hightolowsort,ac,nonac)
//////////////////////////////////////////////////
//////////////////////////////
let q="";

let  SearchHotel= async()=>{
    let query=document.getElementById("query").value
    let data=await getData(query);
    q=query;
    

}
let getData=async (query)=>{
    const url=` https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
    let res=await fetch(url);
    let data=await res.json();
    console.log(data)
    append(data.hotels)
    localStorage.setItem("hotelData",JSON.stringify(data.hotels));
    // return data.items;
}
 let append=(data)=>{
   
     let container=document.querySelector("#hotels_list");
     data.forEach(el => {
    
        let img=document.createElement("img");
        img.src=el.Images.one;
        
        let h1=document.createElement("h1")
        h1.innerText=el.Title

        let p=document.createElement("p")
        p.innerText="price per room:"+el.Price

        let p2=document.createElement("p")
        p2.innerText="Rating:"+el.Rating

        // let p3=document.createElement("p")
        // p3.innerText=el.Rooms

        let p4=document.createElement("p")
        p4.innerText="AC:"+el.Ac

        let bookbutton=document.createElement("button")
        bookbutton.innerText="Book now"

      let div=document.createElement("div")
        div.setAttribute("class","hotel")
      

        div.append(img,h1,p,p2,p4,bookbutton)
        container.append(div)

     });
    
 }



 //////////////////////////////////////////////
 /////////////////////////////////////////////
   lowtohighsort=async()=>{
     let data=await getData(q);
     data=data.sort((a,b)=>{
        return a.Price-b.Price
     });
     append(data);
 }