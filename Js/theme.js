const cssTheme = `
  :root {
    --content-background-color: #282a36 !important; 
    --rcx-message-divider-color: #dcdcdc;
    --message-box-color: #c1c1c1;
    --rcx-color-font-hint: #a0a0a0;
    --message-box-container-border-color: #a0a0a0;
    --rcx-color-stroke-light: #a0a0a0;
    --rcx-button-icon-background-color: #F5EDF0;
    --rcx-color-font-default: #c1c1c1;
    --rcx-divider-color: #a0a0a0;
    --rcx-message-generic-preview-content-background-color: #2b2b2b;
  }
  
  /* Cor do nome das pessoas nas msg e "esta digitando..." */
  .rcx-message-header__name, .rc-message-box__activity-user, .rcx-css-16xfwx7 {
    color: #c1c1c1 !important;
  }
  
  /* Cor do texto das msg */
  .rcx-message-body {
    color: #aaa;
  }
  
  /* hover e focus nas msg */
  .rcx-message:focus, .rcx-message:hover {
      background: #44475a;
  }

  /* Divider */
  .rcx-message-divider__bar:after {
    background: #616161;
  }
  
  /* Estrelinha */
  .rcx-css-1yimpo4 > .rcx-box--full.rcx-button--mini-square {
    background-color: #282a36 !important;
  }
  
  .emoji-picker {
    background: #282a36;
  }
  
  .reply-preview {
    background-color: #282a36 !important;
  }

  /* Reply da msg */
  .rc-old blockquote {
    background-color: #282a36 !important;
    border-color: #c1c1c1 !important;
  }
  
  .rcx-message--editing {
    background: #282a36 !important;
    border: 2px solid rgb(196, 196, 0);
  }
  
  .rc-old .code-colors {
    background-color: #282a36;
  }
  
  .editing {
    background: #282a36 !important;
    border: 2px solid rgb(196, 196, 0);
  }
  .rc-message-box {
    background: #282a36;
  }
  .rc-old .messages-container .wrapper {
    background: #282a36;
  }
  
  /* toolbox de opcoes das msgs */
  .rcx-box--full.rcx-message-toolbox {
    background-color: transparent !important;
    border: none !important;
  }
  
  .color-primary-font-color {
    color: #f3f3f3;
  }
  
  /* Cor de fundo do bloco de codigo */
  .code-colors {
  	background: #EBEBEB !important;
  }
  
  /* Hover da pesquisa */
  .message.active, .message:hover {
    background-color: #44475a;
  }

  /* Hover dos videos */
  .rcx-css-18t0quo:hover {
    cursor: pointer;
    background-color: #44475a;
  }

  /* Caixa de msg bloqueada */
  .rcx-box.rcx-box--full.rcx-css-1k84vxd {
    background-color: #282a36 !important;
  }

  /* Play Dots GAME */
  .container-dotGame {
  	width: 70vw;
  	height: 70vh;
  	position: absolute;
  	top: 0;
  	right: 4vw;
    bottom: 0;
    margin: auto;
  	border: 4px solid #44475a;
    background-color: #282a36;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #container-gameConfig {
    display: flex;
    justify-content: space-evenly;
  }

  #btnStartGame {
    width: 20vw;
  }

  #container-gameTable {
    border: 2px solid #6272a4;
    border-radius: 10px;
    width: 70vw;
    height: 60vh;
    margin: 0 auto;
    margin-top: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #container-enterPlay {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
  }

  .square {
    border: 1px solid #44475a;
    width: 3vw;
    height: 3vw;
    position: relative;
    color: #44475a;
    text-align: center;
    line-height: 5.4vh;
  }

  .cornerDot {
    position: absolute;
    background-color: #ff79c6;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .topLeft {
    left: -4px;
    top: -4px;
  }

  .topRight {
    right: -4px;
    top: -4px;
  }

  .bottomLeft {
    bottom: -4px;
    left: -4px ;
  }

  .bottomRight {
    right: -4px;
    bottom: -4px;
  }

  #iptEnterPlay {
    margin-right: 2vw;
  }


  /* toolTip container */
  .toolTip::after {
    content: attr(data-toolTip);
    position: absolute;
    border-radius: 5px;
    width: 2.7vw;
    height: 1.7vh;
    bottom: 10px;
    left: -20px;
    color: #ff79c6;
    white-space: nowrap;
    font-size: .8rem;
    line-height: 1.8vh;
    opacity: 0;
    z-index: 10;
    transition: .4s opacity ease;
  }

  .square:hover > .cornerDot::after {
    opacity: 1;
  }
`
const styleSheet = document.createElement("style")
styleSheet.classList.add("rocketTheme")
styleSheet.innerText = cssTheme
document.head.appendChild(styleSheet)

// Criando o icone para ligar, desligar o tema
const containerIcons = document.querySelector(".rcx-css-vi4iz8")
const themeIcon = document.createElement("div")
themeIcon.classList.add("rcx-box")
themeIcon.classList.add("rcx-box--full")
themeIcon.style.width = "40px"
themeIcon.style.height = "20px"
themeIcon.style.cursor = "pointer"
themeIcon.style.marginRight = "1vw"
themeIcon.style.marginBottom = "3vh"

const dotGameIcon = document.createElement("div")
dotGameIcon.classList.add("rcx-box")
dotGameIcon.classList.add("rcx-box--full")
dotGameIcon.style.width = "40px"
dotGameIcon.style.height = "20px"
dotGameIcon.style.cursor = "pointer"
dotGameIcon.style.marginLeft = "1vw"

dotGameIcon.innerHTML = '<span class="rcx-message__emoji emojione emojione-activity _1f3d0 :volleyball:">????</span>'
themeIcon.innerHTML = '<span class="rcx-message__emoji emojione emojione-nature _1f400 rcx-message__emoji--big :rat:">????</span>'

let onOff = true;
themeIcon.addEventListener("click", () => {
  if(onOff) {
    styleSheet.remove()
    themeIcon.innerHTML = '<span class="rcx-message__emoji emojione emojione-people _1f631 rcx-message__emoji--big :scream:">????</span>'
    onOff = !onOff
  } else {
    document.head.appendChild(styleSheet)
    themeIcon.innerHTML = '<span class="rcx-message__emoji emojione emojione-nature _1f400 rcx-message__emoji--big :rat:">????</span>'
    onOff = !onOff
  }
})
containerIcons.prepend(themeIcon)
containerIcons.prepend(dotGameIcon)