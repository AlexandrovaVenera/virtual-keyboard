import ru from './ru.js';
import en from './en.js';
export default function capslock(){
  document.body.addEventListener('click', (event) => {
    if (event.target.dataset.code =='CapsLock') {
        const letter = document.querySelectorAll('.letter')
        if(en[28].run==false){
            en[28].run==true
        for(let i=0; i<letter.length; i++){
            letter[i].innerHTML = en[i].small.toUpperCase()
        }
        }else{
            en[28].run==false
            for(let i=0; i<letter.length; i++){
                letter[i].innerHTML = en[i].small.toLowerCase()
            }
        }
  }})}