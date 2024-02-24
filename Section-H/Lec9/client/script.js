let list = document.querySelector('#list')

function refresh(){
    fetch('/task')  //promise
    .then((x)=>{     //response object
        console.log(x);
        return x.json();
    })
    .then((data)=>{    //data
        let games = data;
        list.innerHTML = '';
        for(let game of games){ 
            let p = document.createElement('p');
            p.innerHTML = `${game} <button>Show</button>  <button>Edit</button> <button>delete</button>`;
            list.appendChild(p);
        }
    })
}

refresh();

let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let input = document.querySelector('input');

    let value1 = input.value

    let newGame = {
        'value': value1
    }

    input.value = '';

    fetch('http://localhost:5050/task?_method=patch', {
        method:'POST',
        body:JSON.stringify(newGame),
        headers:{
            'content-type':"application/json"
        }
    })
    .then((res)=>{
        return res.json
    })
    .then((data)=>{
        console.log(data)
        refresh();
    })

    
    

})



