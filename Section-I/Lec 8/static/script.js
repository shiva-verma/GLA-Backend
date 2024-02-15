const list = document.querySelector('#list');


function refresh(){
    fetch('/todos') //promise
    .then((x)=>{     //response object 
        console.log(x);
        return x.json();   //returning data in json format
    })
    .then((data)=>{   //data
        console.log(data);
        let todos = data;
        list.innerHTML = '';
        for(let todo of todos){
            let p = document.createElement('p');   //dom manipulation
            p.innerHTML = todo;
            list.appendChild(p);
        }
    })
}

refresh();

let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let input = document.querySelector('input');

    let value1 = input.value;

    let newTodo = {
        'value':value1,
    }

    fetch('http://localhost:3030/todos?_method=patch', {
        method:"POST",
        body:JSON.stringify(newTodo),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        refresh();
    })

    
})

