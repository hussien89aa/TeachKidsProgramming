// This file was automatically generated from Messages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace examples.messages.
 */

if (typeof examples == 'undefined') { var examples = {}; }
if (typeof examples.messages == 'undefined') { examples.messages = {}; }

examples.messages.OutputMessage = function(opt_data, opt_ignored) {
  return '<!-- Modal --><div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog"><!-- Modal content--><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Message</h4></div><div class="modal-body"><img scr=\'' + soy.$$escapeHtml(opt_data.msgurl) + '\'/>  ' + soy.$$escapeHtml(opt_data.msg) + '!</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
};
if (goog.DEBUG) {
  examples.messages.OutputMessage.soyTemplateName = 'examples.messages.OutputMessage';
}


examples.messages.helloName = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.greetingWord) ? 'Hello ' + soy.$$escapeHtml(opt_data.name) + '!' : soy.$$escapeHtml(opt_data.greetingWord) + ' ' + soy.$$escapeHtml(opt_data.name) + '!');
};
if (goog.DEBUG) {
  examples.messages.helloName.soyTemplateName = 'examples.messages.helloName';
}


examples.messages.helloNames = function(opt_data, opt_ignored) {
  var output = examples.messages.helloName(opt_data) + '<br>';
  var additionalNameList22 = opt_data.additionalNames;
  var additionalNameListLen22 = additionalNameList22.length;
  if (additionalNameListLen22 > 0) {
    for (var additionalNameIndex22 = 0; additionalNameIndex22 < additionalNameListLen22; additionalNameIndex22++) {
      var additionalNameData22 = additionalNameList22[additionalNameIndex22];
      output += examples.messages.helloName({name: additionalNameData22}) + ((! (additionalNameIndex22 == additionalNameListLen22 - 1)) ? '<br>' : '');
    }
  } else {
    output += 'No additional people to greet.';
  }
  return output;
};
if (goog.DEBUG) {
  examples.messages.helloNames.soyTemplateName = 'examples.messages.helloNames';
}
