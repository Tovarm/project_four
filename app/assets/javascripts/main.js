console.log("js loaded!");

$( document ).ready(function() {

var $whole_question = $('.whole_question');
var $body = $('body');
var $hidden_answer;
var $submit = $('.submit_answer_button');
var $new_game = $('#new_game');
var $value;
var counter = 5
var $which_round = $('#which_round').text(counter + " ");
var $user_answer;
var running_score = 0;
var total_score = 0;

// enter key can be used to submit answer
$('.user_answer').keyup(function(event){
  if(event.keyCode == 13){
    console.log("enter key pushed");
    $(this).children().click();
    }
});

console.log("round is currently:" + $which_round.text());

$('.reveal_answer').hide();
$('.hidden_answer').hide();
// $('.individual_question').hide();
$('#new_game').hide();

// event listener to show question corresponding to the question mask clicked
// $('#launchMyModal').on('click', function(){
$('.whole_question').on('click', function(){
  // $(this).children().show();
  $user_answer = $(this).find('input');
  $hidden_answer = $(this).find('.hidden_answer');
  $value = $(this).find('.value_id');
  $individual_question = $(this).find('.individual_question');
  console.log($individual_question.text());
  var hidden_answer = $.trim($hidden_answer.text().toLowerCase());
  console.log(hidden_answer);
});

  $('#myModal').on('show.bs.modal', function (e) {
    $buttonid = e.relatedTarget;
    console.log("this is buttonid" + $buttonid);
    // alert( $( '#myModal' ).data([$buttonid]) );
  });


  // $('body').on('hidden.bs.modal', '.modal', function () {
  //       $('.modal-body').removeData('bs.modal');
  //     });
  // reveal_question
  // if($('.individual_question').is (":hidden")){ 
  //   $($(this).children()).slideDown();
  //   $hidden_answer.hide();
  // } else if($('.individual_question').is (":visible")){ 
  //   $($(this).children()).slideUp();
  // }  




$('.launchMyModal').on('click', function(){
  $('.modal-body').append($('.individual_question'))
  var $individual_question
})
// each time user submits a wrong answer, counter decrements by 1
$('.submit_answer_button').on('click', function(){
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

  var dollar_amount = $value.text().replace("$", "");
  running_score = running_score + parseInt(dollar_amount, 10);
  $('#running_score').text(running_score);
  console.log(running_score);

  $('#reveal_answer').append('<p>' + hidden_answer.toUpperCase() + '</br>Nice job! You just earned ' + $value.text() + '</p>').addClass('reveal_answer_right')
  $('#reveal_answer').show();
  $('.whole_question').addClass('already_answered');

}


// ------------------------------------------------------------

  if(user_answer === ""){
   console.log("Come on, at least guess")
   $('#reveal_answer').append('<p>Come on, take a guess</p></br>').addClass('reveal_answer_wrong')
    $('#reveal_answer').show();
  } 
  //----- else if(user_answer === hidden_answer) { -----
  else if(user_answer.localeCompare(hidden_answer) === 0){
    right_answer();
    $(this).parent().hide()
  } else if(hidden_answer.indexOf(user_answer) >= 0){
    right_answer();
    $(this).parent().hide()

  } else if(user_answer != hidden_answer || user_answer.localeCompare(hidden_answer != 0 || hidden_answer.indexOf(user_answer) > 0)) {
    console.log("WRONG!!");

    var dollar_amount = $value.text().replace("$", "");
    running_score = running_score - parseInt(dollar_amount, 10);
    $('#running_score').text(running_score);
    console.log(running_score);
    counter--;
    // $('#myModal').empty();
    $(this).parent().hide();
    $('.user_answer').addClass('already_answered');

     // $('#myModal').reload();
  
    $('#which_round').text(counter + " ");
    console.log($('#which_round').text());
  
    $('#reveal_answer').append('<p>' + user_answer.toUpperCase() + '</br>Sorry, wrong answer. You\'ve lost ' + $value.text() + '.</br> The right answer was "' + hidden_answer.toUpperCase() + '".</p></br>').addClass('reveal_answer_wrong')
    $('#reveal_answer').show();
  
      if(counter === 0){
        alert("GAME OVER");
        console.log("GAME OVER!");
        $('#status').text("Sorry, game over. You should read the encyclopedia more often.");
        counter = 5;
        $('#new_game').show();
             // when game is over, ajax call to post score to db
      // ajax post score to db
      console.log("button clicked");
        $.ajax({
          url: '/games',
          method: 'POST',
          dataType: 'json',
          data: JSON.stringify({contestant_id: contestant_id, total_score: total_score})
        }).done(function(data){
          console.log(data)
        })
      } 
    }
})

// ajax call to server to get new batch of questions
  $('#new_game').on('click', function() {
    $('#new_game').hide();
    console.log("new game button clicked");
      $.ajax({
        method: 'GET',
        url: '/games'
      }).done(function(data){
        // console.log(data);
        $('body').empty();
        $('body').append(data);
      })
  })
});

  // tell user whether answer is right or wrong.
  //   if right
        // add value to running score
  //     reveal correct answer, colored in green
  //   if wrong
  //      subtract value from running score
  //     counter decreases by 1
  //     reveal correct answer, colored in red
  //        and counter = 0:
        //  display game over
            // display running score and post to post to database
            // display total score and post to database
