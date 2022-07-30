function student(n,c,i,u,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.batch=`ft-web:${b}`;
    this.img=i;
    
  
}


document.querySelector("form").addEventListener("submit",storeData)

function storeData(event){

    event.preventDefault();


   let name=document.querySelector("#name").value;
   let course=document.querySelector("#course").value;
   let img=document.querySelector( "#image").value;
   let unit=document.querySelector("#unit").value;
   let batch=document.querySelector("#batch").value;



   let s1= new student (name,course,img,unit,batch)
    let data=JSON.parse(localStorage.getItem("student"))||[];

   

    data.push(s1);
  

localStorage.setItem("student",JSON.stringify(data))


console.log(s1);
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


   function storeData1(){
    let a=document.querySelector("#batch18")
    a.innerText=`Ft-web18:${obj["ft-web:18"]? obj["ft-web:18"] : 0}`
    
    let b=document.querySelector("#batch19")
    b.innerText=`Ft-web19:${obj["ft-web:19"]? obj["ft-web:19"] : 0}`
    
    let c=document.querySelector("#batch20")
    c.innerText=`Ft-web20:${obj["ft-web:20"]? obj["ft-web:20"] : 0}`
    
    console.log(obj["ft-web:19"])
   }

   storeData1()
