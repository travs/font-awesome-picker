{WorkspaceView} = require 'atom'
FontAwesomePicker = require '../lib/font-awesome-picker'

# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.

describe "FontAwesomePicker", ->
  activationPromise = null

  beforeEach ->
    atom.workspaceView = new WorkspaceView
    activationPromise = atom.packages.activatePackage('font-awesome-picker')

  describe "when the font-awesome-picker:toggle event is triggered", ->
    it "attaches and then detaches the view", ->
      expect(atom.workspaceView.find('.font-awesome-picker')).not.toExist()

      # This is an activation event, triggering it will cause the package to be
      # activated.
      atom.commands.dispatch atom.workspaceView.element, 'font-awesome-picker:toggle'

      waitsForPromise ->
        activationPromise

      runs ->
        expect(atom.workspaceView.find('.font-awesome-picker')).toExist()
        atom.commands.dispatch atom.workspaceView.element, 'font-awesome-picker:toggle'
        expect(atom.workspaceView.find('.font-awesome-picker')).not.toExist()
