console.log("js loaded!");

$( document ).ready(function() {

var $whole_question = $('.whole_question');
var $body = $('body');
var $hidden_answer;
var $submit = $('.submit_answer_button');
var $new_game = $('#new_game');
var $value;
var counter = 5;
var $which_round = $('#which_round').text(counter + " ");
var $user_answer;
var game_score = 0;
var total_score = 0;
var contestant_id = $('#contestant_id').text();
console.log("CONTESTANT ID IS " + contestant_id);
var username = $('#username').text();
console.log("USERNAME IS " + username);
var chances = 1



// enter key can be used to submit answer
$('.user_answer').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('.submit_answer_button').click();
    return false;  
  }
});   

console.log("round is currently:" + $which_round.text());
//hide these divs by default. New game button only shows up when the current game ends
// $('.hint_button').hide();
// $('#new_game').hide();
// $('#reveal_answer').hide();
$('.hidden_answer').hide();
// $('.dashes').hide();
//hide each question so that they appear only when modal is called 
$('.individual_question').hide();
// $('.question_value').hide();
  

// iclose button is clicked, reveal correct answer inside reveal_answer div and unhide. Also add class of already_answered- anything with that class has its modal button disabled

$('.whole_question').on("click", ".give_up_close", function () {
  chances = 1;
  $('.modal-body').append($('.dashes'));
  console.log("close button clicked");
  var $hidden_answer = $(this).parents('.modal-body').children('.input').children('.hidden_answer').text();
  if($(this).hasClass('already_answered')){
  $('#reveal_answer').hide();
} else {
  // if contestant gives up, add class reveal_answer_wrong to apply styling 
  $('#reveal_answer').append('<p> Too bad. The right answer was "' + $hidden_answer.toUpperCase() + '".</p>').addClass('reveal_answer_wrong');
  $('#reveal_answer').show();
  chances--;
  $(this).text("Are you sure?");
  }
});

//upon clicking on any of the buttons, modal will launch. The correct answer is hidden in the modal so that the user input can be compared with it. If button's data-buttonid is the same as the id of the question, append contents of the question div to the modal and show it
  $('#myModal').on('show.bs.modal', function (e) {
    chances = 1;
    var $button = $(e.relatedTarget);
    var $button_class = $($button).attr('class');
    // var $hidden_answer = $(this).parents('.whole_question').children('.individual_question').children('.hidden_answer').text();
     var $hidden_answer = $(this).parents('.whole_question').children('.individual_question').children('.input').children('.hidden_answer').text();

    if ($button_class === 'has_id', 'btn', 'btn-primary', 'btn-lg'){ 
      var $button_id = $(e.relatedTarget).data("buttonid");
      var $container_id = parseInt($($button).parent().parent('.whole_question').attr('id'), 10);
      var $question = $button.parent().parent().children('.individual_question'); 
    }
    if ($($button_id === $container_id)){
      $('.modal-body').html($question.html());
      
    }
  // change the class of the clicked-on button to change styling and gray out the clicked button
  $button.removeClass('btn-primary');
  $button.addClass('btn-default');
  $('#reveal_answer').empty();
  });


$('.whole_question').on("click", ".submit_answer_button", function() {
    $(this).parents('.modal-body').children('.input').children('.give_up_close').addClass('already_answered').text("close");
    var $hidden_answer = $(this).parents('.modal-body').children('.input').children('.hidden_answer');
    // var $hidden_answer = $(this).parents('.modal-body').children('.hidden_answer');
    var $value = parseInt($(this).parents('.modal-body').children('.question_value').text(), 10);

    var $user_answer = $(this).parent().parent().parent().find('input');
    var $individual_question = $(this).parents('.modal-body').children('h2');


  $('.user_answer').keydown(function(event){
      if(event.keyCode == 13){
        console.log("Enter key pressed");
          // $(this).siblings('a').children('submit_answer_button').trigger('click');
      }
  });

  var hidden_answer = $.trim($hidden_answer.text().toLowerCase());
  console.log("THE QUESTION IS " + $individual_question.text());
  console.log("THE ANSWER IS " + hidden_answer);


// $('.submit_answer_button').on('click', function(){
  // var $user_answer = $(this).find('input').val();
  // verify that an answer was entered
  var user_answer = $.trim($user_answer.val().toLowerCase());
  var hidden_answer = $.trim($hidden_answer.text().toLowerCase());
    $('#reveal_answer').removeClass();
    $('#reveal_answer').empty();
    $('#reveal_answer').hide();


  console.log(hidden_answer);
  console.log(user_answer);
// ------------------------------------------------------------
// function for what happens when user gets an answer right
function right_answer(){
  // alert("You got it right and earned " + $value.text());
  console.log("correct!");

  var dollar_amount = $value;
  game_score = game_score + parseInt(dollar_amount, 10);
  $('#game_score').text(game_score);
  console.log(game_score);

  $('#reveal_answer').append('<p>' + hidden_answer.toUpperCase() + '</br>Nice job! You just earned $' + $value + '</p>').addClass('reveal_answer_right')
  $('#reveal_answer').show();
}

// ------------------------------------------------------------

  if(user_answer === ""){
   console.log("Come on, at least guess")
   $(this).parents('.modal-body').children('.input').children('.give_up_close').text("I give up");
   $('#reveal_answer').html('<p>Come on, take a guess</p></br>').addClass('reveal_answer_wrong');
    $('#reveal_answer').show();
      // $('.modal-body').text('#reveal_answer');
      chances = 1;
  } 
  //----- if user answer matches hidden answer  -----
  else if(user_answer.localeCompare(hidden_answer) === 0){
    right_answer();
    $(this).parent().hide()
    $('#reveal_answer').show();
      $(".hidden_answer").replace("_ ", user_answer);

  } else if(hidden_answer.indexOf(user_answer) >= 0){
    right_answer();
    $(this).parent().hide()

    //------ if user answer does not match hidden answer (answer is wrong) ------
  } else if(user_answer != hidden_answer || user_answer.localeCompare(hidden_answer != 0 || hidden_answer.indexOf(user_answer) > 0)) {
    console.log("WRONG!!");

      if(chances === 1){
        $(this).text("Sorry, try again!");
        $(this).parents('.input').children('.give_up_close').text("I give up");
        // $(this).parents('.input').children('.user_answer').children().children('.hint_button').show();

        chances --;
        } else if(chances === 0){
      
    var dollar_amount = $value;
    game_score = game_score - parseInt(dollar_amount, 10);
    $('#game_score').text(game_score);
    console.log(game_score);
    counter--;
    $(this).parent().hide()
      
    $('#which_round').text(counter + " ");
    console.log($('#which_round').text());
  
    $('#reveal_answer').append('<p>' + user_answer.toUpperCase() + '</br>Sorry, wrong answer. You\'ve lost $' + $value + '.</br> The right answer was "' + hidden_answer.toUpperCase() + '".</p></br>').addClass('reveal_answer_wrong');
    $('#reveal_answer').show();
  

    // when counter reaches 0, change text of status h2, reset counter to 5 and show the new_game button. ajax call to post scores and create new game in the db
      if(counter === 0){
        alert("GAME OVER");
        console.log("GAME OVER!");
        $('#status').text("Sorry, game over. You should read the encyclopedia more often.");
        counter = 5;
        $('#new_game').show();
           console.log("button clicked");
         // when game is lost, ajax call to post score to db
        $.ajax({
          url: '/games',
          method: 'POST',
          dataType: 'json',
          data: ({contestant_id: contestant_id, username: username, game_score: game_score})
        }).done(function(data){
          console.log("DATA :" + data)
        })
      // } 
      }
    }
  }
})

// when a button is clicked, disable button to keep track of which questions have already been seen
$('#myModal').on('shown.bs.modal', function (e) {
  var $clicked = $(e.relatedTarget); 
  $clicked.prop('disabled', true);

});

// ajax call to server to get new batch of questions. Empty the page and then append the results of the ajax call
  $('#new_game').on('click', function() {
    // $('#new_game').hide();
    console.log("new game button clicked");
      $.ajax({
        method: 'GET',
        url: '/games/contestant/' + contestant_id
      }).done(function(data){
        console.log("SUCCESS");
        $('body').empty();
        $('body').append(data);
      })  
  })

  // close of document.ready
  });