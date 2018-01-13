# Inlet
Inlet is a "plugin" for CodeMirror2+ which pops up an inline color picker and numeric slider whenever you click on a number, a Hex String (ex. "`#0004ff`"), RGB String (ex. "`rgb(0, 4, 255)`"), or HSL String (ex. "`hsla(239, 100%, 50%, 1)`").

See an example at [http://michaelsboost.github.com/Inlet](http://michaelsboost.github.com/Inlet)

# About

This project is inspired by Bret Victor's talk ["Inventing on Principle"](https://vimeo.com/36579366)  

The the slider code is originally adapted from Gabriel Florit's [Water project](http://gabrielflor.it/water) the predecesor for [Livecoding.io](http://livecoding.io)

The [JQuery MiniColors](http://labs.abeautifulsite.net/jquery-minicolors/) is used to provide the color picker and [TinyColor](https://bgrins.github.io/TinyColor/) translates between color spaces.

# License

[MIT](https://github.com/michaelsboost/Inlet/blob/gh-pages/LICENSE)

# Usage

- [JQuery](http://jquery.com/)
- [CodeMirror](http://codemirror.net/) ( >= 3.1 )
- [Inlet.js](https://github.com/michaelsboost/Inlet/blob/gh-pages/inlet.js)
- [Inlet.css](https://github.com/michaelsboost/Inlet/blob/gh-pages/inlet.css)
- lib/jqueryminicolors.css

Check out [index.html](https://github.com/michaelsboost/Inlet/blob/gh-pages/index.html) to see how to put things together

The key bit of javascript code to kick things off is:  

    var editor = CodeMirror('#editor', ...)
    Inlet(editor)

Enjoy!
