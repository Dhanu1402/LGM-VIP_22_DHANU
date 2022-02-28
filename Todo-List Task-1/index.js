const input = document.querySelector('input');
const btn = document.querySelector('.task > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
    (e.keycode === 13 ? addList(e) : null);
});

function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const completed = document.querySelector('.completed');

    const newTask = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !==''){
        newTask.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newTask);
        newTask.appendChild(checkBtn);
        newTask.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });
}