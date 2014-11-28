//Add HTML to workspaceView by doing something like `atom.workspaceView.append('html as a string')`
//Find out how to add bootstrap and modals to the html (probably with <link rel...>)

var $ = jQuery = require('jquery');
var path = require('path');
require( '/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js');
require('/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js');
require('/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js');


module.exports = {
  activate: function(){

    console.log(document);

    var packagePath = atom.packages.getLoadedPackage('font-awesome-picker').path;
    addScript('/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js' );  //fix path
    addScript( path.join(packagePath, 'font-awesome-picker/scripts/iconset-glyphicon.min.js') );  //fix path

    var ws = atom.workspaceView.getActivePaneView();
    ws.append('<div class="pickerdiv">');
    $('.pickerdiv').load('/Users/travis/github/bootstrap-iconpicker-1.6.0/myhtml.html'); //fix path
    $('.icon-picker').iconpicker({placement: "top"});
  }
}

function addScript(path){
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = path;
  var s = '<script type="text/javascript" src="/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js"></script>';
  atom.workspaceView.getActivePaneView().append(s);
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
