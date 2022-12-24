// Get the HTML element where you want to display the time difference
const timeElement = document.getElementById('seconds');

// Create a function to update the time difference
function updateTimeDifference() {
  // Get the current date and time
  const currentDate = new Date();

  // Set the target date and time to 5/28/2022, 5:52:10 PM AEST
  const targetDate = new Date(2022, 11, 22, 7, 27, 35);

  // Calculate the time difference between the current date and the target date
  const timeDifference = currentDate - targetDate;

  // Convert the time difference to seconds
  const seconds = Math.floor(timeDifference / 1000);

  // Update the innerHTML of the element to show the time difference in seconds
  timeElement.innerHTML = `${seconds} seconds`;
}

// Call the updateTimeDifference function every 1 second
setInterval(updateTimeDifference, 1000);
