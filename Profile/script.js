window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

var dynamicData = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
console.log(dynamicData)  
document.documentElement.setAttribute('data-theme', dynamicData)