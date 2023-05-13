









// let myBall = new Ball();
const player1Input = document.querySelector('#player1');
const player2Input = document.querySelector('#player2');
const startBtn = document.querySelector('#start');
const playerParamsEl = document.querySelector('#playerParams')


startBtn.addEventListener('click', function() {
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;
    // let firstLetter = text.charAt(0);
    // myBall.insertElement(firstLetter);
    start(player1Name, player2Name);
    playerParamsEl.remove();

//     if (player1Name && player2Name) {
//         playerParamsEl.remove();
//         start({player1Name, player2Name});
//     } else {
//         alert('Please feel inputs');
//     }
 });



