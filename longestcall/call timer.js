// Get the HTML element where you want to display the time difference
const timeElement = document.getElementById('time-difference');

// Create a function to update the time difference
function updateTimeDifference() {
  // Get the current date and time
  const currentDate = new Date();

  // Set the target date and time to 1674306987 UNIX timestamp
  const targetDate = new Date(1674306987 * 1000);

  // Calculate the time difference between the current date and the target date
  const timeDifference = currentDate - targetDate;

  // Convert the time difference to seconds, minutes, and hours
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  let timeString;

  // If the time difference is greater than or equal to 1 hour, display the time difference in hours
  if (hours >= 1) {
    timeString = `${hours}:${minutes % 60}:${seconds % 60}`;
  }

  // If the time difference is greater than or equal to 1 minute but less than 1 hour, display the time difference in minutes
  else if (minutes >= 1) {
    timeString = `${minutes} minutes, ${seconds % 60} seconds`;
  }

  // If the time difference is less than 1 minute, display the time difference in seconds
  else {
    timeString = `${seconds} seconds`;
  }

  // Update the innerHTML of the element to show the time difference
  timeElement.innerHTML = `${timeString}`;
}

// Call the updateTimeDifference function every 1 second
setInterval(updateTimeDifference, 1000);
