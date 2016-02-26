/**
 * Create a namespace for the application.
 */
var ToolBoxContainer = {};
// list of saved questions
var Questions=[ 
{ text:" Find  z=a+b where a=5, b=15",
 Solution:"5+15"
},
{ text:" Find  z=a*b where a=2, b=25",
 Solution:"2*25"
},
{ text:" Find  z=a/b where a=10, b=2",
 Solution:"10/2"
},
{ text:" Find  z=a*b+c where a=5, b=15,c=5",
 Solution:"5*15+5"
},
{ text:" Find  z=a+(b*c) where a=5, b=15,c=5",
 Solution:"5+(15*5)"
},

{ text:" Find  z=(a+b-c)*d where a=5, b=15,c=5,d=2",
 Solution:"(5+15-5)*2"
},
{ text:" Find  z=a+b*2  where a=5, b=15",
 Solution:"5+(15*2)"
},
{ text:" Find  z=a+(-b*c+a) where a=5, b=15,c=5",
 Solution:"5+((-15*5)+5)"
},
];
var QuestionsID=0; //current question id;
 /**
 * Create method for change block to code
 */
ToolBoxContainer.changeContent=function () {
  // Generate JavaScript code and display it.
      Blockly.Python.INFINITE_LOOP_TRAP = null;
      var code = Blockly.Python.workspaceToCode( ToolBoxContainer.workspace);
      //code = prettyPrintOne(code, 'js');
    var content= document.getElementById('pyahtonCode') ;
      content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'py');
      content.innerHTML = code;
    }
     // execute the code
//RunCode();
   }

 /**
 * inialize the contianer
 */
 ToolBoxContainer.init=function  () {
     ToolBoxContainer.workspace = Blockly.inject('blocklyDiv',
        {media: 'media/', 
         toolbox: document.getElementById('toolbox')});
  ToolBoxContainer.workspace.addChangeListener(ToolBoxContainer.changeContent);

  // load first question 
  NextQuestion();
}

 function RunCode(){
      // Generate JavaScript code and run it.
      window.LoopTrap = 1000;

      Blockly.JavaScript.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
      var code = Blockly.JavaScript.workspaceToCode(ToolBoxContainer.workspace);
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      try {
         
        var res = eval(code) + "<br>";
    document.getElementById('pResults').innerHTML= res;
       // var xmlDom = Blockly.Xml.workspaceToDom(ToolBoxContainer.workspace);
    //var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    //alert(xmlText);
    var CorrectSolution=eval(Questions[QuestionsID-1].Solution);
       var UserSolution = eval(code) ;
      if (CorrectSolution==UserSolution ) 
        {  
          var audio = new Audio('media/disconnect.mp3');
          audio.play();
        alert("Cool, Correct, Move Next");
          NextQuestion();
        }
      else{
        alert("error you have to corrcet your data");
      }
    
      } catch (e) {
        //alert(e);
      }
    }
    //display next question
 function NextQuestion(){
   var res =  Questions[QuestionsID].text + "<br>";
   document.getElementById('questionText').innerHTML= "Q"+ String(QuestionsID+1)+":"+ res;
   QuestionsID++;
   if(QuestionsID>=Questions.length)
    QuestionsID=0;
 }
   
 //ToolBoxContainer.init();
 window.addEventListener('load', ToolBoxContainer.init);