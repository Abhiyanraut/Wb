let background = localStorage.getItem('background');
const Bswitch = document.getElementById('bg');

// Function to enable background image 1.jpg
const enableBackground = () => {
  document.body.classList.add('background');
  localStorage.setItem('background', 'active');
};

// Function to disable background image
const disableBackground = () => {
  document.body.classList.remove('background');
  localStorage.setItem('background', 'inactive');
};

// Initialize background based on localStorage
if (background === "active") {
  enableBackground();
} else {
  disableBackground();
}

// Toggle background on button click
Bswitch.addEventListener('click', () => {
  background = localStorage.getItem('background');
  if (background !== "active") {
    enableBackground();
  } else {
    disableBackground();
  }
});
