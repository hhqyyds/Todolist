let todoItems=[];
let finishedItems=[];

function renderTodoItemList(todoItems,finishedItems){

   let paneEl= document.querySelector("#todolist>.list-pane");
   paneEl.innerHTML="";

   for(let i=0;i<todoItems.length;i++){
       let item=todoItems[i];
       let itemDiv =document.createElement("div");
       itemDiv.className="todo-item" 
       
       let inputEl =document.createElement("input");
       inputEl.type ="checkbox";
       inputEl.addEventListener("change",(e)=>{
            finishedItems.push(item);
            todoItems.splice(i,1);
            console.log("finished:",i,todoItems,finishedItems);
            renderTodoItemList(todoItems,finishedItems);
       })

       let titleEl =document.createElement("div");
       titleEl.className="title"
       
       let importanceEl =document.createElement("div");
       importanceEl.className="important"
       importanceEl.innerText="!";
        if(item.isImportance){
        importanceEl.classList.add("open")
       }
        importanceEl.addEventListener("click",(e)=>{
        if (item.isImportance){
            item.isImportance=false;
        }else{item.isImportance=true;
        }
        renderTodoItemList(todoItems,finishedItems);
    })
   
       let deleteEl =document.createElement("div");
       deleteEl.className="delete"
       deleteEl.innerText="x"
       deleteEl.addEventListener("click",(e)=>{ 
        todoItems.splice(i,1);
        renderTodoItemList(todoItems,finishedItems);
       });

       titleEl.innerText=item.title;

       itemDiv.append(inputEl);
       itemDiv.append(titleEl);
       itemDiv.append(importanceEl);
       itemDiv.append(deleteEl) 
       paneEl.append(itemDiv);
   }
}


function renderFinishedItemList(todoItems,finishedItems){

    let paneEl= document.querySelector("#todolist>.list-pane");
    paneEl.innerHTML="";
 
    for(let i=0;i<finishedItems.length;i++){
        let item=finishedItems[i];
        let itemDiv =document.createElement("div");
        itemDiv.className="todo-item";
        
        let titleEl =document.createElement("div");
        titleEl.className="title"

        let importanceEl =document.createElement("div");
        importanceEl.className="important"
        importanceEl.innerText="!";
        if(item.isImportance){
            importanceEl.classList.add("open")
        }
 
        titleEl.innerText=item.title;
    
        itemDiv.append(titleEl);
        itemDiv.append(importanceEl);
         
        paneEl.append(itemDiv);
    }
 }
function renderInputPane(todoItems,finishedItems){
    let inputPaneEl=document.querySelector("#todolist>.input-pane");
    let addBtnEl=inputPaneEl.querySelector("#add-btn");
    let hisBtnEl=inputPaneEl.querySelector("#his-btn");
    addBtnEl.addEventListener("click",(e)=>{
        let inputEl=inputPaneEl.querySelector("input");
            if(todoItems.push({ 
                title:inputEl.value,
                isFinished:false,
                isImportance:false,
            })){
                inputEl.value="";
            }
        
        
    
        console.log("add a item:",inputEl.value);

        renderTodoItemList(todoItems,finishedItems);
        
    });
    hisBtnEl.addEventListener("click",(e)=>{
        if (hisBtnEl.classList.contains("open")){
            hisBtnEl.classList.remove("open");
            renderTodoItemList(todoItems,finishedItems)
        }else{
            hisBtnEl.classList.add("open");
            renderFinishedItemList(todoItems,finishedItems)
        }
    }); 

    //Slet btnEl= document.querySelector("#todolist #add-btn");
}
renderTodoItemList(todoItems,finishedItems)
renderInputPane(todoItems,finishedItems)



 