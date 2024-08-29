function enterSite() {
    // Hide the content by scaling it out
    document.querySelector('.content').style.transform = 'scaleX(0)';
  
    // Fade out the background image
    document.querySelector('.background-image').style.opacity = '0';
  
    // Fade in the dark page after a delay
    setTimeout(() => {
      document.querySelector('.dark-page').style.zIndex = '1';
      document.querySelector('.dark-page').style.opacity = '1';
    }, 1000); // Match the duration of other transitions
  }
  