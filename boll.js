const doll = document.querySelector('.doll')

let count = 0;

for(let i = 0; i < 361; i++){
    doll.innerHTML += `<i></i>`
}

const ac = document.querySelectorAll('i')

ac.forEach( e =>{
    e.addEventListener('click',()=>{
        if(!e.innerHTML){
            if(count % 2 === 0){
                e.innerHTML = `<div class="boduc black"></div>`
            }else{
                e.innerHTML = `<div class="boduc white"></div>`
            }
            count++
        }
    })
})