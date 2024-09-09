document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
      dropdown.classList.add('active');
    });
  
    dropdown.addEventListener('mouseout', () => {
      dropdown.classList.remove('active');
    });
  });
  