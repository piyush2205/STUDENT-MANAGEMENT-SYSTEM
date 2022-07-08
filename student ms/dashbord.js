function append(){
    let data=JSON.parse(localStorage.getItem("student"))||[];

    data.forEach(function(el,index){
    let div=document.createElement("div");
    let image=document.createElement("img")
        image.src=el.img
        
     let name=document.createElement("h2")
         name.innerText=el.name
       let course=document.createElement("p")
       course.innerText=el.course 
       let batch=document.createElement("p")
       batch.innerText=el.batch
       let button=document.createElement("button")
       button.innerText="Remove"
       button.addEventListener("click", function(){
        remove(data,index)
       })       
       div.append(image,name,course,batch,button)
       document.getElementById("contanier").append(div)
    });
   
}

append();



function remove(data,index){
    data.splice(index,1)
 
    localStorage.setItem("student",JSON.stringify(data))
    
   
              let trash=JSON.parse(localStorage.getItem("trash"))||[];
              trash.push(data);
             localStorage.setItem("trash",JSON.stringify(trash))

    
     window.location.reload()
}

 



let obj={};
function calculate(){
    let data=JSON.parse(localStorage.getItem("student"))||[];
 

    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch])
        {
            obj[data[i].batch]=0;

        }
    }
    for(let i=0;i<data.length;i++){
        obj[data[i].batch]++;

    }
    console.log(obj)
}
    calculate()


    
let a=document.querySelector("#batch18")
a.innerText=`Ft-web18:${obj["ft-web:18"] ? obj["ft-web:18"] : 0}`

let b=document.querySelector("#batch19")
b.innerText=`Ft-web19:${obj["ft-web:19"] ? obj["ft-web:19"] : 0}`

let c=document.querySelector("#batch20")
c.innerText=`Ft-web20:${obj["ft-web:20"] ? obj["ft-web:20"] : 0}`


