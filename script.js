function setClock() {
    const now = new Date();
    
    // Algeria is UTC+1 and does not observe DST.
    // We use UTC methods to avoid local system time issues and hardcode the +1 offset.
    const seconds = now.getUTCSeconds();
    const minutes = now.getUTCMinutes();
    const hours = (now.getUTCHours() + 1) % 24;

    const secondDegrees = ((seconds / 60) * 360);
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
    const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30);

    const secondHand = document.getElementById('second-hand');
    const minuteHand = document.getElementById('minute-hand');
    const hourHand = document.getElementById('hour-hand');

    if (secondHand) secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    if (hourHand) hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Update every second
setInterval(setClock, 1000);
// Run immediately
setClock();
