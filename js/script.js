const btnOpen = document.querySelector('#btnOpen');
const modal = document.querySelector('#modal');
const modalOpn = () => {
  modal.classList.remove('off');
};

btnOpen.addEventListener('click', modalOpn);
