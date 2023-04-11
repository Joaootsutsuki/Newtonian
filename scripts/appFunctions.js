import createElements from './defaultElements.js';
/*const electron = require('electron');
const shell = electron.shell;
const ipc = electron.ipcRenderer;
*/
window.addEventListener('load', createElements());
const minimizeBtn = document.querySelector('#minBtn');
const maximizeBtn = document.querySelector('#maxBtn');
const closeBtn = document.querySelector('#closeBtn');
const sidebar = document.querySelector('.sidebar');
const mainApp = document.querySelector('#mainApp');
const toggle = document.querySelector('#toggle');
const modeSwitch = document.querySelector('.toggle-switch');
const body = document.querySelector('body');
const modeText = document.querySelector('.mode-text');
const graficos = document.querySelector('#graficos');
const equacoes = document.querySelector('#equacoes');
const sobre = document.querySelector('#sobre');
const instagram = document.querySelector('.bxl-instagram');
const facebook = document.querySelector('.bxl-facebook-circle');
const twitter = document.querySelector('.bxl-twitter');
const linkedin = document.querySelector('.bxl-linkedin-square');
const github = document.querySelector('.bxl-github');

closeBtn.addEventListener('click', function () {
    ipc.send('closeApp');
});

minimizeBtn.addEventListener('click', function () {
    ipc.send('minimizeApp');
});

maximizeBtn.addEventListener('click', function () {
    ipc.send('maximizeRestoreApp');
});

window.addEventListener('load', () => {
    const pathname = window.location.pathname;
    body.classList[localStorage.getItem('white')]('white');
    sidebar.classList[localStorage.getItem('close')]('close');
    mainApp.classList[localStorage.getItem('close')]('close');
    graficos.checked = true;
    if (pathname == '/equations.html') {
        equacoes.checked = true;
    } else if (pathname == '/about.html') {
        sobre.checked = true;
    }
});

toggle.addEventListener('click', () => {
    if (sidebar.classList.contains('close') && mainApp.classList.contains('close')) {
        localStorage.setItem('close', 'remove');
        sidebar.classList[localStorage.getItem('close')]('close');
        mainApp.classList[localStorage.getItem('close')]('close');
    } else {
        localStorage.setItem('close', 'add');
        sidebar.classList[localStorage.getItem('close')]('close');
        mainApp.classList[localStorage.getItem('close')]('close');
    }
});

modeSwitch.addEventListener('click', () => {
    if (body.classList.contains('white')) {
        modeText.innerText = 'Light mode';
        localStorage.setItem('white', 'remove');
        body.classList[localStorage.getItem('white')]('white');
    } else {
        modeText.innerText = 'Dark mode';
        localStorage.setItem('white', 'add');
        body.classList[localStorage.getItem('white')]('white');
    }
});

graficos.addEventListener('click', () => {
    window.location.pathname = '../index.html';
});
equacoes.addEventListener('click', () => {
    window.location.pathname = '../equations.html';
});
sobre.addEventListener('click', () => {
    window.location.pathname = '../about.html';
});
/*
instagram.addEventListener('click', () => {
    shell.openExternal('https://www.instagram.com/joao_vitosoaski/');
});
facebook.addEventListener('click', () => {
    shell.openExternal('https://www.facebook.com/Joao.Cz.111');
});
linkedin.addEventListener('click', () => {
    shell.openExternal('https://www.linkedin.com/in/joao-vitor-vitosoaski-359750185/');
});
github.addEventListener('click', () => {
    shell.openExternal('https://github.com/Joaootsutsuki');
});*/
