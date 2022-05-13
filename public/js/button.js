//variable decleration
const button = document.getElementById('button');
let clicks = 0;

//get id from storage or set to zero
const _id = window.localStorage.getItem('_id') || 0;

function clickTimer(count, sec) {
    let time = 0;
    const seconds = sec * 1000;

    setInterval( async function () {
        time++;
        if (time >= count) {
            time = 0;
            if (clicks > 0) {
                const response = await fetch('/api/user', {
                    method: 'POST',
                    body: JSON.stringify({
                        _id: _id,
                        clicks: clicks
                    }),
                    headers: { 'Content-Type': 'application/json' }
                });

                const res = await response.json();
                localStorage.setItem('_id', res._id);
            }
        }
    }, seconds);
}

//function decleration
function buttonPush(event) {
    event.preventDefault();
    button.src = 'assets/button-push.png';
    clicks++;
}

function buttonUnpush(event) {
    event.preventDefault();
    button.src = 'assets/button.png'
}

//webpage actions

button.addEventListener('mouseleave', buttonUnpush)
button.addEventListener('mousedown', buttonPush);
button.addEventListener('mouseup', buttonUnpush);
clickTimer(10, 1);