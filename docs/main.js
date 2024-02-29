// Main JS
// Link Highlighting
const linkHighlight = function(self) {
  self.style.backgroundColor = 'white'
}

const unHighlight = function(self) {
  self.style.backgroundColor = '#FF6C22'
}



// Copy Email

function copyEmail() {
  // Get the text field
  var copyText = document.getElementById("myEmail");


   // Copy the text inside the text field
  navigator.clipboard.writeText('olellervin@gmail.com');

  // Alert the copied text
  alert(" Email copied! Looking forward to hearing from you!");
}