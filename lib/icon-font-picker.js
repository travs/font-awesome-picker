module.exports = {

  activate: function(){
    var path = getPackagePath();
    jQuery = require(path + '/dist/js/jquery-1.10.2.min.js');
    var iconpicker = require(path + '/dist/js/fontawesome-iconpicker.min.js');

    //TODO: create custom html5 element instead of div?
    var element = document.createElement('div');

    //set up css and scripts for iconpicker
    element.innerHTML = '<link href="' + path + '/dist/css/font-awesome.css" rel="stylesheet"><link href="' + path + '/dist/css/fontawesome-iconpicker.css" rel="stylesheet"><div class="icp"></div><script src="http://code.jquery.com/jquery-1.10.2.min.js"></script></script><script src="' + path + '/dist/js/fontawesome-iconpicker.js"></script>';
    //<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js">
    element.style.position = 'absolute';
    element.style.display = 'block';
    element.style.height = 'intrinsic';
    element.style.width = 'intrinsic';
    element.style.right = '214px';      //jQuery('.iconpicker-popover').width() + 'px';  //keep it in frame
    element.style.top = '32px';         //jQuery('.tab-bar').height() + 'px';            //bring the popover below the tab-bar

    //append this to the ViewRegistry?
    var vert = atom.workspaceView.element.getElementsByClassName('vertical')[0];
    vert.appendChild(element);

    var pContainer = jQuery('.icp');            //get iconpicker container in a variable

    pContainer.iconpicker();                //initialize iconpicker

    var picker = jQuery('.icp').data('iconpicker');    //get iconpicker instance in a variable
    picker.updatePlacement('auto');


    var popover = picker.popover[0];      //get popover in a variable

    pContainer.on('iconpickerSelected', function(){insertText(picker.iconpickerValue)});

    //add iconpicker command to Atom
    atom.commands.add('atom-workspace', "icon-font-picker:toggle", this.toggle);
  },

  toggle: function(){
    var p = jQuery('.icp').data('iconpicker');    //get iconpicker instance in a variable
    p.toggle();
  }
  //TODO: to put iconpicker anywhere in buffer, should it be put in space-pen-div and then added to DOM?
}

function insertText(value){
  var editor = atom.workspace.activePaneItem;
  var selection = editor.getSelection();

  var tagString = '<i class="fa ' + value + '"></i>'
  selection.insertText(tagString);
}

function getPackagePath(){
  return atom.packages.getLoadedPackage('icon-font-picker').path;
}

function move(element, x, y){
  //move the top-left corner of element to (x,y)
  element.style.top = y + 'px';
  element.style.left = x + 'px';
}
