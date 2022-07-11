
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
//////////////////////////////////////////////////
//slideshow

let slideshowid=document.querySelector("#slideshow")
//

let slidediv=document.createElement("div")
slidediv.setAttribute("id","slide")
//
let button=document.createElement("button")
button.innerText="submit"
button.addEventListener("click",function(){
    add_image()
})
button.setAttribute("id","slidebutton")
//
let slideinput=document.createElement("input")
slideinput.placeholder="Fill Image"

slideinput.setAttribute("id","slideinput")
//
let slideShowbutton=document.createElement("button")
slideShowbutton.innerText="Start Slide Show"
slideShowbutton.addEventListener("click",function(){
    slideshow()
})
slideShowbutton.setAttribute("id","slideShowbutton")
//
//
let pausebutton=document.createElement("button")
pausebutton.innerText="Pause"
pausebutton.addEventListener("click",function(){
    pause()
})
pausebutton.setAttribute("id","pausebutton")
//

slideshowid.append(slideinput,button,slidediv,slideShowbutton,pausebutton)
//


/////////////////////////////////////////////////////////////
//  function for adding img

function add_image(){
    let imgUrl=document.querySelector("#slideinput");

    let images=JSON.parse(localStorage.getItem("images"))||[]
        images.push(imgUrl.value);

    localStorage.setItem("images",JSON.stringify(images));

    imgUrl.value=null;
}
//
////////////////////////////////////////////
//for slide show
let id;
let i=0;
function slideshow(){
let images=JSON.parse(localStorage.getItem("images"))
let slide=document.getElementById("slide");


id= setInterval(function(){
    if(i===images.length){
        i=0;
    }

    let img=document.createElement("img");
    img.src=images[i];
    slide.innerHTML=null;
    slide.append(img);
    i++
},1000);
}

function pause(){
    clearInterval(id);

}
//
/////////////////////////////////////////////////////////////////////
//short button

let shortid= document.querySelector("#sort-buttons");

let sortbutton=document.createElement("select");
sortbutton.setAttribute("id","sortselect")
sortbutton.addEventListener("change",function(){
    sortByrating()
})


let optn1=document.createElement("option");

optn1.value=""
optn1.innerText="Sort by rating"

let optn2=document.createElement("option");
optn2.innerText="low to high"
optn2.value="low to high"
optn2.setAttribute("id","sort-lh")

let optn3=document.createElement("option");

optn3.value="high to low"
optn3.innerText="high to low"
optn3.setAttribute("id","sort-hl")
sortbutton.append(optn1,optn2,optn3)

    shortid.append(sortbutton)
//
///////////////////////////////////////////////////////
//sort funcn
function sortByrating(){
    let selected=document.querySelector("#sortselect").value
    if (selected=="low to high"){
        moviesData.sort(function(a,b){
            if (a.IMDbrating>b.IMDbrating) return 1
            if (a.IMDbrating<b.IMDbrating) return -1
            return 0
        })
        console.log(moviesData)
        MoviesData(moviesData)
    }
    if(selected=="high to low"){
            moviesData.sort(function(a,b){
            if (a.IMDbrating>b.IMDbrating) return -1
            if (a.IMDbrating<b.IMDbrating) return 1
            return 0
        })
        console.log(moviesData)
        MoviesData(moviesData)

    }
}
/////////////////////////////////////////////////////////
//
///////////////////////////////////////////
//add movies
moviesData=[
    {
        name:"Avenger",
        releasedate:"1-1-2018",
        poster:"https://th.bing.com/th/id/OIP.UuaQP74NmzUvl74BgK98_gHaK0?w=182&h=267&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        IMDbrating:7,
    },
    {
        name:"Vfw",
        releasedate:"1-1-2018",
        poster:"https://th.bing.com/th/id/OIP.TNBGOIGcAtoXZmEdsjojCgHaK-?w=182&h=270&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        IMDbrating:5,
    
     },
    {
    name:"211",
    releasedate:"1-1-2018",
    poster:"https://th.bing.com/th/id/OIP.-LTFcQ8gdNSJvUSFkw3yCQHaK-?w=182&h=270&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    IMDbrating:6,

    }
     ,
        {
    name:"Aeroplane",
    releasedate:"1-1-2018",
    poster:"https://th.bing.com/th/id/OIP.moHaA3u3TeZnb8QGh5SmzQHaLJ?w=182&h=274&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    IMDbrating:4,

    }
    ,
    {
        name:"The Extractors",
        releasedate:"1-1-2018",
        poster:"https://th.bing.com/th/id/OIP.QV1xR4NPMLGfonf1tGOAewHaKW?w=182&h=254&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        IMDbrating:10,
    
    }
    ,
    {
        name:"hero",
        releasedate:"1-1-2018",
        poster:"https://th.bing.com/th/id/OIP.afsABCAa3Usml92oso_MCgHaJ3?w=182&h=243&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        IMDbrating:9,
    
    },
    {
        name:"Justic League",
        releasedate:"1-1-2018",
        poster:"https://th.bing.com/th/id/OIP.c3VjSn9aWHYI-JidQavqcgHaK-?w=182&h=270&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        IMDbrating:3,
    
    },
    {
        name:"Spiderman",
        releasedate:"1-1-2018",
        poster:"https://th.bing.com/th/id/OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-?w=182&h=270&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        IMDbrating:4,
    
    },
    {
        name:"Inception",
        releasedate:"1-1-2018",
        poster:"https://th.bing.com/th/id/OIP.7CqO3Wy1WOPAvnm-QAlY7QHaK-?w=182&h=270&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        IMDbrating:8,
    
    }
       
    
    
]
localStorage.setItem("moviesdata",JSON.stringify(moviesData));

let moviesDataLS=JSON.parse(localStorage.getItem("moviesdata"))||[];

MoviesData(moviesData)
function MoviesData(moviesData){
    moviesData.forEach(el => {
        // console.log(el)
        //  document.querySelector("#movies").innerHTML=" "
        
        let movie=document.querySelector("#movies")
        let box=document.createElement("div")
    
        let img=document.createElement("img")
        img.src=el.poster
        let name=document.createElement("h2")
        name.innerText=el.name
        name.style.textAlign="center"
        let releaseDate=document.createElement("p")
        releaseDate.innerText=el.releasedate
        releaseDate.style.textAlign="center"
        let IMDbRating=document.createElement("h3")
        IMDbRating.innerText=el.IMDbrating
        IMDbRating.style.textAlign="center"
        box.append(img,name,releaseDate,IMDbRating)
        movie.append(box)
    
    
    });
}

 








