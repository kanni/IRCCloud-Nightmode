# IRCCloud-Nightmode

## Installation

Add this userscript:

```
function loadcss(url) {
    var head = document.getElementsByTagName('head')[0],
    link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
    return link;
}

function loadjs(url){
    var script = document.createElement("script")
    script.type = "text/javascript";
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadcss('https://rawgit.com/kanni/IRCCloud-Nightmode/master/userstyle.css');
loadjs('https://rawgit.com/kanni/IRCCloud-Nightmode/master/userscript.js');
```
