function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('active');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active');
      })
      tabContent[index].classList.add('active');
    }
      
    //(itemMenu, index) - o primeiro item é o próprio item, o segundo arqgumento, é o index que quero passar para a função
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', function () {
        activeTab(index);
      })
    })      
  }
}
initTabNav();

function initAccordion() {  
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'active';
   
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      //event.currentTarget  usado passando (event)
      // this.classList.add('active');
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }  
}
initAccordion();


function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
  
    //Outra opção para scroll -  só funciona no Chrome e Firefox
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    //FORMA ALTERNATIVA
    //window.scrollTo(0, topo);
    // é possívl passar um objeto, mas não é aceito em todos os navegadores
    /* window.scrollTo({
      top: topo,
      behavior: 'smooth',
    }); */
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })

}
initScrollSuave();


function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.65;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        
        if (isSectionVisible) {
          section.classList.add('active');
        }
      })
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();