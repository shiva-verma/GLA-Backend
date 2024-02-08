let list = document.querySelector('#list')

function refresh(){
    fetch('/task')
    .then((x)=>{
        console.log(x);
        return x.json();
    })
    .then((data)=>{
        const tasks = data;
        for(let task of tasks){
            let p = document.createElement('p');
            p.innerHTML = task;
            list.appendChild(p);
        }
    })
}

refresh();