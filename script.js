const inputBox = document.getElementById("input box");
const liscontainer = document.getElementById("lis-container");


function addTask(){
    if(inputBox.value ===''){
        alert('waa inaad qoraal soo gilisaa');
    }
    else{
        let li =document.createElement('li')
        li.innerHTML=inputBox.value;
        liscontainer.appendChild(li)
        let span = document.createElement('span');
         span.innerHTML="\u00d7";
        li.appendChild(span);
    
    }
    inputBox.value="";
    saveDta();
   
}

liscontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveDta();
        
    }
    else if(e.target.tagName === "span"){
        e.target.parentElement.remove();
        saveDta();
    }
    
}, false)

function saveDta(){
    localStorage.setItem('data',liscontainer.innerHTML);
    
}
function showList(){
    liscontainer.innerHTML=localStorage.getItem("data");
}
showList()