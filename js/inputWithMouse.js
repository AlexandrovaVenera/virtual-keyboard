

export default function inputWithMouse(){
  const textarea = document.querySelector('textarea');
  const keys = document.querySelectorAll('.keys')
  document.body.addEventListener('click', (event) => {
    // if (event.target.getAttribute('keyboard__key_letter')) {
    //   textBuffer.push(event.target.innerText);
    // }
    if (event.target.dataset.code =='Space') {
      textarea.value += event.target.innerHTML
    }
    if (event.target.dataset.code =='Enter') {
      textarea.value  += '\r\n'
    }
    if (event.target.dataset.code =='Tab') {
      textarea.value  += '    '
    }
    if (event.target.dataset.code =='Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    }
    if (event.target.dataset.code =='Capslock') {
      textarea.value = textarea.value.slice(0, -1);
    }
    // if (event.target.classList.contains('tab')) {
    //   textBuffer.push('    ');
    // }
    // if (event.target.classList.contains('backspace')) {
    //   textBuffer.splice(textBuffer.length - 1, 1);
    // }
    // localStorage.buffer = textBuffer;
    // localStorage.text = textBuffer.join('');
    // textfield.innerHTML = localStorage.text;
  
  })
}