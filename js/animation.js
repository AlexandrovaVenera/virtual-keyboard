export function animationWithMouse(){
	const keys = document.querySelectorAll('.keys')
  keys.forEach(key=>key.addEventListener('click', (event) => {
		event.target.classList.add('active')
	}))
	keys.forEach(key=>key.addEventListener("animationend", (event) => {
		event.target.classList.remove('active')
	}))
}

export function animationWithKeyboard(){
  document.addEventListener('keydown', (event) => {
		if(document.querySelector(`[data-code=${event.code}]`)){
			document.querySelector(`[data-code=${event.code}]`).classList.add('active')
		}
	})
}


