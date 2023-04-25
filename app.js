const keyboardEng = 
['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
 'Shift','\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/','▲', 'Shift',
 'Ctrl','Fn', 'Win', 'Alt', 'space', 'Alt', 'Ctrl',`&#x25C4;`,`&#x25BC;`, `&#x25BA;`, '']
 const keyboardRu = 
['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
 'Shift','\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/','▲', 'Shift',
 'Ctrl','Fn', 'Win', 'Alt', ' ', 'Alt', 'Ctrl',`&#x25C4;`,`&#x25BC;`, `&#x25BA;`, '']
// document.onkeydown = function(e){
//   keyboard.push(window.event.key)
//   console.log(keyboard)
// }

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
  textarea.className = 'board'
  textarea.resize = 'none'
  wrapper.append(textarea)
  const keyboard = document.createElement('div')
  keyboard.id='keyboard'
  wrapper.append(keyboard)
  for(let i=0; i<=4; i++){
    const row = document.createElement('div')
    row.className = 'row'
    keyboard.append(row)
  }
  for(let i=0; i<=4; i++){
    const row = document.createElement('div')
    row.className = 'row';
    keyboard.append(row)
    if(i==0||i==3){
      count = 14
    }else if(i==1){
      count=15
    }else if(i==2){
      count=13
    }else{
      count=11
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
    if(keyboardEng[i].length>1){
      let clas = keyboardEng[i].toLowerCase().concat('_key') 
      key[i].classList.add(clas)
    }
    key[i].innerHTML = keyboardEng[i]
    key[i].dataset.char = keyboardEng[i]
  }
}

createStructure()