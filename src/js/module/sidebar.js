const sideNavScript = () => {
  const about = document.querySelector('.about');
  const sidebar = document.querySelector('.side-navbar-container');

  window.addEventListener('resize', (event) => {
    if (document.documentElement.clientWidth >= 768 ) {
      about.classList.remove('is-active');
      sidebar.classList.remove('is-active');
    }
  });

  about.addEventListener('click', (event) =>{
    about.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
  });
}

export { sideNavScript };
