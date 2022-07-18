let button1=document.getElementById("button").addEventListener("click",function(){
    paynow()
})


function paynow(){
    return true
}
let paymetPromise =new Promise((resolve, reject) => {
    let amount=paynow();
    setTimeout(() => {
        if(amount){
            resolve ("paymet succesful");
        }else{
            reject("try again later")
        }
    }, 3000);
});

let image=document.getElementById("imgphonepe");
paymetPromise.then(function(res){
    console.log(res)
    image.src="https://www.bing.com/th/id/OGC.72ea14e1726cefaed614e1bbebb5007b?pid=1.7&rurl=https%3a%2f%2fwww.legalraasta.com%2fwp-content%2fuploads%2f2017%2f06%2flegalraasta.gif&ehk=0LV8U1JRPY3uq77N57qIE2wkfpniOXbptKXArk8WHh0%3d"
});
paymetPromise.catch(function(rej){
    console.log(rej);
    image.src="https://cdn.dribbble.com/users/107759/screenshots/4594246/15_payment-error.gif"
})
