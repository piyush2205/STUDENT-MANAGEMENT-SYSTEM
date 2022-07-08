//-------navbar
let nav=document.getElementById("navbar")
let navdiv=document.createElement("div");
let a=document.createElement("a")
 a.href="index.html"
 a.setAttribute("id","index")

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


//login
document.querySelector("form").setAttribute("id","form")

let h1=document.createElement("h1")
 h1.innerText="login"
 


let c1=document.createElement("input")
c1.type="email"
c1.placeholder="Enter your email"
c1.setAttribute("class","email")
let br3=document.createElement("br")
let d1=document.createElement("input")
d1.type="password"
 d1.placeholder="Enter your password"
 d1.setAttribute("class","password")
 let br4=document.createElement("br")
 let button=document.createElement("button")
 button.innerText="Submit"
 button.style.backgroundColor="#008080"
 button.style.color="white"
  button.addEventListener("click" ,()=>{
    logindata()
  })

document.querySelector("form").append(h1,c1,br3,d1,br4,button)


//func login
function Data(e,p){
  
    this.email=e;
    this.pass=p;
  }

function logindata(e){
event.preventDefault();

 
let Email= document.querySelector(".email").value;
      
let Pass= document.querySelector(".password").value;


let s1= new Data (Email,Pass)


let logindata=JSON.parse(localStorage.getItem("Logindata"))||[];

logindata.push(s1);


localStorage.setItem("Logindata",JSON.stringify(logindata))


// console.log(s1);

// console.log(logindata);

}

for(i=0;i<data.length;i++){
    if(data.email==localStorage.getItem("signupdata").email && localStorage.getItem("Logindata").pass==localStorage.getItem("Lignupdata").pass){
        let b= document.querySelector("#index")
         b.href="index.html"
     }else{
         alert("invalid Credentials’")
     }
      
      
}
