

export default function inputWithMouse(){
  const textarea = document.querySelector('textarea');
  const keys = document.querySelectorAll('.keys')
  document.body.addEventListener('click', (event) => {
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
    if (event.target.dataset.code =='Delete') {
      textarea.value = textarea.value.slice(0, -1);
    }
    if (event.target.innerHTML.length==1&&event.target.dataset.code !='ArrowUp'&&event.target.dataset.code !='ArrowLeft'
    &&event.target.dataset.code !='ArrowRight'
    &&event.target.dataset.code !='ArrowDown') {
      textarea.value += event.target.innerHTML;
    }

  
  })
}