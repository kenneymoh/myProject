// Create a function to open the pop-up
function openTaskPopup() {
  // Get the modal element
  var modal = document.getElementById("task-popup");

  // Show the modal
  modal.style.display = "block";
}

// Create a function to close the pop-up
function closeTaskPopup() {
  // Get the modal element
  var modal = document.getElementById("task-popup");

  // Hide the modal
  modal.style.display = "none";
}

// Add an event listener to a button that opens the pop-up when clicked
var button = document.getElementById("open-popup-button");
button.addEventListener("click", openTaskPopup);

// Add an event listener to the window that closes the pop-up when the user clicks outside of it
window.addEventListener("click", function(event) {
  var modal = document.getElementById("task-popup");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
