let keyboard = []
document.onkeydown = function(e){
    
    console.log(window.event, window.event.key, String.charAt(window.event.keyCode))
}