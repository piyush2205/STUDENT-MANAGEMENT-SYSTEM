document.querySelector("#orderfood").addEventListener("click",function(){
    myfood()
})

function myfood(){
    event.preventDefault()
    
    var foodname1=document.getElementById("king-size-burger").checked?document.getElementById("king-size-burger").value:'';
    var foodname2=document.getElementById("coke").checked?document.getElementById("coke").value:'';
    let foodname3=document.getElementById("veg-burger").checked?document.getElementById("veg-burger").value:'';
    let foodname4=document.getElementById("pizaa").checked?document.getElementById("pizaa").value:"";
    let foodname5=document.getElementById("non-veg-burger").checked?document.getElementById("non-veg-burger").checked.value:"";
    let foodname6=document.getElementById("paneer-burger-coke").checked?document.getElementById("paneer-burger-coke").value:'';
            
            foodObj={
                Foodname1:foodname1,
                Foodname2:foodname2,
                Foodname3:foodname3,
                Foodname4:foodname4,
                Foodname5:foodname5,
                Foodname6:foodname6,
    }
console.log(foodObj)
//////////////////////////////////////////////////////////////////

  

//     //////////////////////////////
//      let Image=document.createElement("img")
//      Image.src="https://cdn.dribbble.com/users/2298909/screenshots/6715549/your-food-is-being-prepared_2x.gif"
//      foodform.append(Image)
 }


// let orderfood_promise= new Promise((resolve, reject) => {
    
// })





// 