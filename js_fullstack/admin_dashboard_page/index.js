(() => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
  };

  const handleCollapse = () => {
    toggleSidebar();
  };

  const handleSmallScreen = (e) => {
    if (e.matches) {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.add('collapsed');
    }
  };

  const main = () => {
    const logo = document.querySelector('.sidebar .logo');
    logo.addEventListener('click', handleCollapse);

    // Create a condition that targets viewports at least 768px wide
    const smallMediaQuery = window.matchMedia('(max-width: 850px)');
    smallMediaQuery.addEventListener('change', handleSmallScreen);
    handleSmallScreen(smallMediaQuery);
  };

  main();
})();
