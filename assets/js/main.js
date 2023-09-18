AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  let formData = new FormData(this);

  fetch('https://formspree.io/f/maygbzaa', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      if (data.ok) {
          // Show the notification
          let notification = document.getElementById('notification');
          notification.style.display = 'block';

          // Hide the notification after 2 seconds
          setTimeout(() => {
              notification.style.display = 'none';
          }, 2000);
      } else {
          alert('Error sending message. Please try again. or email: rsomisetty@gmail.com');
      }
  })

  // Show the notification
  let notification = document.getElementById('notification');
  notification.style.display = 'block';

  // Hide the notification after 2 seconds
  setTimeout(() => {
      notification.style.display = 'none';
  }, 2000);
});

function showNotification() {
  let notification = document.getElementById('notification');
  notification.classList.add('show');

  setTimeout(() => {
      notification.classList.remove('show');
  }, 4000);
}

