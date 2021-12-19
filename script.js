let todoItems=[];
let finishedItems=[];

function renderTodoItemList(todoItems,finishedItems){

   let paneEl= document.querySelector("#todolist>.list-pane");
   paneEl.innerHTML="";

   for(let i=0;i<todoItems.length;i++){
       let item=todoItems[i];
       let itemDiv =document.createElement("div"); 
       itemDiv.className="todo-item";
       
       let inputEl =document.createElement("input");
       inputEl.type ="checkbox";
       inputEl.addEventListener("change",(e)=>{                         //勾选代表完成该事项，自动加入finishedItems=[]，//
            finishedItems.push(item);                                   //todoItems=[]通过splice删除该项//
            todoItems.splice(i,1);                            
            console.log("finished:",i,todoItems,finishedItems);
            renderTodoItemList(todoItems,finishedItems);
       })

       let contentEl =document.createElement("div");
       contentEl.className="content";
       contentEl.addEventListener("dblclick",(e)=>{
           let updateEl=document.createElement("input");
           contentEl.innerText="";
           contentEl.append(updateEl);
           updateEl.addEventListener("keydown",(e)=>{                   //双击修改待办事项，回车确认//
               if (e.code == "Enter"&&updateEl.value!=""){
                    contentEl.innerText=updateEl.value
                    todoItems[i].content=updateEl.value     
               }
               
           })
       })
       
       let importanceEl =document.createElement("div");
       importanceEl.className="important";
       importanceEl.innerText="!";
        if(item.isImportance){
        importanceEl.classList.add("open")
       }                                                               //给事项设置是否重要，在样式中设定了按钮颜色，//
        importanceEl.addEventListener("click",(e)=>{                   //点击按钮表示事项重要，便会显示红色，再次点击则取消//
        if (item.isImportance){
            item.isImportance=false;
        }else{item.isImportance=true;
        }
        renderTodoItemList(todoItems,finishedItems);
        })
   
       let deleteEl =document.createElement("div");                   //新增加的删除按钮，点击会删除该事项//
       deleteEl.className="delete"                                    //根据前面多个按钮的代码和splice的功能尝试写的//
       deleteEl.innerText="x"
       deleteEl.addEventListener("click",(e)=>{ 
        todoItems.splice(i,1);
        renderTodoItemList(todoItems,finishedItems);
       });

       contentEl.innerText=item.content;

       itemDiv.append(inputEl);
       itemDiv.append(contentEl);
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
        
        let contentEl =document.createElement("div");
        contentEl.className="content"

        let importanceEl =document.createElement("div");
        importanceEl.className="important"
        importanceEl.innerText="!";
        if(item.isImportance){
            importanceEl.classList.add("open")
        }
 
        contentEl.innerText=item.content;
    
        itemDiv.append(contentEl);
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
        if(inputEl.value!=""){
            if(todoItems.push({ 
                content:inputEl.value,
                isFinished:false,
                isImportance:false,
            })){
                inputEl.value="";    //新增：输入框中若没有输入内容，则不会添加事项//
            }                        //点击添加标志，输入框的内容会加到下面的待办清单里，//
        }else{
            alert("Nothing!!!")
        }                            //并且新增加了输入框的内容自动清除功能以便再次输入//
                                     //在样式表中还增加了换行功能，输入文字过多可自动换行//

            console.log("add a item:",inputEl.value);
        renderTodoItemList(todoItems,finishedItems);      //每次添加都会调用待办清单的函数，重新刷新清单//
    });                                                   //并且方便起见令待办清单的innerHTML为空，优化显示效果//
                                                          //todoItems=[]相当于容器，如果不让innerHTML为空，//
                                                          //每次调用函数都会读取里面的所有内容，之前读过的内容会重复，达不到效果//
    hisBtnEl.addEventListener("click",(e)=>{
        if (hisBtnEl.classList.contains("open")){
            hisBtnEl.classList.remove("open");
            renderTodoItemList(todoItems,finishedItems)
        }else{
            hisBtnEl.classList.add("open");
            renderFinishedItemList(todoItems,finishedItems)
        }
    }); 
                                       //历史记录按钮，可在待办清单和历史记录页面之间切换//

    //Slet btnEl= document.querySelector("#todolist #add-btn");
}
renderTodoItemList(todoItems,finishedItems)
renderInputPane(todoItems,finishedItems)



 