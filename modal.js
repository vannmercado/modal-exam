/* js code */

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cancelButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Cache DOM elements
const modalContent = document.getElementById('modalContent');
const cancelButtonOnPage = document.getElementById('cancelButton');


// Attach event listener using event delegation
document.addEventListener('click', function(event) {
  // Check if the click event is triggered on the no button
  if (event.target.classList.contains('noButton')) {
    // Hide the modal
    modalContent.style.display = 'none';
    location.reload()
  }
  
  // Check if the click event is triggered on the yes button
  if (event.target.classList.contains('yesButton')) {
    // Update the modal's content to display the success message
    modalContent.textContent = 'Subscription successfully cancelled!';
    
    // Close the modal after 2 seconds using setTimeout
    setTimeout(function() {
      modalContent.style.display = 'none';
    }, 2000);
    
    // Replace the cancel button on the page with the text "cancelled"
    cancelButtonOnPage.textContent = 'Cancelled';
  }
});