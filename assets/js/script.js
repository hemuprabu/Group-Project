
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

// gets and displays the random image for the beagle modal
function getBModalApi() {
  // fetch request gets a list of all the repos for the node.js organization
  fetch('https://dog.ceo/api/breed/beagle/images/random')
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the API response
      const imageUrl = data.message;
      console.log(imageUrl)
      console.log(data)
      const bmimgp = document.getElementById('bmodal');
      if (!document.getElementById('imgB')) {
        // Create an image element
        const bmimg = document.createElement('img');
        bmimg.setAttribute('id', "imgB");
        // Set the src attribute to the fetched image URL
        bmimg.src = imageUrl;
        // Append the image to a container in your HTML
        bmimgp.appendChild(bmimg);
      } else {
        const bmimg_ref = document.getElementById('imgB');
        bmimg_ref.src = imageUrl;
      }

    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}

// gets and displays the random image for the chihuahua modal
function getCModalApi() {
  // fetch request gets a list of all the repos for the node.js organization
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the API response
      const imageUrl = data.message;
      console.log(imageUrl)
      console.log(data)
      const bmimgp1 = document.getElementById('bmodal1');
      if (!document.getElementById('imgC')) {
        // Create an image element
        const cmimg = document.createElement('img');
        cmimg.setAttribute('id', "imgC");

        // Set the src attribute to the fetched image URL
        cmimg.src = imageUrl;

        // Append the image to a container in your HTML
        bmimgp1.appendChild(cmimg);
      } else {
        const cmimg_ref = document.getElementById('imgC');
        cmimg_ref.src = imageUrl;
      }

    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}

// gets and displays the random image for the Shihtzu modal
function getSModalApi() {
  // fetch request gets a list of all the repos for the node.js organization
  fetch('https://dog.ceo/api/breed/shihtzu/images/random')
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the API response
      const imageUrl = data.message;
      console.log(imageUrl)
      console.log(data)
      const smimgp1 = document.getElementById('bmodal2');
      if (!document.getElementById('imgS')) {
        // Create an image element
        const smimg = document.createElement('img');
        smimg.setAttribute('id', "imgS");

        // Set the src attribute to the fetched image URL
        smimg.src = imageUrl;

        // Append the image to a container in your HTML
        smimgp1.appendChild(smimg);
      } else {
        const smimg_ref = document.getElementById('imgS');
        smimg_ref.src = imageUrl;
      }
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}


// gets and displays the random image for the Husky modal
function getHModalApi() {
  // fetch request gets a list of all the repos for the node.js organization
  fetch('https://dog.ceo/api/breed/husky/images/random')
    .then(response => response.json())
    .then(data => {
      // Get the image URL from the API response
      const imageUrl = data.message;
      console.log(imageUrl)
      console.log(data)
      const hmimgp1 = document.getElementById('bmodal3');
      if (!document.getElementById('imgH')) {
        // Create an image element
        const hmimg = document.createElement('img');
        hmimg.setAttribute('id', "imgH");

        // Set the src attribute to the fetched image URL
        hmimg.src = imageUrl;

        // Append the image to a container in your HTML
        hmimgp1.appendChild(hmimg);
      } else {
        const hmimg_ref = document.getElementById('imgH');
        hmimg_ref.src = imageUrl;
      }
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
}

// function for sliding carousel at the top of the site
$(document).ready(function () {

  //carousel
  $('.carousel').carousel();

  //function for auto play carousel-slider
  setInterval(function () {

    $('.carousel').carousel('next');
  }, 2000);

  // sidenav
  $('.sidenav').sidenav();
  //select
  $('select').formSelect();
  //modal 
  $('.modal').modal();

});

// function for getting and creating all beagle info and elements
function beagleInfo() {
  // headers containing content type and api key
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_jaBDZmVJ3qLhWQ7waYKlud0pFvkxuISqH9RsIS66MnTQKMhzO15m1bgX1JGWE9KO"
  });

  // request options for api fetch
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  // fetch function
  fetch("https://api.thedogapi.com/v1/breeds/31", requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // sets a variable called beagleData to the JSON data returned from the fetch request
      beagleData = data;
      console.log(beagleData);
      // creates variables for the name, bred for, lifespan, temperament, weight, and height elements
      const bname = document.getElementById('bname');
      const bbred = document.getElementById('bbred');
      const blifespan = document.getElementById('blifespan');
      const btemp = document.getElementById('btemp');
      const bweight = document.getElementById('bweight');
      const bheight = document.getElementById('bheight');

      // injects data for name, bred for, lifespan, temperament, weight, and height elements
      bname.innerHTML = 'Name: ' + beagleData.name;
      bbred.innerHTML = 'Bred for: ' + beagleData.bred_for;
      blifespan.innerHTML = 'Average lifespan: ' + beagleData.life_span;
      btemp.innerHTML = 'Temperament: ' + beagleData.temperament;
      bweight.innerHTML = 'Average weight: ' + beagleData.weight.imperial + ' lbs';
      bheight.innerHTML = 'Average height: ' + beagleData.height.imperial + ' inches';
    })
    .catch(error => console.log('error', error));




}

// function for getting and creating all chihuahua info and elements
function chihuahuaInfo() {
  // headers containing content type and api key
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_jaBDZmVJ3qLhWQ7waYKlud0pFvkxuISqH9RsIS66MnTQKMhzO15m1bgX1JGWE9KO"
  });

  // request options for api fetch
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  // fetch function
  fetch("https://api.thedogapi.com/v1/breeds/77", requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // sets a variable called chihuahuaData to the JSON data returned from the fetch request
      chihuahuaData = data;
      console.log(chihuahuaData);
      // creates variables for the name, bred for, lifespan, temperament, weight, and height elements
      const cname = document.getElementById('cname');
      const cbred = document.getElementById('cbred');
      const clifespan = document.getElementById('clifespan');
      const ctemp = document.getElementById('ctemp');
      const cweight = document.getElementById('cweight');
      const cheight = document.getElementById('cheight');

      // injects data for name, bred for, lifespan, temperament, weight, and height elements
      cname.innerHTML = 'Name: ' + chihuahuaData.name;
      cbred.innerHTML = 'Bred for: ' + chihuahuaData.bred_for;
      clifespan.innerHTML = 'Average lifespan: ' + chihuahuaData.life_span;
      ctemp.innerHTML = 'Temperament: ' + chihuahuaData.temperament;
      cweight.innerHTML = 'Average weight: ' + chihuahuaData.weight.imperial + ' lbs';
      cheight.innerHTML = 'Average height: ' + chihuahuaData.height.imperial + ' inches';
    })
    .catch(error => console.log('error', error));




}

// function for getting and creating all shih tzu info and elements
function shihtzuInfo() {
  // headers containing content type and api key
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_jaBDZmVJ3qLhWQ7waYKlud0pFvkxuISqH9RsIS66MnTQKMhzO15m1bgX1JGWE9KO"
  });

  // request options for api fetch
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  // fetch function
  fetch("https://api.thedogapi.com/v1/breeds/223", requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // sets a variable called shihtzuData to the JSON data returned from the fetch request
      shihtzuData = data;
      console.log(shihtzuData);
      // creates variables for the name, bred for, lifespan, temperament, weight, and height elements
      const sname = document.getElementById('sname');
      const sbred = document.getElementById('sbred');
      const slifespan = document.getElementById('slifespan');
      const stemp = document.getElementById('stemp');
      const sweight = document.getElementById('sweight');
      const sheight = document.getElementById('sheight');

      // injects data for name, bred for, lifespan, temperament, weight, and height elements
      sname.innerHTML = 'Name: ' + shihtzuData.name;
      sbred.innerHTML = 'Bred for: ' + shihtzuData.bred_for;
      slifespan.innerHTML = 'Average lifespan: ' + shihtzuData.life_span;
      stemp.innerHTML = 'Temperament: ' + shihtzuData.temperament;
      sweight.innerHTML = 'Average weight: ' + shihtzuData.weight.imperial + ' lbs';
      sheight.innerHTML = 'Average height: ' + shihtzuData.height.imperial + ' inches';
    })
    .catch(error => console.log('error', error));




}

// function for getting and creating all husky info and elements
function huskyInfo() {
  // headers containing content type and api key
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_jaBDZmVJ3qLhWQ7waYKlud0pFvkxuISqH9RsIS66MnTQKMhzO15m1bgX1JGWE9KO"
  });

  // request options for api fetch
  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  // fetch function
  fetch("https://api.thedogapi.com/v1/breeds/8", requestOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // sets a variable called huskyData to the JSON data returned from fetch
      huskyData = data;
      console.log(huskyData);
      // creates variables for the name, bred for, lifespan, temperament, weight, and height elements
      const hname = document.getElementById('hname');
      const hbred = document.getElementById('hbred');
      const hlifespan = document.getElementById('hlifespan');
      const htemp = document.getElementById('htemp');
      const hweight = document.getElementById('hweight');
      const hheight = document.getElementById('hheight');

      // injects data for name, bred for, lifespan, temperament, weight, and height elements
      hname.innerHTML = 'Name: ' + huskyData.name;
      hbred.innerHTML = 'Bred for: ' + huskyData.bred_for;
      hlifespan.innerHTML = 'Average lifespan: ' + huskyData.life_span;
      htemp.innerHTML = 'Temperament: ' + huskyData.temperament;
      hweight.innerHTML = 'Average weight: ' + huskyData.weight.imperial + ' lbs';
      hheight.innerHTML = 'Average height: ' + huskyData.height.imperial + ' inches';
    })
    .catch(error => console.log('error', error))
}


const mySelect = document.getElementById('breedSelect');
const myfindImg = document.getElementById('findImg');

myfindImg.addEventListener('click', function () {
  const selectedOption = mySelect.options[mySelect.selectedIndex].value;
  console.log('Selected option:', selectedOption);
  if (selectedOption == 1) {
    console.log("beagle", selectedOption);
    myfindImg.setAttribute('data-target', 'terms');
    getBModalApi();
    beagleInfo();


  } else if (selectedOption == 2) {
    console.log("chihuahua", selectedOption);
    myfindImg.setAttribute('data-target', 'terms1');
    chihuahuaInfo();
    getCModalApi();
    return
  } else if (selectedOption == 3) {
    console.log("shihtzu", selectedOption);
    myfindImg.setAttribute('data-target', 'terms2');
    shihtzuInfo();
    getSModalApi();
    return
  } else {
    console.log("husky", selectedOption);
    myfindImg.setAttribute('data-target', 'terms3');
    huskyInfo();
    getHModalApi();
    return
  }
});

getFirstApi();

getSecondApi();

getThirdApi();

getFourthApi();

function sendMessage() {

  emailjs.init("");
  var serviceID = "service_or4uqxi";
  var templateID = "";
  var params = {
    sendername: document.querySelector("#user").value,
    senderemail: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,


  }
  emailjs.send(serviceID, templateID, params)
    .then(res => {
      alert('Thank you, ' + params['sendername'] + 'Your message has been sent');
    })
    .catch();
}
