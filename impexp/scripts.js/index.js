import navbar from "../components/navbar.js";
console.log(navbar());
document.getElementById("navbar").innerHTML=navbar()
////////////////////////////////////
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))