let count = 0;
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
console.log(btns)

btns.forEach((btn)=>{
    
    btn.addEventListener("click", (event)=>{
        
        const classArr = event.currentTarget.classList;
        
        if(classArr.contains("increase"))
        count++;
        else if(classArr.contains("reset"))
        count=0;
        else if(classArr.contains("decrease"))
        count--;

        value.textContent = count;
        if(count>0) value.className = "increaseVal";
        else if(count<0) value.className = "decreaseVal";
        else value.className = "";
    })
})

