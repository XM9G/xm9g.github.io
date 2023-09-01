// Function to check if the user agent contains "iPhone," "iPad," or "Macintosh"
function isAppleDevice() {
    const userAgent = navigator.userAgent;
    console.log("User Agent:", userAgent); // Log the user agent to the console
    return /iPhone|iPad|Macintosh/.test(userAgent);
}

// Redirect if the page is opened on an Apple device
if (isAppleDevice()) {
    // Change 'destination-url' to the URL where you want to redirect
    window.location.href = 'https://example.com'; // Replace with your destination URL
}