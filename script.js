str = "";
let buttons = document.querySelectorAll(".btn");
let input = document.querySelector("#input");
Array.from(buttons).forEach(btn => {
    btn.addEventListener("click",(e)=>{
        if (e.target.innerHTML == "=") {
            str = eval(str);
            input.value = str;
        }
        else if(e.target.innerHTML== "AC"){
            str = "";
            input.value = str;
        }
        else if(e.target.innerHTML== "DEL"){
            str = str.substring(0,str.length-1)
            input.value = str;
        }
        else {
            str = str+e.target.innerHTML;
            input.value = str;
        
       }
    })
}); 