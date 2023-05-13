function start({player1Name, player2Name }) {
    const ball1 = new Ball({
        name: player1Name,
        color: 'green',
        speed: 20,
        controls: {
            left: 'ArrowLeft',
            right: 'ArrowRight',
            up: 'ArrowUp',
            down: 'ArrowDown',
        }
    });
    const ball2 = new Ball({
        name: player2Name,
        color: 'blue',
        speed: 30,
        controls: {
            left: 'KeyA',
            right: 'KeyD',
            up: 'KeyW',
            down: 'KeyS',
        }
    });
}
