//variable decleration
const button = document.getElementById('button');
console.log('variables declared')

//function decleration
 function buttonPush(){
     button.src = 'assets/button-push.png'
 }

 function buttonUnpush(){
    button.src = 'assets/button.png'
 }

//webpage actions
button.addEventListener('mouseleave',buttonUnpush)
button.addEventListener('mousedown', buttonPush);
button.addEventListener('mouseup', buttonUnpush);
