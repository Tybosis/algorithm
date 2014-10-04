$(function() { 
//bubblesort algorithm for an array: using as a reference!
  setTheInterval();

  //function to create an array of length (num) filled with random numbers from 1 to (num).
  function randArray(num) {
      var array = [];
      for (i = 0; i < num; i++) {
        array[i] =  Math.floor((Math.random() * (num + 1)) * 0.1);
      }
      return array;
  }

  //filling the ul with li elements with the values of the random array
  function createList(list) {
    var newArray = [];
    newArray = randArray(list);
    for(i = 0; i < list; i++) {
      $('#submitList').append('<li class="newLI">' + newArray[i] + '</li>');
    }

  }

//function to switch 2 consecutive numbers
  function Switch(first, second) {
    this.first = first;
    this.second = second;
    if (parseInt(first.text()) > parseInt(second.text())) {
      first.addClass("newLIselected");
      second.addClass("newLIselected");
      setTimeout(function() {
      first.hide();
      second.hide();
      first.insertAfter(second);
      second.fadeIn('slow');
      first.fadeIn('slow');
      first.removeClass("newLIselected");
      second.removeClass("newLIselected");
      }, 400);
    };
  }

  // function to bubble through the list one time
  function bubble() {
    for(i=0; i <= $('#userInput').val(); i++) {
      if (parseInt($('#list li').eq(i).text()) > parseInt($('#list li').eq(i+1).text())) {
        Switch($('#list li').eq(i), $('#list li').eq(i+1));
        break;
      };
    };
  }
  //sending li elements to the DOM on form submit
  $('form').submit(function(x) {
    x.preventDefault();
    stopInterval();
    var $stuff = $('#userInput').val();
    $('#submitList li').remove();
    createList($stuff);
    return false;
  });

  function setTheInterval(arg) {
    this.arg = arg;
    interval = setInterval(arg, 1500);
  }

  function stopInterval() {
    clearInterval(interval);
  }

  //starting the BubbleSort when user clicks the button!
  $('.button').on('click', function(e) {
    e.preventDefault();
    bubble();
    setTheInterval(bubble);
  });



});
