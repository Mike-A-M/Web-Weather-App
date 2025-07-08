
// Script to grab random image of kitty


fetch('https://api.thecatapi.com/v1/images/search')

    //parse response as a JSON

    .then(response => response.json())

    // Image array will now contain the list of parsed objects
    .then(imageArray => {
        
            // target element in HTML Kitty
            const container = document.getElementById('kitty');

            imageArray.forEach(imageObject => {
            const img = document.createElement('img');
            img.src = imageObject.url;
            console.log(img.src);
            container.appendChild(img);
   });
});
