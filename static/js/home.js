$(function() {
  $(".typed").typed({
    strings: [
      "stats sadat.current<br/>" + 
      "><span class='caret'>$</span> skills: Python, JavaScript, Django, Flask, NodeJS, ExpressJS, C, C++<br/> ^100" +
      "><span class='caret'>$</span> hobbies: reading books, travelling, working out <br/> ^300" +
      "><span class='caret'>$</span> alias: shamsow <br/>" 
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.003,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
