const countdown = document.querySelector('.countdown');
const audioElement = new Audio('Xenogenesis.mp3');

function updateCountdown() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Get the current time
  const currentTime = new Date();

  // Calculate the time until the end of the year
  const timeUntilEndOfYear = new Date(currentYear, 11, 31, 23, 59, 59, 999) - currentTime;

  // Calculate the days, hours, minutes, and seconds until the end of the year
  const days = Math.floor(timeUntilEndOfYear / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeUntilEndOfYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilEndOfYear % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeUntilEndOfYear % (1000 * 60)) / 1000);

  // Format hours, minutes, and seconds to have leading zeros for single-digit numbers
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Update the countdown element with the formatted values
  countdown.innerHTML = `${days > 0 ? `${days}d ` : ''}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  // Check if the time remaining is less than or equal to 58 seconds
  if (timeUntilEndOfYear <= 58000 && timeUntilEndOfYear > 0) {
    // Start playing the audio file
    audioElement.play();
  }
}

// Update the countdown every 1 second
setInterval(updateCountdown, 100);

// Update the countdown initially
updateCountdown();
