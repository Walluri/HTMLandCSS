console.log('matter1')

const openmodalBtn = document.getElementById('open-button');
const modalDlg = document.getElementById('modal');
const overlayy = document.querySelector('.overlay');

const closemodalBtn = document.getElementById('close-button');

   openmodalBtn.addEventListener('click',()=>{
    modalDlg.classList.add('active');
    overlayy.classList.add('active');
   })

   closemodalBtn.addEventListener('click',()=>{
    modalDlg.classList.remove('active');
    overlayy.classList.remove('active');

   })

   overlayy.addEventListener('click',()=>{
    modalDlg.classList.remove('active');
    overlayy.classList.remove('active');
   })

console.log('matter2')