const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {

    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active')


    const contents = document.querySelectorAll('.content');

    // Remove a classe 'show' de todos os conteúdos
    contents.forEach(content => content.classList.remove('show'));

    // Obter o ID do conteúdo a ser exibido a partir do atributo 'content-id' da aba clicada
    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    // Adicionar a classe 'show' ao conteúdo correspondente
    if (content) {
        content.classList.add('show');
    } else {
        console.error(`Elemento com ID '${contentId}' não encontrado.`);
    }
};

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);
