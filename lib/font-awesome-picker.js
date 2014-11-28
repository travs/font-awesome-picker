//Add HTML to workspaceView by doing something like `atom.workspaceView.append('html as a string')`
//Find out how to add bootstrap and modals to the html (probably with <link rel...>)

var $ = jQuery = require('jquery');
require('/Users/travis/github/bootstrap-iconpicker-1.6.0/bootstrap-iconpicker/js/bootstrap-iconpicker.min.js')

module.exports = {
  activate: function(){
    addScript('/Users/travis/github/bootstrap-iconpicker-1.6.0/bootstrap-iconpicker/js/bootstrap-iconpicker.min.js');       //fix path
    addScript('/Users/travis/github/bootstrap-iconpicker-1.6.0/bootstrap-iconpicker/js/iconset/iconset-glyphicon.min.js');  //fix path

    var ws = atom.workspaceView.getActivePaneView();
    ws.append('<div class="pickerdiv">');
    $('.pickerdiv').load('/Users/travis/github/bootstrap-iconpicker-1.6.0/myhtml.html') //fix path
    $('.icon-picker').iconpicker({placement: "top"});

    function addScript(path){
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = path;
      $("head").append(s);
    }
  }
}

//create jQuery object with contents of HTML for button, then interact with it later via the js api from bs-ip

/*
//gutter is located here
var edViews = atom.workspaceView.getEditorViews();
for(v in edViews){
  v.gutter;
  //find bottom of gutter in each view and append button here
}
*/
