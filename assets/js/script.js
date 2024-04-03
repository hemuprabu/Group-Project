// gets and displays the random image for the beagle card
function getFirstApi() {
  // fetch request gets a list of all the repos for the node.js organization
  

  fetch('https://dog.ceo/api/breed/beagle/images/random')
  .then(response => response.json())
  .then(data => {
    // Get the image URL from the API response
    const imageUrl = data.message;
    console.log(imageUrl)
    console.log(data)
    // Create an image element
    const img = document.createElement('img');

    // Set the src attribute to the fetched image URL
    img.src = imageUrl;

    // Append the image to a container in your HTML
    document.getElementById('img1').appendChild(img);
  })
//   logs an error message if the fetch fails
  .catch(error => {
    console.error('Error fetching image:', error);
  });
}

// gets and displays the random image for the chihuahua card
function getSecondApi() {
    // fetch request gets a list of all the repos for the node.js organization
    
  
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the API response
      const imageUrl = data.message;
      console.log(imageUrl)
      console.log(data)
      // Create an image element
      const img = document.createElement('img');
  
      // Set the src attribute to the fetched image URL
      img.src = imageUrl;
  
      // Append the image to a container in your HTML
      document.getElementById('img2').appendChild(img);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
  }

//   gets and displays the random image for the shihtzu card
  function getThirdApi() {
    // fetch request gets a list of all the repos for the node.js organization
    
  
    fetch('https://dog.ceo/api/breed/shihtzu/images/random')
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the API response
      const imageUrl = data.message;
      console.log(imageUrl)
      console.log(data)
      // Create an image element
      const img = document.createElement('img');
  
      // Set the src attribute to the fetched image URL
      img.src = imageUrl;
  
      // Append the image to a container in your HTML
      document.getElementById('img3').appendChild(img);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
  }

//   gets and displays the random image for the husky card
  function getFourthApi() {
    // fetch request gets a list of all the repos for the node.js organization
    
  
    fetch('https://dog.ceo/api/breed/husky/images/random')
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the API response
      const imageUrl = data.message;
      console.log(imageUrl)
      console.log(data)
      // Create an image element
      const img = document.createElement('img');
  
      // Set the src attribute to the fetched image URL
      img.src = imageUrl;
  
      // Append the image to a container in your HTML
      document.getElementById('img4').appendChild(img);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
  }



getFirstApi();

getSecondApi();

getThirdApi();

getFourthApi();

// carousel
// var instance = M.Carousel.init({
//     fullWidth: true
//   });
$(document).ready(function(){
    $('.carousel').carousel();

    //function for auto play carousel-slider
    setInterval(function(){
        
        $('.carousel').carousel('next');
    },2000);

    $('.sidenav').sidenav();

    $('select').formSelect();
});