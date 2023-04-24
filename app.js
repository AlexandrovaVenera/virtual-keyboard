const keyboardEng = 
['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','ArrowUp', 'Shift',
 'Control', 'Win', 'Alt', ' ', 'Alt','ArrowLeft','ArrowDown', 'ArrowRight', 'Control']
 
document.onkeydown = function(e){
  keyboard.push(window.event.key)
  console.log(keyboard)
}