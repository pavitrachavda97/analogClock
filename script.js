function rotateClockHands() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const second = document.getElementById('second');
    const minute = document.getElementById('minute');
    const hour = document.getElementById('hour');

    const secondRotation = 6 * seconds;
    const minuteRotation = 6 * minutes + secondRotation / 60;
    const hourRotation = 30 * (hours % 12) + minuteRotation / 12;

    second.style.transform = `rotate(${secondRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    hour.style.transform = `rotate(${hourRotation}deg)`;
}

setInterval(rotateClockHands, 1000);