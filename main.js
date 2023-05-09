const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ejse = require('ejs-electron');
const fs = require('fs');

const navbar = fs.readFileSync('views/partials/navbar.ejs', 'utf-8');
const menubar = fs.readFileSync('views/partials/menubar.ejs', 'utf-8');
const content = fs.readFileSync('views/content-graficos.ejs', 'utf-8');

//File paths
const pathLayout = path.join(__dirname, 'views/layout.ejs');
const pathPreload = path.join(__dirname, '/public/scripts/preload.js');

ejse.data('navbar', navbar);
ejse.data('menubar', menubar);
ejse.data('content', content);

var win;
async function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        frame: false,
        icon: path.join(__dirname, 'public/images/logotipo.png'),
        webPreferences: {
            nodeIntegration: true,
            preload: pathPreload,
        },
    });
    win.setAspectRatio(1.6);
    await win.loadFile(pathLayout);
}

app.whenReady().then(createWindow);
/*
ipcMain.on('closeApp', function (event) {
    win.close();
});

ipcMain.on('minimizeApp', function (event) {
    win.minimize();
});

ipcMain.on('maximizeRestoreApp', function (event) {
    if (win.isMaximized()) {
        win.restore();
    } else {
        win.maximize();
    }
});
*/
