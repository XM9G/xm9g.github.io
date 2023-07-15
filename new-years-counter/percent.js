setInterval(function() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const daysSoFar = Math.floor(diff / oneDay);
    const totalDays = 365; // or 366 for a leap year
    const percentOfYear = Math.round((daysSoFar / totalDays) * 100);
  
    document.getElementById('percentage').innerHTML = `${percentOfYear}% of the year has passed.`;
  }, 1000); // repeat every 1000 milliseconds (1 second)
  