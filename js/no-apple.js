// Function to check if the user agent contains "iPhone," "iPad," or "Macintosh"
function isAppleDevice() {
    const userAgent = navigator.userAgent;
    console.log("User Agent:", userAgent); // Log the user agent to the console
    return /iPhone|iPad|Mac/.test(userAgent);
}

// Redirect if the page is opened on an Apple device
if (isAppleDevice()) {
    // Change 'destination-url' to the URL where you want to redirect
    window.location.href = 'https://xm9g.github.io/No-Apple.html'; // Replace with your destination URL
}