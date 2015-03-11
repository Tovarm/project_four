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

$('#reveal_answer').hide();
$('.hidden_answer').hide();
$('.individual_question').hide();
// $('#new_game').hide();
$('.question_value').hide();
  
  $('#myModal').on('show.bs.modal', function (e) {
    var $button = $(e.relatedTarget);
    var $button_class = $($button).attr('class')
    
    if ($button_class === 'has_id', 'btn', 'btn-primary', 'btn-lg'){ 
      var $button_id = $(e.relatedTarget).data("buttonid");
      var $container_id = parseInt($($button).parent().parent('.whole_question').attr('id'), 10);
      var $question = $button.parent().parent().children('.individual_question')  
    }
    if ($($button_id === $container_id)){
      $('.modal-body').html($question.html());
    }

  //   $('.modal-title').text($('.category_title').text());

  // var $title = $('.category_title').data("catid");
  //   if ($title === $('.individual_question_id').data("catid")){
  //     console.log("categories match!");
  //     $('.modal-title').text($('.category_title').text());
  //   } else {
  //     console.log("categories don't match!");
  //   }
  });


  // reveal_question
  // if($('.individual_question').is (":hidden")){ 
  //   $($(this).children()).slideDown();
  //   $hidden_answer.hide();
  // } else if($('.individual_question').is (":visible")){ 
  //   $($(this).children()).slideUp();
  // }  




$('#myModal').on('show.bs.modal', function (e) {
  var $button = $(e.relatedTarget);
  console.log("e.relatedTarget: " + $button);

  $button.removeClass('btn-primary');
  $button.addClass('btn-default');
})


$('.whole_question').on("click", ".submit_answer_button", function() {

  var $hidden_answer = $(this).parents('.modal-body').children('.hidden_answer');
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
   $('#reveal_answer').append('<p>Come on, take a guess</p></br>').addClass('reveal_answer_wrong')
    $('#reveal_answer').show();
  } 
  //----- if user answer matches hidden answer  -----
  else if(user_answer.localeCompare(hidden_answer) === 0){
    right_answer();
    $(this).parent().hide()
  } else if(hidden_answer.indexOf(user_answer) >= 0){
    right_answer();
    $(this).parent().hide()

    //------ if user answer does not match hidden answer ------
  } else if(user_answer != hidden_answer || user_answer.localeCompare(hidden_answer != 0 || hidden_answer.indexOf(user_answer) > 0)) {
    console.log("WRONG!!");

    var dollar_amount = $value;
    game_score = game_score - parseInt(dollar_amount, 10);
    $('#game_score').text(game_score);
    console.log(game_score);
    counter--;
    $(this).parent().hide()

      
    $('#which_round').text(counter + " ");
    console.log($('#which_round').text());
  
    $('#reveal_answer').append('<p>' + user_answer.toUpperCase() + '</br>Sorry, wrong answer. You\'ve lost $' + $value + '.</br> The right answer was "' + hidden_answer.toUpperCase() + '".</p></br>').addClass('reveal_answer_wrong')
    $('#reveal_answer').show();
  


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
      } else if (counter != 0){
        console.log("YOU WON")
      }
    }
})

// ajax call to server to get new batch of questions
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
