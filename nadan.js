let myinput = document.querySelector('[type="text"]');
let mycon = document.querySelector(".container");
let myimg = document.querySelector("img");
let mbtn = document.querySelector("button");
document.forms[0].onsubmit = (e)=>{
    e.preventDefault();
    if(myinput.value === "nada"||myinput.value === "nada jouidi"||myinput.value === "nda"||myinput.value === "nada zwina"||myinput.value === "simo"||myinput.value === "simo elamarty"||myinput.value === "elamarty"||myinput.value === "nad"||myinput.value === "me"){
        mycon.style.cssText = "display:none";
        myimg.style.cssText = "display:block";
        myimg.classList.add("animate");
        setTimeout(() => {
            mbtn.style.cssText = "display:block"
        }, 1000);
        mbtn.classList.remove("hak")
        mbtn.addEventListener("click" , ()=>{
            mycon.style.cssText = "display:block";
            myimg.style.cssText = "display:none";
            mbtn.style.cssText = "display:none";
            myinput.value = "";
        })
    }else{
        console.log("you are guy");
        setTimeout(() => {
            mbtn.style.cssText = "display:block;"
            mbtn.classList.add("hak")
        }, 1000);
        mbtn.addEventListener("click" , ()=>{
            mycon.style.cssText = "display:block";
            myimg.style.cssText = "display:none";
            mbtn.style.cssText = "display:none";
            myinput.value = "";
            document.body.style.cssText = "background-image: url(nada.jpeg)"
        })
        mycon.style.cssText = "display:none";
        document.body.style.cssText = "background-image: url(fack.png)"
    }
}