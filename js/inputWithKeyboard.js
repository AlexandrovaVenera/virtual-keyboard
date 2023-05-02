export default function inputWithKeyboard(){
	const textarea = document.querySelector('textarea');
  document.addEventListener('keydown', (event) => {
		if(document.querySelector(`[data-code=${event.code}]`).innerHTML.length==1&&
		event.code !='ArrowUp'&& event.code !='ArrowLeft'
		&&event.code !='ArrowRight'
		&&event.code !='ArrowDown'){
		textarea.value += document.querySelector(`[data-code=${event.code}]`).innerHTML
		}
	})
}