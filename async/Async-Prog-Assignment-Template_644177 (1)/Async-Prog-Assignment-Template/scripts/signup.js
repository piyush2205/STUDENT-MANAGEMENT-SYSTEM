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


//signup
document.querySelector("form").setAttribute("id","form")

let h1=document.createElement("h1")
 h1.innerText="Signup"
 
let a1=document.createElement("input")
a1.type="name"
 a1.placeholder="Enter your name"
 a1.setAttribute("class","name")
 let br=document.createElement("br")

let b1=document.createElement("input")
b1.type="name"
 b1.placeholder="Enter your contact"
 let br2=document.createElement("br")
 b1.setAttribute("class","contact")
let c1=document.createElement("input")
c1.type="email"
c1.placeholder="Enter your email"
let br3=document.createElement("br")
c1.setAttribute("class","email")
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
    storeData()
  })

document.querySelector("form").append(h1,a1,br,b1,br2,c1,br3,d1,br4,button)
//signup


//signupfuntion
function Data(n,c,e,p){
  this.name=n;
  this.contact=c;
  this.email=e;
  this.pass=p;
}


function storeData(e){
 event.preventDefault();


   let Name= document.querySelector(".name").value;
   let Contact= document.querySelector(".contact").value;
    
   let Email= document.querySelector(".email").value;
    
   let Pass= document.querySelector(".password").value;
   

   let s1= new Data (Name,Contact,Email,Pass)


   let signupdata=JSON.parse(localStorage.getItem("Signupdata"))||[];

    signupdata.push(s1);
  
    localStorage.setItem("Signupdata",JSON.stringify(signupdata))
   
   
  
  //  console.log(s1);

  //  console.log(signupdata);


}




// if(checkemails(this.Data.email)===true){
//   signupdata.push(s1);
//  localStorage.setItem("Signupdata",JSON.stringify(signupdata))
// }else{
//  alert("account alredy exits")
// }

// function checkemails(email){
//  let filtered=signupdata.filter(function(e){
//    return email===e.email
//  })
//  if(filtered.length>0){
//    return false;

//  }else{
//    return true;

//  }
// }
