import PROJECTS from '../data/projects.json';
import STACK from '../data/stack.json';

/**
 * Función para poner todas las tecnologías que me gustaría mostrar
 * como botones interactuables.
 */
function inyectStack() {
  const STACK_SPACE = document.querySelector('#stackFilter');
  for (const TECH of STACK) {
    STACK_SPACE.innerHTML +=
      `<button class="btn-florence px-3" type="button" data-tech="${TECH.id}">
        <img src="${TECH.svg}" alt="${TECH.alt}" class="w-100" style="height: 30px;" />
        <p class="m-0"><b>${TECH.name}</b></p>
      </button>`
  }
}

/**
 * Función para poner todos los proyectos que me gustaría mostrar como
 * tarjetas.
 */
function inyectProjects() {
  const PROJECTS_SPACE = document.querySelector('#projects .row');

  for (const PROJECT of PROJECTS) {
    let source = (PROJECT.image) ?
      `<img src="${PROJECT.image}" alt="${PROJECT.alt}" class="img-fluid p-2" loading="lazy">` :
      `<video class="img-fluid p-2" controls controlslist="nofullscreen noremoteplayback nodownload" muted loading="lazy" autoplay disablepictureinpicture playsinline preload="metadata">
      <source src="${PROJECT.video}" type="video/mp4">
      Tu navegador no soporta vídeo.
    </video>`;

    PROJECTS_SPACE.innerHTML +=
      `<article class="project card h-100 col-11 col-lg-5" data-techs="${PROJECT.techs}">
        <div class="card-body d-flex flex-column gap-3 mt-2">

          <div class="d-flex justify-content-center align-items-center gap-3">
            <h3 class="card-title align-content-center text-secondary fs-subtitle m-0" title="${PROJECT.title}">
              ${PROJECT.title}
            </h3>
            <div id="${PROJECT.id}" class="d-flex gap-3 flex-shrink-0"></div>
          </div>

          <div class="ratio ratio-4x3 bg-black rounded overflow-hidden">
            ${source}
          </div>

          <p class="card-text fs-body text-center">
            ${PROJECT.description}
          </p>

        </div>
      </article>`;

    const LINK_SPACE = PROJECTS_SPACE.querySelector(`#${PROJECT.id}`);
    for (const KEYS of Object.keys(PROJECT.links)) {
      switch (KEYS) {
        case 'page':
          LINK_SPACE.innerHTML +=
            `<a href="${PROJECT.links[KEYS]}" title="Enlace a la página" target="_blank" rel="noopener noreferrer"
              class="btn-general page img-fluid" type="button" aria-label="Enlace para ir a la página desplegada">
            </a>`;
          break;
        case 'itchio':
          LINK_SPACE.innerHTML +=
            `<a href="${PROJECT.links[KEYS]}" title="Enlace a Itch.io" target="_blank" rel="noopener noreferrer"
              class="btn-general itchio img-fluid" type="button" aria-label="Enlace para ir a la página de Itch.io">
            </a>`;
          break;
        case 'github':
          LINK_SPACE.innerHTML +=
            `<a href="${PROJECT.links[KEYS]}" title="Repositorio en GitHub" target="_blank" rel="noopener noreferrer"
              class="btn-general github img-fluid" type="button" aria-label="Enlace para ir al repositorio en GitHub">
            </a>`;
          break;
        case 'gitlab':
          LINK_SPACE.innerHTML +=
            `<a href="${PROJECT.links[KEYS]}" title="Repositorio en GitLab" target="_blank" rel="noopener noreferrer"
              class="btn-general gitlab img-fluid" type="button" aria-label="Enlace para ir al repositorio en GitLab">
            </a>`;
          break;
      }
    }
  }
}

/**
 * Función para vincular los botones de las tecnologías con los
 * proyectos y permitir que puedan interactuar entre ellos.
 */
function linkProyects() {
  const projects = document.querySelectorAll('.project');
  const stackButtons = document.querySelectorAll('#stack .btn-florence');

  stackButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('selected');
      filterProjects();
    });
  });

  /**
   * Para filtrar los proyectos dependiendo de la tecnología
   * seleccionada.
   */
  function filterProjects() {
    let selectedTechs = [...stackButtons]
      .filter(button => button.classList.contains('selected'))
      .map(button => button.dataset.tech);

    projects.forEach(PROJECT => {
      let projectStack = PROJECT.dataset.techs.split(' ');

      const matches = selectedTechs.length === 0 ||
        selectedTechs.some(TECH => projectStack.includes(TECH));

      PROJECT.hidden = !matches;
    });
  }
}

function showPortfolio() {
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('loader').remove();
    }, 600);
    document.getElementById('portfolio').style.display = 'block';
    setTimeout(() => {
      document.getElementById('portfolio').classList.add('fade-in');
    }, 600);
  }, 1600);
}

inyectStack();
inyectProjects();
linkProyects();

showPortfolio();
