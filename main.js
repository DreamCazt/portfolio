document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('#itemList li');
  const hoverImage = document.getElementById('hoverImage');

  listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const imgSrc = item.getAttribute('data-img-src');   
     
      hoverImage.style.borderRadius = '17px';
      setTimeout(() => {
        hoverImage.src = imgSrc;
        hoverImage.style.display = 'block';
        setTimeout(() => {
         
          hoverImage.style.transform = 'scale(1.1)';         
        }, 100);
      }, 10); 
    });

    item.addEventListener('mouseout', () => {
      // Fade out the image
    
      hoverImage.style.transform = 'scale(1)';
      
    });
  });
});