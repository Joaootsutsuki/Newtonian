function addGlobalEventListener(type, selector, callback, options) {
    document.addEventListener(
        type,
        (e) => {
            if (e.target.matches(selector)) callback(e);
        },
        options
    );
}

addGlobalEventListener('click', '.toggle', () => {
    const mainApp = document.querySelector('#mainApp');
    mainApp.classList.toggle('sidebar-close');
});

addGlobalEventListener('click', '.switch', () => {
    const body = document.querySelector('body');
    const modeText = document.querySelector('.mode-text');
    if (body.classList.contains('white')) {
        modeText.innerText = 'Light mode';
        body.classList.remove('white');
    } else {
        modeText.innerText = 'Dark mode';
        body.classList.add('white');
    }
});

//Navbar addEventListener
addGlobalEventListener('click', '#graphic', () => {
    ipcRender.send('changeContent', 'graphic');
});

addGlobalEventListener('click', '#equation', () => {
    ipcRender.send('changeContent', 'equation');
});

addGlobalEventListener('click', '#about', () => {
    ipcRender.send('changeContent', 'about');
});

ipcRender.receive('changeContentReply', (id) => {
    if (id === 'graphic') {
        document.querySelector('#graphic').checked = true;
    } else if (id === 'equation') {
        document.querySelector('#equation').checked = true;
    } else if (id === 'about') {
        document.querySelector('#about').checked = true;
    } else return;
});

//TaskBar
addGlobalEventListener('click', '#minBtn, #minimize', () => {
    ipcRender.send('appSizes', 'minimizeApp');
});
addGlobalEventListener('click', '#maxBtn, #maximize', () => {
    ipcRender.send('appSizes', 'maximizeRestoreApp');
});
addGlobalEventListener('click', '#closeBtn, #close', () => {
    ipcRender.send('appSizes', 'closeApp');
});

//About Page
ipcRender.receive('websitesData', (data) => {
    for (const key in data) {
        addGlobalEventListener('click', data[key].selector, () => {
            ipcRender.send('openExternalUrl', key);
        });
    }
});
