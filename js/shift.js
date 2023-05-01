import ru from './ru.js';
import en from './en.js';
export default function shift(){
  document.body.addEventListener('click', (event) => {
  if (event.target.dataset.code =='ShiftRight'||event.target.dataset.code =='ShiftLeft') {
    const key = document.querySelectorAll('.keys')
    for(let i=0; i<key.length; i++){
      if(en[54].run==false){
      if(en[i].shift!=null){
      key[i].innerHTML = en[i].shift
      key[i].dataset.code = en[i].code
      }
    }
    }
  }
})

}