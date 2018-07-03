goog.provide('Blockly.Blocks.custom');

goog.require('Blockly.Blocks');

Blockly.Blocks['jump_function'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Jump");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
      }
    };  

Blockly.Blocks['repeat_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repeat")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"]]), "repeated_time")
        .appendField("");
    this.appendStatementInput("function_to_repeat")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
  }
};

Blockly.Blocks['turn_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["90°", "90"], ["180°", "180"], ["270°", "270"], ["360°", "360"], ["-90°", "-90"], ["-180°", "-180"], ["-270°", "-270"], ["-360°", "-360"]]), "turn_degree");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
  }
};

Blockly.Blocks['move_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldTextInput("1"), "number_of_steps");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(350);
    this.setTooltip('');
  }
};

Blockly.Blocks['start_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When execute");
    this.appendStatementInput("do_statement")
        .setCheck(null)
        .appendField("Do");
    this.setInputsInline(true);
    this.setNextStatement(null, null);
    this.setColour(330);
    this.setTooltip('');
  }
};