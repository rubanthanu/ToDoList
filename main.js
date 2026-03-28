const inputBox = document.getElementById("input-box");
console.log(inputBox);
const ListContainer = document.getElementById("List-container");
console.log(ListContainer);

function addtask(){
 if(inputBox.value === ''){
    alert("You must write Something")

 }
 else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    ListContainer.appendChild(li);
    let span=document.createElement("Span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    
    
 }
     inputBox.value="";
     saveData();
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle ("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false);

    function saveData(){
   window.localStorage.setItem("data", ListContainer.innerHTML);



    }
    function showTask(){

   ListContainer.innerHTML=window.localStorage.getItem("data");



    }
    showTask();
