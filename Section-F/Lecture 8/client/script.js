let list = document.querySelector('#list');

function refresh(){
    fetch('/todos')  //promise
    .then((res)=>{ //response object
        console.log(res);
        return res.json(); 
    })
    .then((data)=>{
        console.log(data);
        let games = data;

        list.innerHTML = ""
        for(let game of games){
            let li = document.createElement('li');
            li.innerHTML = game;
            list.appendChild(li);
        }
    })
}

refresh();

let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let input = document.querySelector('input');
    let value1 = input.value;

    let newGames = {
        'value':value1
    }

    input.value ='';
    
    fetch('http://localhost:3333/todos?_method=patch',{
        method:"POST",
        body:JSON.stringify(newGames),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((res)=>{
        return res.json;
    })
    .then((data)=>{
        console.log(data);
        refresh();
    })

   

})