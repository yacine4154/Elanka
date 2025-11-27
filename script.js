function setClock() {
    const now = new Date();

    // Force Algiers time (UTC+1)
    const options = { timeZone: 'Africa/Algiers', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    const [h, m, s] = timeString.split(':').map(Number);

    const seconds = s;
    const minutes = m;
    const hours = h;

    const secondDegrees = ((seconds / 60) * 360);
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock(); // Initial call
