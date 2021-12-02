//variable decleration
const button = document.getElementById('button');
let clicks;

//get id from storage or set to zero

/**
 timer {
     if clcicks > 0{
         fetch
     }
 }
 */

//function decleration
function buttonPush() {
    button.src = 'assets/button-push.png'
}

function buttonUnpush() {
    button.src = 'assets/button.png'
}

//webpage actions
button.addEventListener('mouseleave', buttonUnpush)
button.addEventListener('mousedown', buttonPush);
button.addEventListener('mouseup', buttonUnpush);