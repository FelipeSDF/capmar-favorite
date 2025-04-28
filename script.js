let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let container = document.querySelector('#container-project');
let list = document.querySelector('#container-project .list');
let thumb = document.querySelector('#container-project .thumb');

const navLinks = document.querySelectorAll('#nav-bar a');  // Seleciona todos os links dentro de #nav-bar



// document.addEventListener("DOMContentLoaded", function () {
//     const apiUrl = 'https://felipesodre.com.br/api/v1/project';
  
//     // Função para obter os projetos
//     function getProjects() {
//       fetch(apiUrl)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Erro ao obter os projetos');
//           }
//           return response.json();
//         })
//         .then(projects => {
//           displayProjects(projects);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
  
//     // Função para exibir os projetos no HTML
//     function displayProjects(projects) {
//       const listContainer = document.querySelector('#container-project .list');
//       const thumbContainer = document.querySelector('#container-project .thumb');
  
//       // Limpar o conteúdo anterior
//       listContainer.innerHTML = '';
//       thumbContainer.innerHTML = '';
  
//       // Criar um item para cada projeto e adicionar ao container
//       projects.forEach(project => {
//         // Criar item de lista
//         const projectItem = document.createElement('div');
//         projectItem.classList.add('list-item');
        
//         projectItem.innerHTML = `
//           <img src="${project.template}" alt="${project.name}" />
//           <div class="content">
//             <h2 class="title">${project.name}</h2>
//             <p class="description-project">${project.description}</p>
//             <button class="btn">Saiba Mais</button>                                  *Mudança bnt >/ bnt-learn-more              | Andrey
//           </div>
//         `;
  
//         // Criar item de thumbnail
//         const thumbItem = document.createElement('div');
//         thumbItem.classList.add('thumb-item');
  
//         thumbItem.innerHTML = `
//           <img src="${project.template}" alt="${project.name}" />
//           <h3>${project.name}</h3>
//         `;
  
//         // Adicionar os itens nos respectivos containers
//         listContainer.appendChild(projectItem);
//         thumbContainer.appendChild(thumbItem);
//       });
//     }
  
//     // Chama a função para obter os projetos
//     getProjects();
//   });
  


btnNext.onclick = () => moveItemsOnClick('next');
btnBack.onclick = () => moveItemsOnClick('back');

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list-item');
    let thumbItems = document.querySelectorAll('.thumb-item');

    if (type === 'next') {
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next');
    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('back');
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 1000);
}

let autoPlayInterval;


function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveItemsOnClick('next');
    }, 4000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Inicia o autoplay assim que carregar
startAutoPlay();

container.addEventListener('mouseenter', stopAutoPlay);

container.addEventListener('mouseleave', startAutoPlay);


function toggleMenu() {
    const navBar = document.getElementById('nav-bar')
    navBar.classList.toggle('active')
}


navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navBar = document.getElementById('nav-bar');
      navBar.classList.remove('active');
    });
  });