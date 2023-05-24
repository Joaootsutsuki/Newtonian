const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

const ipc = {
    'render': {
        // From render to main.
        'send': ['openExternalUrl', 'appSizes', 'changeContent'],
        // From main to render.
        'receive': ['websitesData', 'changeContentReply'],
        // From render to main and back again.
        'sendReceive': [],
    },
};

contextBridge.exposeInMainWorld('ipcRender', {
    // From render to main.
    send: (channel, args, callback) => {
        let validChannels = ipc.render.send;
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },
    // From main to render.
    receive: (channel, listener) => {
        let validChannels = ipc.render.receive;
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => {
                listener(...args);
            });
        }
    },
    // From render to main and back again.
    invoke: (channel, args) => {
        let validChannels = ipc.render.sendReceive;
        if (validChannels.includes(channel)) {
            return ipcRenderer.invoke(channel, args);
        }
    },
});
