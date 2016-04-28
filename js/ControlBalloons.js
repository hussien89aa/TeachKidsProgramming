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
  //Display results of user screen
  /*
   var content= document.getElementById('pyahtonCode') ;
      content.innerHTML ="<img src='images/BallonShooterAssets/Balloon0.png'> </img>";// code;
    
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'py');
      content.innerHTML = code;
    }
    */
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

//check the collosion
 function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}
        
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $("#imgBallonShooter")[0];
  var pos = getPositions(box);
  var box2 = $("#imgBallon")[0];
  var pos2 = getPositions(box2);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);            
  var match = horizontalMatch && verticalMatch;
  if (match) { 
     $('#imgBallon').hide(); 
   }
  $('#datadis').text(horizontalMatch+'='+verticalMatch);
}

  var myInterpreterLocal = null;
// run the code
 function RunCode(){

  //move the ballon to the left
  var i=0;
    /*
  var angle = 0;
  setInterval(function(){
    angle+=3;
  $("#imgBallon").rotate(angle);
   $('#imgBallon').animate({
         "left" : "-="+angle+"px" //moves up
        });
 
  },50);*/
  //hide whe touch
 
 
 //check the collion by timer
 window.setInterval(function() {
         checkCollisions();
}, 200);

 //move the irow fire direction;
  /*
 $('#imgBallonShooter').rotate({
      angle: 0,
      animateTo:-45
  }); 
*/
// ,move irow fire forword
  while (i<10)
  {     
        $('#imgBallonShooter').animate({
        "top" : "-=30px"  //moves up
       // ,"left" : "-=30px" //moves up
        });
        i++;
  
       // var len=parseInt($('#imgBallon').css('left')) 
  }

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
      if (CorrectSolution==Results ) 
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
    
  
    }
 
    //display next question
 function NextQuestion(){
  var content= document.getElementById('imgBallon') ;
  // randam ballon
  //select randaom color ballon
  var rand= Math.floor((Math.random() * 8) + 0);
   $('#imgBallon').attr('src',  "images/BallonShooterAssets/Balloon"+rand+".png");
     //place ballon in randa place
     var WidthPlayBody=$("#PlayBody").width();
  var randPadding=Math.floor((Math.random() * WidthPlayBody) + 0);
    //$('#balloonDiv').addClass("col-sm-"+randPadding);
    $('#imgBallon').animate({
         "left" : "+="+randPadding+"px" //moves up
        });


   //var res =  Questions[QuestionsID].text + "<br>";
   //document.getElementById('questionText').innerHTML= "Q"+ String(QuestionsID+1)+":"+ res;
   //QuestionsID++;
   //if(QuestionsID>=Questions.length)
   // QuestionsID=0;
 }
   
   // load question files
   // Load the user's language pack.
document.write('<script src="js/Data/BalloonsData.js"></script>\n');
  // Enable steps results to get resuls for every steps.
document.write('<script src="js/stepOverBalloons.js"></script>\n');
 // call pop up messages
document.write('<script src="js/Messages.js"></script>\n');
 //ToolBoxContainer.init();
 window.addEventListener('load', ToolBoxContainer.init);