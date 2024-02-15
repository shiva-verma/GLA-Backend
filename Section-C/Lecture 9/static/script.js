let list = document.querySelector('#list')

function refresh(){
    fetch('/task')
    .then((x)=>{
        console.log(x);
        return x.json();
    })
    .then((data)=>{
        list.innerHTML=''
        const tasks = data;
        for(let task of tasks){
            let p = document.createElement('p');
            p.innerHTML = task;
            list.appendChild(p);
        }
    })
}

refresh();

let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const input = document.querySelector('input');

        let newTask = {
            'id':10,
            'value':input.value
        };

        input.value = '';

        fetch('http://localhost:4040/task?_method=patch', {
            method:'POST',
            body:JSON.stringify(newTask),
            headers: {
                'content-type':'application/json'
            }
        })
        .then((x)=>{
            return x.json();
        })
        .then((data)=>{
            console.log(data);
            refresh();
        })    
})