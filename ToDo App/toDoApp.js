'use strict';

$(document).ready(function() {

  var  $theForm = $('#theForm');
  var  $textInput = $('input:text');

  // add item to list
  $theForm.on('submit', function(event) {
    event.preventDefault();

    var text = $(this).find('input:text').val();

    $('#todo-list').append('<li>' + text + '</li>');
    $textInput.val('');
  });
  $('#todo-list').sortable();
});
