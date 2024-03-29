const countdown = document.querySelector('.countdown');
const audioElement = new Audio('song.wav');

function updateCountdown() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Get the current time
  const currentTime = new Date();

  // Calculate the time until the end of the year
  const timeUntilEndOfYear = new Date(currentYear, 11, 31, 23, 59, 59, 999) - currentTime;

  // Calculate the days, hours, minutes, seconds, and milliseconds until the end of the year
  const days = Math.floor(timeUntilEndOfYear / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeUntilEndOfYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilEndOfYear % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeUntilEndOfYear % (1000 * 60)) / 1000);
  const milliseconds = timeUntilEndOfYear % 1000;

  // Update the countdown element with the calculated values
  countdown.innerHTML = `${days}d ${hours}:${minutes}:${seconds}.${milliseconds} `;

  // Check if the time remaining is less than 22 seconds (including milliseconds)
  if (timeUntilEndOfYear < 22000) {
    // Start playing the audio file
    audioElement.play();
  }
}

// Update the countdown every 1 millisecond
setInterval(updateCountdown, 1);

// Update the countdown initially
updateCountdown();
