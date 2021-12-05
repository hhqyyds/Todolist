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
       itemDiv.innerText=item.title;
       paneEl.append(itemDiv);
   }
}
renderTodoItemList(todoItems)