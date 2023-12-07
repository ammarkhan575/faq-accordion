document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordian-btn');
  
    accordionButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const accordionContent = this.parentNode.nextElementSibling;
        this.children[0].classList.toggle('hidden');
       
        accordionContent.classList.toggle('hidden');
      });
    });
  });