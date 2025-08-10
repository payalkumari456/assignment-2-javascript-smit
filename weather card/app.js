var weather = prompt("search out any weather season\n•winter\n•summer\n•spring\n•autumn\n");
 if (weather === "autumn") {
  document.writeln(`
    <div class="container-fluid d-flex justify-content-center align-items-center"
         style="background-image: url('./images/beautiful-autumn-park-benches-trees-600nw-2543587357.webp'); 
                background-size: cover; 
                background-position: center;
                background-repeat: no-repeat;
                width: 100vw; 
                height: 100vh; 
                margin: 0; 
                padding: 0;">
      <div class="card animated-card shadow-lg" style="width: 22rem;">
        <img src="./images/illustration-beautiful-autumn-landscape-with-colorful-foliage_756405-46374.avif" class="card-img-top" alt="Autumn Image">
        <div class="card-body">
          <h5 class="card-title">Nature's Color Show</h5>
          <p class="card-text">The air feels fresh and cool, perfect for walks, warm drinks, and soft sweaters.</p>
          <p class="card-text">Trees burst into vibrant shades of red, gold, and amber, turning the world into a painting.</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  `);
}else if(weather === "winter"){
  document.writeln(`
    <div class="container-fluid d-flex justify-content-center align-items-center"
         style="background-image: url('./images/276919_00_2x.webp'); 
                background-size: cover; 
                background-position: center;
                background-repeat: no-repeat;
                width: 100vw; 
                height: 100vh; 
                margin: 0; 
                padding: 0;">
      <div class="card animated-card shadow-lg" style="width: 22rem;">
        <img src="./images/360_F_298032209_YD4pFLDyzMyqBzso5xF5USR05hxqGuXf.jpg" class="card-img-top" alt="Winter Image">
        <div class="card-body">
          <h5 class="card-title">Nature's Color Show</h5>
          <p class="card-text">Landscapes transform into white wonderlands, with snow sparkling like diamonds in the sunlight.</p>
          <p class="card-text">Winter brings celebrations like Christmas, New Year, and winter carnivals filled with lights and joy.</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  `);
}else if(weather === "spring"){
  document.writeln(`
    <div class="container-fluid d-flex justify-content-center align-items-center"
         style="background-image: url('./images/blur-background-delicate-pink-flowers-260nw-2602363389.webp'); 
                background-size: cover; 
                background-position: center;
                background-repeat: no-repeat;
                width: 100vw; 
                height: 100vh; 
                margin: 0; 
                padding: 0;">
      <div class="card animated-card shadow-lg" style="width: 22rem;">
        <img src="./images/cherry_blossoms.jpg.optimal.jpg" class="card-img-top" alt="Spring Image">
        <div class="card-body">
          <h5 class="card-title">Nature's Color Show</h5>
          <p class="card-text">Trees sprout fresh green leaves, and flowers bloom in vibrant colors, symbolizing new beginnings.</p>
          <p class="card-text">Mild temperatures with gentle sunshine and cool breezes make outdoor time enjoyable.</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  `);
}else if(weather === "summer"){
  document.writeln(`
    <div class="container-fluid d-flex justify-content-center align-items-center"
         style="background-image: url('./images/soft-blurry-summer-background-sunlit-aqua-park-dreamy-light-soft-blurry-summer-background-sunlit-aqua-park-380963443.webp'); 
                background-size: cover; 
                background-position: center;
                background-repeat: no-repeat;
                width: 100vw; 
                height: 100vh; 
                margin: 0; 
                padding: 0;">
      <div class="card animated-card shadow-lg" style="width: 22rem;">
        <img src="./images/summer.jpg" class="card-img-top" alt="Summer Image">
        <div class="card-body">
          <h5 class="card-title">Nature's Color Show</h5>
          <p class="card-text">Perfect for beach trips, swimming, hiking, and barbecues with friends and family.</p>
          <p class="card-text">Juicy watermelons, mangoes, pineapples, and refreshing drinks to beat the heat.</p>
          <a href="#" class="btn btn-primary">Learn More</a>
        </div>
      </div>
    </div>
  `);
}else{
  document.writeln(` 
    <div class="container-fluid d-flex justify-content-center align-items-center"
         style="background-image: url('./images/glitch-error-404-background_23-2148077380.avif'); 
                background-size: cover; 
                background-position: center;
                background-repeat: no-repeat;
                width: 100vw; 
                height: 100vh; 
                margin: 0; 
                padding: 0;">
      <div class="card animated-card shadow-lg" style="width: 22rem;">
        <img src="./images/01874af827f1c28703d950277fc1d2af.jpg" class="card-img-top" alt="Error Image">
      </div>
    </div>
  `);
}

