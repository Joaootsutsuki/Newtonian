export default function createElements() {
    class MyDefaultLayout extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <div class="taskBar">
                        <div class="titleBar">
                            <img src="imgs/logotipo.svg" alt="Logotipo" />
                            <span class="title">Newtonian</span>
                        </div>
                        <div class="btnsBar">
                            <div id="minBtn" class="buttonBar">
                                <img src="imgs/minimize.png" alt="minimize" />
                            </div>
                            <div id="maxBtn" class="buttonBar">
                                <img src="imgs/maximize.png" alt="maximize" />
                            </div>
                            <div id="closeBtn" class="closeWindow buttonBar">
                                <img src="imgs/close.png" alt="close" />
                            </div>
                        </div>
                    </div>
                    <div class="sidebar close">
                        <i class="bx bx-chevron-right toggle" id="toggle"></i>
                        <div class="menu-bar">
                            <div class="menu">
                                <li class="nav-link">
                                    <input
                                        type="radio"
                                        name="sideBar-radio"
                                        id="graficos"
                                        class="sideBar-radio"
                                    />
                                    <label for="graficos" class="label-sideBar label-graficos">
                                        <i class="bx bx-line-chart icon"></i>
                                        <span class="text nav-text">Gráficos</span>
                                    </label>
                                </li>
        
                                <ul class="menu-links">
                                    <li class="nav-link">
                                        <input
                                            type="radio"
                                            name="sideBar-radio"
                                            id="equacoes"
                                            class="sideBar-radio"
                                        />
                                        <label for="equacoes" class="label-sideBar label-equacoes">
                                            <i class="bx bx-math icon"></i>
                                            <span class="text nav-text">Equações</span>
                                        </label>
                                    </li>
        
                                    <li class="nav-link">
                                        <input
                                            type="radio"
                                            name="sideBar-radio"
                                            id="sobre"
                                            class="sideBar-radio"
                                        />
                                        <label for="sobre" class="label-sideBar label-sobre">
                                            <i class="bx bx-info-circle icon"></i>
                                            <span class="text nav-text">Sobre</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
        
                            <div class="bottom-content">
                                <li class="mode">
                                    <div class="sun-moon">
                                        <i class="bx bx-sun icon sun"></i>
                                        <i class="bx bx-moon icon moon"></i>
                                    </div>
                                    <span class="mode-text text">Light mode</span>
        
                                    <div class="toggle-switch">
                                        <span class="switch"></span>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                `;
        }
    }

    customElements.define('my-template', MyDefaultLayout);
}
