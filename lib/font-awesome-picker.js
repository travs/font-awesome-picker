//Add HTML to workspaceView by doing something like `atom.workspaceView.append('html as a string')`
//Find out how to add bootstrap and modals to the html (probably with <link rel...>)

var $ = jQuery = require('jquery');
var fs = require('fs');
var path = require('path');
require('/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js');
require('/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js');


module.exports = {
  activate: function(){
    testFunc();

    //atom.views.createView(testFunc());
    /*
    var packagePath = atom.packages.getLoadedPackage('font-awesome-picker').path;
    addScript('/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js' );  //fix path
    addScript('/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js');  //fix path

    var ws = atom.workspaceView.getActivePaneView();
    ws.append('<div class="pickerdiv">');
    $('.pickerdiv').load('/Users/travis/github/bootstrap-iconpicker-1.6.0/myhtml.html'); //fix path
    $('.icon-picker').iconpicker({placement: "top"});
    */
  }
}

function getScriptText(path){
  return fs.readFileSync(path, {encoding: 'utf8'});
}

function getTempScript(scriptPath){
  //add comment if works
  var temp = require('temp');
  var tempPath = temp.path();
  var text = getScriptText(scriptPath)
  fs.writeFileSync(tempPath, text);
  return tempPath;
}

function addScript(path){
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = path;
  //$('head').append(s);
}

function testFunc(){
var nud = new Object();
var ws = atom.workspaceView.getActivePaneView();
var $ = jQuery = require('/Users/travis/.atom/packages/font-awesome-picker/scripts/jquery-1.10.2.min.js');

var pickerdiv = $('<div>');
$(pickerdiv).append('<link rel="stylesheet" href="/Users/travis/github/bootstrap-iconpicker-1.6.0/bootstrap-3.2.0/css/bootstrap.min.css"/>')
$(pickerdiv).append('<link rel="stylesheet" href="/Users/travis/github/bootstrap-iconpicker-1.6.0/bootstrap-iconpicker/css/bootstrap-iconpicker.min.css"/>')

var s = document.createElement('script');
s.type = 'text/javascript';
s.src = '/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js';
$(pickerdiv).append(s);
var t = document.createElement('script');
t.type = 'text/javascript';
t.src = '/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js';
$(pickerdiv).append(t);
$(pickerdiv).append('<script type="text/javascript" src="/Users/travis/.atom/packages/font-awesome-picker/scripts/jquery-1.10.2.min.js"></script>');
$(pickerdiv).append('<script type="text/javascript" src="/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap.min.js"></script>');

var ip = $('<button class="btn icon-picker"></button>');
$(pickerdiv).append(ip);


require('/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js');
require('/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js');


$(pickerdiv).find('.icon-picker').iconpicker({placement: "top"});
console.log(ip);
nud.item = pickerdiv;
ws.append(nud.item);
return pickerdiv;

}

//expose scripts in separate module? (i.e. separate file)
//try doing eval() on scripts first?
//learn how to link scripts without using <script> tag

//create jQuery object with contents of HTML for button, then interact with it later via the js api from bs-ip

/*
//gutter is located here
var edViews = atom.workspaceView.getEditorViews();
for(v in edViews){
  v.gutter;
  //find bottom of gutter in each view and append button here
}

var ws = atom.workspaceView.getActivePaneView();
ws.append('<div class="pickerdiv">');
var $ = jQuery = require('jquery');
$('.pickerdiv').load('/Users/travis/github/bootstrap-iconpicker-1.6.0/myhtml.html');
s = document.createElement('script');
s.type = 'text/javascript';
s.src = '/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js';
$('.pickerdiv').append(s);
t = document.createElement('script');
t.type = 'text/javascript';
t.src = '/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js';
$('.pickerdiv').append(t);
$('.pickerdiv').append('<script type="text/javascript" src="/Users/travis/.atom/packages/font-awesome-picker/scripts/jquery-1.10.2.min.js"></script>');
$('.pickerdiv').append('<script type="text/javascript" src="/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap.min.js"></script>');
require('/Users/travis/.atom/packages/font-awesome-picker/scripts/bootstrap-iconpicker.min.js');
require('/Users/travis/.atom/packages/font-awesome-picker/scripts/iconset-glyphicon.min.js');
var allowUnsafeEval = require('/Users/travis/.atom/packages/font-awesome-picker/node_modules/loophole').allowUnsafeEval;

$('.icon-picker').ready(function(){
  $('.icon-picker').iconpicker({placement: "top"});
});


*/
