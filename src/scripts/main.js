var clipboard = require('clipboard');
var $ = require('jquery');

$(document).ready(function(){
	$('.c-modal-trigger').click(function(e){
    e.preventDefault();
    $('.c-modal-overlay').show();
    $('.c-modal-container').addClass('anim-floatUp');
  });
  $('.c-modal-close a').click(function(e){
    e.preventDefault();
    $('.c-modal-overlay').hide();
  });
});

new Clipboard('#referral-url', {
  // called when clip board target '.btn-copy' is clicked
  // lets you set the actual target to a different element, e.g. the link
  target: function (trigger) {
    return trigger;
  },
  // called when clip board target '.btn-copy' is clicked
  // lets you set the text that is put in the clip board
  text: function (trigger) {
    return document.getElementById('referral-url').innerHTML + '&fromjs=true';
  }
});
