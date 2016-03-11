/**
 * Create a namespace for the application.
 */
var ToolBoxContainer = {};
// list of saved questions

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
         toolbox: document.getElementById('toolbox'),
       grid:
         {spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true},
     trashcan: true

   });
 
 
  ToolBoxContainer.workspace.addChangeListener(ToolBoxContainer.changeContent);

  // load first question 
  NextQuestion();
}



// run the code
 function RunCode(){
      // Generate JavaScript code and run it.
      window.LoopTrap = 1000;

      Blockly.JavaScript.INFINITE_LOOP_TRAP =
          'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
      var code = Blockly.JavaScript.workspaceToCode(ToolBoxContainer.workspace);
      parseCode();
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      try {
          

      
        //var res =1;// eval(code) + "<br>";
        parseCodeResults();
        //Results is comming from steps run in parseCodeResults in script stepOverResults
    document.getElementById('pResults').innerHTML= Results; 
       // var xmlDom = Blockly.Xml.workspaceToDom(ToolBoxContainer.workspace);
    //var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    //alert(xmlText);
    // examples.messages.OutputMessage({msgurl: '/img/img.jpg',msg:'run it'});
    // document.write(examples.messages.OutputMessage({msgurl: '/img/img.jpg',msg:'run it'}) );

    var CorrectSolution=eval(Questions[QuestionsID-1].Solution);
       //var UserSolution =1;// eval(code) ;
      if (String(CorrectSolution)==String(Results) ) 
        {  
          var audio = new Audio('media/disconnect.mp3');
          audio.play();
         
        document.getElementById("myImg").src = './images/correct.png';
        document.getElementById("msg").innerHTML='Congratulations, Your Answer is correct Move to Next Question';

          NextQuestion();
        }
      else{
       document.getElementById("myImg").src = './images/error.png';
       document.getElementById("msg").innerHTML='Sorry! Your Answer is fails,Try Again';

      }
      //Display message
      $('#myModal').modal('show');
   
   
      } catch (e) {
        //alert(e);
      }
   
      // get block
       /*
       var rootBlock = null;
  var blocks = ToolBoxContainer.workspace.getAllBlocks();
  for (var i = 0, block; block = blocks[i]; i++) {
    
    if (block.type == 'variables_get') {
      rootBlock = block;
        var argument0 =  rootBlock.getFieldValue('VAR');
     alert('y:'+argument0);
      break;
    }
  }*/
   //var code = Blockly.JavaScript.blockToCode(rootBlock);
    
  //----------
    }
    //display next question
 function NextQuestion(){
   var res =  Questions[QuestionsID].text + "<br>";
   document.getElementById('questionText').innerHTML= "Q"+ String(QuestionsID+1)+":"+ res;
   QuestionsID++;
   if(QuestionsID>=Questions.length)
    QuestionsID=0;
 }
   
   // load question files
   // Load the user's language pack.
document.write('<script src="js/Data/MathData.js"></script>\n');
  // Enable steps results to get resuls for every steps.
document.write('<script src="js/stepOverResults.js"></script>\n');
 // call pop up messages
document.write('<script src="js/Messages.js"></script>\n');
 //ToolBoxContainer.init();
 window.addEventListener('load', ToolBoxContainer.init);