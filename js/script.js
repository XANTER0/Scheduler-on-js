let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let parDiv = document.querySelector('#parent');
// localStorage.clear();

window.addEventListener('DOMContentLoaded', getFromLS);

window.addEventListener('mouseover', pushToLS);

function getFromLS() {};

function pushToLS() {
    let elems = document.getElementsByTagName('span');

    let counter = 1;
    for(let elem of elems) {
        elem.dataset.id = `${counter}`;
        counter++;
    };

    let lsElems = document.querySelectorAll('span[data-id]');

    for(let elem of lsElems) {
        localStorage.setItem(elem.dataset.id, elem.textContent);
    };
};

btn.addEventListener('click', function() {
    let p = document.createElement('p');

    let link_remove = document.createElement('a');
    link_remove.addEventListener('click', function() {
        p.remove();
    })
    link_remove.href = '#';
    link_remove.textContent = 'видалити';

    let link_comp = document.createElement('a');
    link_comp.addEventListener('click', function() {
        p.classList.add('p-comp');
        this.classList.add('display-none');
    })
    link_comp.href = '#';
    link_comp.textContent = 'готово ';

    p.innerHTML = `<span>${input.value}</span>` + ' ';
    p.appendChild(link_comp);
    p.appendChild(link_remove);
    if(input.value !== '') {
        parDiv.appendChild(p);
    }
    input.value = '';
});
