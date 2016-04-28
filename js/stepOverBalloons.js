  
    var myInterpreterResults = null;
 var Results =null;
    function initApiResults(interpreter, scope) {
      // Add an API function for the alert() block.
      var wrapper = function(text) {
        text = text ? text.toString() : '';
        Results =text ;
        return interpreter.createPrimitive();
      };
      interpreter.setProperty(scope, 'alert',
          interpreter.createNativeFunction(wrapper));

      // Add an API function for the prompt() block.
      var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(prompt(text));
      };
      interpreter.setProperty(scope, 'prompt',
          interpreter.createNativeFunction(wrapper));

      // Add an API function for highlighting blocks.
      var wrapper = function(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(highlightBlock(id));
      };
      interpreter.setProperty(scope, 'highlightBlock',
          interpreter.createNativeFunction(wrapper));
    }

    var highlightPause = false;

    function highlightBlock(id) {
       ToolBoxContainer.workspace.highlightBlock(id);
      highlightPause = true;
    }

    function parseCodeResults() {
      // Generate JavaScript code and parse it.
      Results =null;
      myInterpreterResults = null;
      Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
      Blockly.JavaScript.addReservedWords('highlightBlock');
      var code = Blockly.JavaScript.workspaceToCode( ToolBoxContainer.workspace );
      myInterpreterResults= new Interpreter(code, initApiResults);

       ToolBoxContainer.workspace.traceOn(true);
       ToolBoxContainer.workspace.highlightBlock(null);
       stepCodeResults();
    }

    function stepCodeResults() {
      try {
        var ok = myInterpreterResults.step();
      } finally {
        if (!ok) {
          // Program complete, no more code to execute.
          document.getElementById('stepButton').disabled = 'disabled';
          return;
        }
      }
      
        // Keep executing until a highlight statement is reached.
        stepCodeResults();
      
    }