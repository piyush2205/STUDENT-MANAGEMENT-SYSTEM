
//-------navbar
let nav=document.getElementById("navbar")
let navdiv=document.createElement("div");
let a=document.createElement("a")
 a.href="index.html"
a.innerText="Home"
a.style.fontSize="20px"

let b=document.createElement("a")
 b.href="signup.html"
b.innerText="Signup"
b.style.fontSize="20px"

let c=document.createElement("a")
 c.href="login.html"
c.innerText="Login"
c.style.fontSize="20px"
navdiv.append(a,b,c)
nav.append(navdiv)
//navbar-------------------

