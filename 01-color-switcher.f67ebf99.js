!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");t.addEventListener("click",(function(){var o=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),d=!0,console.log("I am ON"),d&&(t.disabled=!0,a.disabled=!1),a.addEventListener("click",(function(){clearInterval(o),d=!1,t.disabled=!1,a.disabled=!0}))}),1e3)}));var d=!1;a.disabled=!0}();
//# sourceMappingURL=01-color-switcher.f67ebf99.js.map