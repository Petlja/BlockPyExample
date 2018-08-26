# BlockPy as a library - example

This repository contains an example how to use BlockPy (https://github.com/RealTimeWeb/blockpy) as a library in your own environment based on the Blockly visual programming editor (https://github.com/google/blockly).

The only limitations is that you need to use the version of Blockly contained in BlockPy (customized Blockly 1.0). We have tried to use BlockPy with the offitial up-to-date version of Blockly, but we have found too many relevant modifications in the customized Blockly. Most of those modifications are in the code generating part. In the future we may try to reapply all those modifications to the up-to-date Blockly (1.2) and then to use that customized code generating part with the rest of the regular Blockly.

Fortunately, regular Skulpt implementation works fine.

If you want to try the example, you should clone BlockPy in the sibling directory named blockpy.

Toolbox in the example does not cover all possible block types. To figure out other available block types, you may take a look to the definition of the BlockPyEditor.CATEGORY_MAP variable in the src/editor.js.
