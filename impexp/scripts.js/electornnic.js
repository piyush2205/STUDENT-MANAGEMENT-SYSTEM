import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar()
////////////////////////////


const url =`https://fakestoreapi.com/products/category/electronics`

let getData =async()=>{
    let res =await  fetch(url);
    let data=res.json();
    console.log(data) ;
}
getData();

let append=(data)=>{
    
}