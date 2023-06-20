function updateVisitorCount() {
  // Get the current count from local storage
  let count = localStorage.getItem('visitorCount');

  // Check if count exists
  if (count) {
    count = parseInt(count);
    count++; // Increment the count
  } else {
    count = 1; // Initialize the count to 1
  }

  // Update the count in local storage
  localStorage.setItem('visitorCount', count);

  // Update the count in the HTML element
  document.getElementById('visitor-count').textContent = count;
}

// Call the function to update the visitor count on page load
updateVisitorCount();