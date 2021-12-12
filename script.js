let todoItems=[
    {
        title:"write a paper",
        isFinished:false,
        isImportance:false,
    },
    {
        title:"write a paper",
        isFinished:false,
        isImportance:false,
    },
];
function renderTodoItemList(todoItems){

   let paneEl= document.querySelector("#todolist>.list-pane");

   for(let item of todoItems){
       let itemDiv =document.createElement("div");
       itemDiv.className="todo-item" 
       let inputEl =document.createElement("input");
       inputEl.type ="checkbox" 

       let titleEl =document.createElement("div");
       titleEl.className="title"
       let importanceEl =document.createElement("div");
       importanceEl.className="important"
       importanceEl.innerText="!"
       let deleteEl =document.createElement("div");
       deleteEl.className="delete"
       deleteEl.innerText="x"


       titleEl.innerText=item.title;

       itemDiv.append(inputEl);
       itemDiv.append(titleEl);
       itemDiv.append(importanceEl);
       itemDiv.append(deleteEl) 
       paneEl.append(itemDiv);
   }
}

function renderInputPane(todoItems){
    let todoListEl=document.getElementById("todolist");
    let addBtnEl=todoListEl.querySelector("#add-btn");
    addBtnEl.addEventListener("click",(e)=>{
        console.log("add a item")
    });
    //Slet btnEl= document.querySelector("#todolist #add-btn");
}
//renderTodoItemList(todoItems)
renderInputPane(todoItems)



 