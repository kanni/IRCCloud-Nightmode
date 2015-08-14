# IRCCloud-Nightmode

## Installation

Add this userscript:

```
function loadcss(url) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    return document.getElementsByTagName('head')[0].appendChild(link);
}

function loadjs(url){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    return document.getElementsByTagName('head')[0].appendChild(script);
}

loadcss('https://cdn.rawgit.com/kanni/IRCCloud-Nightmode/master/userstyle.css');
loadjs('https://cdn.rawgit.com/kanni/IRCCloud-Nightmode/master/userscript.js');
```
