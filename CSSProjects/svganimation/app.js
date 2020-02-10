const logo = document.querySelectorAll('#logo path');
console.log(logo);

logo.forEach(ele => {
    console.log(ele.getTotalLength())
});