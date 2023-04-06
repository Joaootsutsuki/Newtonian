const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain;

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        frame: false,
        icon: 'imgs/logotipo.png',
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, './preload.js'),
        },
    });

    app.allowRendererProcessReuse = true;
    win.loadFile('index.html');

    // CLOSE APP
    ipc.on('closeApp', function (event) {
        win.close();
    });

    // MINIMIZE APP
    ipc.on('minimizeApp', function (event) {
        win.minimize();
    });

    // MAXIZIME AND RESTORE APP
    ipc.on('maximizeRestoreApp', function (event) {
        if (win.isMaximized()) {
            win.restore();
        } else {
            win.maximize();
        }
    });
}
app.on('ready', createWindow);
