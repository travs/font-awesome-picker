module.exports = {

  activate: function(){
    jQuery = require('/Users/travis/programming/font-awesome-picker/dist/js/jquery-1.10.2.min.js');
    var iconpicker = require('/Users/travis/programming/font-awesome-picker/dist/js/fontawesome-iconpicker.min.js');

    //TODO: create custom html5 element instead of div?
    var element = document.createElement('div');

    //set up css and scripts for iconpicker
    element.innerHTML = '<link href="/Users/travis/programming/font-awesome-picker/dist/css/bootstrap.min.css" rel="stylesheet"><link href="/Users/travis/programming/font-awesome-picker/dist/css/font-awesome.min.css" rel="stylesheet"><link href="/Users/travis/programming/font-awesome-picker/dist/css/fontawesome-iconpicker.min.css" rel="stylesheet"><div class="icp"></div><script src="http://code.jquery.com/jquery-1.10.2.min.js"></script><script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script><script src="/Users/travis/programming/font-awesome-picker/playground/fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js"></script>';

    //place this setup on topbar
    //TODO: append this to the ViewRegistry?
    var tb = atom.workspaceView.element.getElementsByClassName('active')[0];
    tb.appendChild(element);

    var pContainer = jQuery('.icp');            //get iconpicker container in a variable

    pContainer.iconpicker();                //initialize iconpicker

    var p = jQuery('.icp').data('iconpicker');    //get iconpicker instance in a variable

    p.updatePlacement('top-bar-left');
    pContainer.on('iconpickerSelected', function(){console.log(p.iconpickerValue);});

    //add iconpicker command to Atom
    atom.commands.add('atom-workspace', "font-awesome-picker:toggle", this.toggle);
  },

  toggle: function(){
    var p = jQuery('.icp').data('iconpicker');    //get iconpicker instance in a variable
    p.toggle();
  }
  //TODO: to put iconpicker anywhere in buffer, should it be put in space-pen-div and then add to DOM?
}
