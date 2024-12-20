
document.addEventListener('DOMContentLoaded', () => {
    let faqContainer = document.querySelector('.faq-content');
  
    faqContainer.addEventListener('click', (e) => {
      let groupHeader = e.target.closest('.faq-group-header');
  
      if (!groupHeader) return;
  
      let group = groupHeader.parentElement;
      let groupBody = group.querySelector('.faq-group-body');
      let icon = groupHeader.querySelector('i');
  
     
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
  
    
      groupBody.classList.toggle('open');
  
     
      let otherGroups = faqContainer.querySelectorAll('.faq-group');
  
      otherGroups.forEach((otherGroup) => {
        if (otherGroup !== group) {
          let otherGroupBody = otherGroup.querySelector('.faq-group-body');
          let otherIcon = otherGroup.querySelector('.faq-group-header i');
  
          otherGroupBody.classList.remove('open');
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    let hamburgerButton = document.querySelector('.hamburger-button');
    let  mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });