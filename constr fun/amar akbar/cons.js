function amar(name){
this.name=name;
this.skill="singer";
this.live="goa";
this.sing=function(){
     console.log(this.name+" is singer")
}
}

function akbar(name){
this.skill="chef";
this.live="mumbai";
this.name=name;
this.cook=function(){
     console.log(this.name+" is cooking")
}
}

let Amar=new amar("amar");
let Akbar= new akbar("akbar")

Akbar.cook.call(Amar)