console.log("its working");
let theme = localStorage.getItem('theme')
if(theme==null){
  setTheme('light')
}else{
  setTheme(theme)
}

let themDots = document.getElementsByClassName('Theme-dot')

for (var i=0;themDots.length >i; i++){
  themDots[i].addEventListener('click',function () {
    let mode = this.dataset.mode
    setTheme(mode)
  })
}
function setTheme(mode){
  if(mode=='light'){
    document.getElementById('theme-style').href='main.css';
  }
  if(mode=='blue'){
    document.getElementById('theme-style').href='blue.css';
  }
  if(mode=='green'){
    document.getElementById('theme-style').href='Green.css';
  }
  if(mode=='purple'){
    document.getElementById('theme-style').href='Purple.css';
  }
  localStorage.setItem('theme',mode)
}

