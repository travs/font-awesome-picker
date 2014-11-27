//Add HTML to workspaceView by doing something like `atom.workspaceView.append('html as a string')`
//Find out how to add bootstrap and modals to the html (probably with <link rel...>)

var $ = require('jquery');

//create jQuery object with contents of HTML for button, then interact with it later via the js api from bs-ip
var o = {item: $('<span><button class="but btn-default btn"></button></span>')};

//gutter is located here
var edViews = atom.workspaceView.getEditorViews();
for(v in edViews){
  v.gutter;
  //find bottom of gutter in each view and append button here
}
