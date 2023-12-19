// Hover animation for project link
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
      
      hoverImage.style.transform = 'scale(1)';
      
    });
  });
});


// Section for scrolling animation
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
      console.log('entry' . entry)
      if (entry.isIntersecting){
          entry.target.classList.add('show');
      }
  });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));