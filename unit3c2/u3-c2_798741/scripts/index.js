const url=`https://grocery-masai.herokuapp.com/items`
fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){

    localStorage.setItem("groceries",JSON.stringify(res.data));
    append(res.data)
})
.catch(function(err){
    console.log(err)
})


function append(data){
    let container=document.getElementById("groceries")
    data.forEach(function(el){
        let div=document.createElement("div")
        div.setAttribute("class","item")
        
        let img=document.createElement("img")
        img.src=el.image;
        let name=document.createElement("p")
        name.innerText=el.name;
        let p=document.createElement("p")
        p.innerText=el.price
        let button=document.createElement("button")
         button.setAttribute("class","button")
        
        
        button.innerText="add to cart"

        
       div.append(img,name,p,button)
       container.append(div)
    })
}


