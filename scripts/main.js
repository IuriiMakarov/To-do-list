let todo_wrapper = document.querySelector('.wrapper');
let newToDo = document.querySelector('.todo_name');
let addToDo = document.querySelector('.add_todo');
let todo = [];

addToDo.addEventListener('click', ()=> {
    if(newToDo.value != '') {
        todo.push(newToDo.value);

    let newToDo_list = document.createElement('div');
        newToDo_list.className = 'item';

        for(let i = 0; i < todo.length; i++){
            newToDo_list.innerHTML = newToDo.value;
            todo_wrapper.appendChild(newToDo_list);
        }
        if(todo.length > 0) {
            let item = document.querySelectorAll('.item');
            for(let j = 0; j <item.length; j++) {
                let delete_todo = document.createElement('div');
                delete_todo.className = 'delete';
                delete_todo.innerHTML = 'X';
                item[j].appendChild(delete_todo);

                delete_todo.addEventListener('click', () => {
                    todo_wrapper.removeChild(item[j]);
                })
            }
        }
        newToDo.value = '';
    }
})

new Sortable(todo_wrapper, {
    animation: 300
});