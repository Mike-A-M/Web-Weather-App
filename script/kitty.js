fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(imageArray => {
        const container = document.getElementById('kitty'); // Assuming you have a container element

        imageArray.forEach(imageObject => {
        const img = document.createElement('img');
        img.src = imageObject.url;
        console.log(img.src);
        container.appendChild(img);
    });
  });