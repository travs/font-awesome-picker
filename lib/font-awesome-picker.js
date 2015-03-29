module.exports = {

  activate: function(){
    atom.commands.add('atom-workspace', "font-awesome-picker:toggle", this.toggle)
  },

  toggle: function(){
    jQuery = require('/Users/travis/programming/font-awesome-picker/dist/js/jquery-1.10.2.min.js');

    var iconpicker = require('/Users/travis/programming/font-awesome-picker/dist/js/fontawesome-iconpicker.min.js');

    var el = document.createElement('div');

    el.innerHTML = '<link href="/Users/travis/programming/font-awesome-picker/dist/css/bootstrap.min.css" rel="stylesheet"><link href="/Users/travis/programming/font-awesome-picker/dist/css/font-awesome.min.css" rel="stylesheet"><link href="/Users/travis/programming/font-awesome-picker/dist/css/fontawesome-iconpicker.min.css" rel="stylesheet"><div class="icp"></div><script src="http://code.jquery.com/jquery-1.10.2.min.js"></script><script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script><script src="/Users/travis/programming/font-awesome-picker/playground/fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js"></script>';

    //append this to the ViewRegistry
    var tb = atom.workspaceView.element.getElementsByClassName('active')[0];
    tb.appendChild(el);


    jQuery('.icp').iconpicker();

    picker = jQuery('.icp');
    picker.data('iconpicker').updatePlacement('status-bar-left');
    picker.data('iconpicker').show();
    picker.on('iconpickerSelected', function(){console.log(picker.data('iconpicker').iconpickerValue);});

    //put in space-pen-div and add to DOM
  }
}
