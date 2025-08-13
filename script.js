let btn = document.getElementById('add-task');
let addtask = document.getElementById('new-task');
let todo = document.getElementById('todolist');
let donelist = document.getElementById('completed-tasks');
let list = new Array();
btn.addEventListener('click',(event)=>{
    if(addtask.value!=''){
    list.push(addtask.value);
    todo.innerHTML += '<li id="' + (list.length-1) + '"><button onclick="complete('+(list.length-1)+')">' + addtask.value + '</button></li>'
    addtask.value = ''; // Clear the input field after adding the task
    }
});

function complete(id){
    donelist.innerHTML += '<li id="' + id + '">' + list[id] + '</li>';
    todo.removeChild(document.getElementById(id));
    list[id] = ''; // Clear the completed task from the list
}