document.getElementById('startButton').addEventListener('click', function() {
    this.style.display = 'none';
    startCountdown();
});

function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let countdown = 3;
    countdownElement.textContent = countdown;
    let interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            showQuestion();
        }
    }, 1000);
}

function showQuestion() {
    document.getElementById('question').style.display = 'block';
}

document.getElementById('yesButton').addEventListener('click', function() {
    showResult('❤️❤️❤️\nSefa ve Deniz\nSeni çok seviyorum\nSürprizzz\n🎉🎉🎉');
});

document.getElementById('noButton').addEventListener('click', function() {
    showResult('😞😞😞\nSen kaybedersin, güzelim');
});

function showResult(message) {
    document.getElementById('question').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').textContent = message;
}
