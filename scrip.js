let CNG = document.querySelector('.cng');
let Title = document.querySelector('.title');
let namefield = document.querySelector('.namefield');
let Dis = document.querySelector('.dis'); // Added period before class 'dis'
let SIB = document.querySelector('.sin');
let SUB = document.querySelector('.sup');

SIB.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    Title.innerHTML = "Login";
    Dis.style.maxHeight = '0';
    CNG.innerHTML = "Don't have an account?";
    SUB.classList.add('dissable')
    SIB.classList.remove('dissable')

});

SUB.addEventListener('click', () => {
    namefield.style.maxHeight = '60px';
    Title.innerHTML = "Register";
    Dis.style.maxHeight = '60px';
    CNG.innerHTML = "Have an account?";
    SUB.classList.remove('dissable')
    SIB.classList.add('dissable')
});
