let list = document.querySelector('#list')

function refresh(){
    fetch('/task')
    .then((x)=>{
        console.log(x)
        return x.json()
    })
    .then((data)=>{
        console.log(data)
        
        let tasks = data;
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
   let input = document.querySelector('input');

   let value1 = input.value;

   let newGames = {
    "value":value1
   }

   fetch("http://localhost:4444/task?_method=patch", {
        method:"POST",
        body:JSON.stringify(newGames),
        headers:{
            'content-type':"application/json"
        }
   })
   .then((res)=>{
    return res.json();
   })
   .then((data)=>{
    console.log(data);
    refresh()
   })

})