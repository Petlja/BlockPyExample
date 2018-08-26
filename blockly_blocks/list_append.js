Blockly.Msg["LISTS_APPEND"] = "append item";
Blockly.Msg["LISTS_APPEND_HELPURL"] = "http://google.com";
Blockly.Msg["LISTS_APPEND_TO"] = "to list";
Blockly.Msg["LISTS_APPEND_TOOLTIP"] = "Append an element to a list";


Blockly.Blocks['lists_append'] = {
    // Set element at index.
    init: function() {
      this.setHelpUrl(Blockly.Msg["LISTS_APPEND_HELPURL"] );
      this.setColour(Blockly.Msg['LISTS_HUE']);
      this.appendValueInput('LIST')
          .setCheck('Array')
          .appendField(Blockly.Msg["LISTS_APPEND_TO"] );
      this.appendValueInput('ITEM')
          .appendField(Blockly.Msg["LISTS_APPEND"]);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      //this.setTooltip(Blockly.Msg.LISTS_APPEND_TOOLTIP);
    }
  };

  Blockly.Python['lists_append'] = function(block) {
    // Append
    var list = Blockly.Python.valueToCode(block, 'LIST',
        Blockly.Python.ORDER_MEMBER) || '___';
    var value = Blockly.Python.valueToCode(block, 'ITEM',
        Blockly.Python.ORDER_NONE) || '___';
    return list + '.append(' + value + ')\n';
  };