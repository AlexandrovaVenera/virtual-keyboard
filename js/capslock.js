import ru from './ru.js';
import en from './en.js';
export function capslockWithMouse(){
  document.body.addEventListener('click', (event) => {
    if (event.target.dataset.code =='CapsLock') {
        const keys = document.querySelectorAll('.keys')
        if(en[28].run==false){
            event.target.classList.add('active-on')
            en[28].run=true
            console.log( en[28].run)
        for(let i=0; i<keys.length; i++){
            if(keys[i].innerHTML.length==1&keys[i].dataset.code !='ArrowUp'&& keys[i].dataset.code !='ArrowLeft'
            &&keys[i].dataset.code !='ArrowRight'
            &&keys[i].dataset.code !='ArrowDown'){
                keys[i].innerHTML = en[i].small.toUpperCase()
            }
        }
        }else{
            en[28].run=false
            event.target.classList.remove('active-on')
            for(let i=0; i<keys.length; i++){
                if(keys[i].innerHTML.length==1&&keys[i].dataset.code !='ArrowUp'&& keys[i].dataset.code !='ArrowLeft'
                &&keys[i].dataset.code !='ArrowRight'
                &&keys[i].dataset.code !='ArrowDown'){
                keys[i].innerHTML = en[i].small.toLowerCase()
                }
            }
        }
  }})}

  export function capslockWithKeyboard(){
    document.addEventListener('keydown', (event) => {
        const keys = document.querySelectorAll('.keys')
        if(event.code=='CapsLock'){
            if(en[28].run==false){
                en[28].run=true
                document.querySelector(`[data-code=${event.code}]`).classList.add('active-on')
                for(let i=0; i<keys.length; i++){
                    if(keys[i].innerHTML.length==1&keys[i].dataset.code !='ArrowUp'&& keys[i].dataset.code !='ArrowLeft'
                    &&keys[i].dataset.code !='ArrowRight'
                    &&keys[i].dataset.code !='ArrowDown'){
                        keys[i].innerHTML = en[i].small.toUpperCase()
                    }
                }
            }
        else{
            en[28].run=false
            document.querySelector(`[data-code=${event.code}]`).classList.remove('active-on')
            for(let i=0; i<keys.length; i++){
                if(keys[i].innerHTML.length==1&&keys[i].dataset.code !='ArrowUp'&& keys[i].dataset.code !='ArrowLeft'
                &&keys[i].dataset.code !='ArrowRight'
                &&keys[i].dataset.code !='ArrowDown'){
                keys[i].innerHTML = en[i].small.toLowerCase()
                }
            }
        }
    }
  })
}