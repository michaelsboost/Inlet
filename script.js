var editor = CodeMirror.fromTextArea(document.querySelector("[data-editor=editor]"), {
  mode:  "javascript",
  theme: "monokai",
  lineNumbers: true,
  lineWrapping: true,
  autoCloseTags: true
})
Inlet(editor)

function changeFunction() {
  eval(editor.getValue())
  document.body.style['background-color'] = color
  // .cm-s-monokai .CodeMirror, .CodeMirror-gutters
  document.querySelector(".cm-s-monokai").style['background-color'] = color
  document.querySelector(".CodeMirror-gutters").style['background-color'] = color
};
changeFunction()
editor.on("change", changeFunction)

// Notifications
alertify.message('Created by <a href="http://twitter.com/enjalot">@enjalot</a>, <a href="http://twitter.com/mrejfox">@mrejfox</a> and <a href="http://github.com/georules">@georules</a>')
setTimeout(function() {
  alertify.message('Forked by <a href="http://twitter.com/mikethedj4">@mikethedj4</a>');
}, 1500)