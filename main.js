const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const ejse = require('ejs-electron');
const fs = require('fs');

const pathLayout = path.join(__dirname, 'views/layout.ejs');
const pathPreload = path.join(__dirname, '/public/scripts/preload.js');

let win;
async function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        frame: false,
        icon: path.join(__dirname, 'public/images/logotipo.png'),
        webPreferences: {
            preload: pathPreload,
        },
    });

    win.setAspectRatio(1.77);

    await win.loadFile(pathLayout);

    win.webContents.send('websitesData', websitesData);
}

const elementsContent = {
    graphic: fs.readFileSync('views/content-graphic.ejs', 'utf-8'),
    equation: fs.readFileSync('views/content-equation.ejs', 'utf-8'),
    about: fs.readFileSync('views/content-about.ejs', 'utf-8'),
    navbar: fs.readFileSync('views/partials/navbar.ejs', 'utf-8'),
    taskbar: fs.readFileSync('views/partials/taskbar.ejs', 'utf-8'),
};

let currentContent = elementsContent.graphic;
ipcMain.on('changeContent', (event, id) => {
    const content = elementsContent[id];
    if (content && content !== currentContent) {
        currentContent = content;
        ejse.data('content', content);
        win.webContents.reload();

        win.webContents.once('did-finish-load', () => {
            win.webContents.send('websitesData', websitesData);
            event.reply('changeContentReply', id);
        });
    }
});

app.whenReady().then(() => {
    ejse.data('navbar', elementsContent.navbar);
    ejse.data('taskbar', elementsContent.taskbar);
    ejse.data('content', currentContent);
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

const websitesData = {
    facebook: {
        url: 'https://www.facebook.com/Joao.Cz.111',
        selector: '.bxl-facebook-circle',
    },
    instagram: {
        url: 'https://www.instagram.com/joao_vitosoaski/',
        selector: '.bxl-instagram',
    },
    twitter: {
        url: 'https://twitter.com/JoaoVitosoaski',
        selector: '.bxl-twitter',
    },
    linkedin: {
        url: 'https://www.linkedin.com/in/joao-vitor-vitosoaski-359750185/',
        selector: '.bxl-linkedin-square',
    },
    github: {
        url: 'https://github.com/Joaootsutsuki',
        selector: '.bxl-github',
    },
};

ipcMain.on('openExternalUrl', (event, key) => {
    shell.openExternal(websitesData[key].url);
});

ipcMain.on('appSizes', (e, taskBarButton) => {
    if (taskBarButton === 'closeApp') {
        win.close();
    } else if (taskBarButton === 'maximizeRestoreApp') {
        win.isMaximized() ? win.restore() : win.maximize();
    } else if (taskBarButton === 'minimizeApp') {
        win.minimize();
    } else return;
});
