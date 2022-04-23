(() => {
  const createImgBtn = (imgSrc, link) => {
    const icon = document.createElement('a');
    icon.setAttribute('href', link);
    img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    icon.appendChild(img);
    return icon;
  };

  const createProjectCard = (proj) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = proj.name;

    const content = document.createElement('div');
    content.classList.add('content');
    const projImg = document.createElement('img');
    projImg.setAttribute('src', proj.img);
    const projDesc = document.createElement('span');
    projDesc.textContent = proj.desc;

    const btnContainers = document.createElement('div');
    btnContainers.classList.add('btn-container');
    const iconGithub = createImgBtn('./assets/github.svg', proj.github);
    const iconView = createImgBtn('./assets/eye-plus-outline.svg', proj.link);
    const iconShare = createImgBtn('./assets/share-variant-outline.svg', proj.github);

    content.appendChild(projImg);
    content.appendChild(projDesc);

    btnContainers.appendChild(iconGithub);
    btnContainers.appendChild(iconView);
    btnContainers.appendChild(iconShare);

    card.appendChild(h2);
    card.appendChild(content);
    card.appendChild(btnContainers);

    return card;
  };

  const generateProjects = () => {
    const cardContainer = document.querySelector('.card-container');
    PROJECTS.odin.reverse().forEach((project) => {
      const card = createProjectCard(project);
      cardContainer.appendChild(card);
    });
  };

  const createAsideCard = (proj) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const link = document.createElement('a');
    link.setAttribute('href', proj.github);
    const h4 = document.createElement('h4');
    h4.textContent = proj.name;

    link.appendChild(h4);

    const span = document.createElement('span');
    span.textContent = proj.desc;

    card.appendChild(link);
    card.appendChild(span);

    return card;
  };

  const generateAsideProjects = (type) => {
    const arr = type === 'js' ? JS_PROJECTS : CSS_PROJECTS;
    const containerClass = `.${type}-container`;
    const cardContainer = document.querySelector(containerClass);
    arr.odin.reverse().forEach((project) => {
      const card = createAsideCard(project);
      cardContainer.appendChild(card);
    });
  };

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

  const handleCopyLink = (e) => {
    e.preventDefault();
    const link = e.target.parentNode.getAttribute('href');
    navigator.clipboard.writeText(link).then(() => {
      alert('Copied');
    });
  };

  const handleChangeTheme = () => {
    const currTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = !currTheme || currTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const main = () => {
    generateProjects();
    generateAsideProjects('js');
    generateAsideProjects('css');

    const logo = document.querySelector('.sidebar .logo');
    logo.addEventListener('click', handleCollapse);

    const copyLinkButtons = document.querySelectorAll('.card-container .card .btn-container a:nth-child(3)');
    copyLinkButtons.forEach((btn) => {
      btn.addEventListener('click', handleCopyLink);
    });

    const darkThemeBtn = document.querySelector('.profile img:nth-child(2)');
    darkThemeBtn.addEventListener('click', handleChangeTheme);

    const defaultDarkMode = localStorage.getItem('theme');
    if (defaultDarkMode && defaultDarkMode === 'dark') {
      handleChangeTheme();
    }

    // Create a condition that targets viewports at least 768px wide
    const smallMediaQuery = window.matchMedia('(max-width: 850px)');
    smallMediaQuery.addEventListener('change', handleSmallScreen);
    handleSmallScreen(smallMediaQuery);
  };

  main();
})();
