Blockly.JavaScript['turn_function'] = function(block) {
      var dropdown_turn_degree = block.getFieldValue('turn_degree');
      // TODO: Assemble JavaScript into code variable.
      var code =  'turn(' + dropdown_turn_degree + ');';
      return code;
};

Blockly.JavaScript['repeat_function'] = function(block) {
  var dropdown_repeated_time = block.getFieldValue('repeated_time');
  var statements_function_to_repeat = Blockly.JavaScript.statementToCode(block, 'function_to_repeat');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  for(var i = 0; i < dropdown_repeated_time; i++)
  {
  		code += statements_function_to_repeat;
  }
  return code.trim();
};

Blockly.JavaScript['move_function'] = function(block) {
  var text_number_of_steps = block.getFieldValue('number_of_steps');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move(' + text_number_of_steps + ');';
  return code;
};

Blockly.JavaScript['jump_function'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'jump();';
  return code;
};

Blockly.JavaScript['start_function'] = function(block) {
  // TODO: Assemble JavaScript into code variable.

  var code = '';
  return code;
};