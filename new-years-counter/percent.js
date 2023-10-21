function updatePercentage() {
    // Get the current date
    const currentDate = new Date();

    // Get the current year
    const currentYear = currentDate.getFullYear();

    // Set the start date to January 1st of the current year
    const startDate = new Date(currentYear, 0, 1);

    // Set the end date to December 31st of the current year
    const endDate = new Date(currentYear, 11, 31);

    // Calculate the number of days between the start and end date
    const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

    // Calculate the number of days elapsed from the start date to the current date
    const daysElapsed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

    // Calculate the percentage of the year completed with five decimal places
    const percentCompleted = (daysElapsed / totalDays) * 100;

    // Update the HTML element with the calculated percentage
    const percentageElement = document.getElementById("percent");
    percentageElement.textContent = percentCompleted.toFixed(5) + "%";
}

// Call the function initially to display the percentage
updatePercentage();

// Update the percentage every second
setInterval(updatePercentage, 1000);