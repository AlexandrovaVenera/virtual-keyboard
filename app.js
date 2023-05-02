
import ru from './js/ru.js';
import en from './js/en.js';
import inputWithMouse from './js/inputWithMouse.js';
import shift from './js/shift.js';
import {capslockWithMouse,capslockWithKeyboard} from './js/capslock.js'
import {animationWithMouse,animationWithKeyboard} from './js/animation.js';
import inputWithKeyboard from './js/inputWithKeyboard.js';

const body = document.querySelector('body')
function createStructure(){
  const wrapper = document.createElement('div')
  wrapper.className='wrapper'
  body.append(wrapper)
  const h2 = document.createElement('h2')
  h2.textContent = 'Windows virtual keyboard'
  wrapper.append(h2)
  const textarea = document.createElement('textarea')
  textarea.id = 'story'
  textarea.name = 'story'
  textarea.rows = '5'
  textarea.cols = '33'
  textarea.value = ''
  textarea.placeholder = 'Start...'
  textarea.className = 'board'
  textarea.resize = 'none'
  wrapper.append(textarea)
  const keyboard = document.createElement('div')
  keyboard.id='keyboard'
  wrapper.append(keyboard)
  for(let i=0; i<=4; i++){
    let count = 0
    const row = document.createElement('div')
    row.className = 'row';
    keyboard.append(row)
    if(i!=4){
      count = 14
    }else{
      count=9
    }
for(let j=1; j<=count; j++){
  const key = document.createElement('div')
  key.className = 'keys';
  row.append(key)
}
  }
  changeLang()
}

function changeLang(){
  
  const key = document.querySelectorAll('.keys')
  for(let i=0; i<key.length; i++){
    key[i].innerHTML = en[i].small
    key[i].dataset.code = en[i].code
    if(key[i].innerHTML.length==1){
      key[i].classList.add('letter')
    }
  }
}
window.addEventListener('DOMContentLoaded',()=>{
createStructure()
inputWithMouse()
shift();
animationWithMouse();
inputWithKeyboard();
animationWithKeyboard();
capslockWithMouse();
capslockWithKeyboard();
})




