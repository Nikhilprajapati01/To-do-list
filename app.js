const list =  document.querySelector("#listcontainer")
const input = document.querySelector('#inputbox')
const btn = document.querySelector('.addbutton')
// const li = document.querySelectorAll("ul li.checked")



const addtext = () =>{
    if(input.value === "" ){
        alert("enter the value")
    }else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input.value = "";
    savedata();
}

btn.addEventListener("click" ,() =>{
    addtext()
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addtext();
    }
});
  


list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata();
    }  
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    
});

function savedata(){
   localStorage.setItem("data" ,list.innerHTML);

   
}

function showTask() {
    list.innerHTML = localStorage.getItem("data")
}

showTask()