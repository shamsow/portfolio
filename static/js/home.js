$(function () {
  $(".typed").typed({
    strings: [
      "stats sadat.current<br/>" +
        "><span class='caret'>$</span> location: Korea<br/> ^100" +
        "><span class='caret'>$</span> hobbies: reading books, travelling, working out <br/> ^100" +
        "><span class='caret'>$</span> skills: Python, JavaScript, Django, Flask, NodeJS, ExpressJS, ReactJS, C, C++<br/> ^100" +
        "><span class='caret'>$</span> education: Double majoring in Computer Science and Business and Technology Management at KAIST (Junior)<br/> ^100",
    ], // Limit strings to 4 lines
    showCursor: true,
    cursorChar: "_",
    autoInsertCss: true,
    typeSpeed: 0, // smaller is faster
    startDelay: 1000,
    loop: false,
    showCursor: false,
    onStart: $(".message form").hide(),
    onStop: $(".message form").show(),
    onTypingResumed: $(".message form").hide(),
    onTypingPaused: $(".message form").show(),
    onComplete: $(".message form").show(),
    onStringTyped: function (pos, self) {
      $(".message form").show();
    },
  });
  $(".message form").hide();
});

$(function () {
  // Wrap every letter in a span
  var textWrapper = document.querySelector(".moving-title .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".moving-title .line",
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900,
    })
    .add({
      targets: ".moving-title .letter",
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 1000,
      offset: "-=600",
      delay: (el, i) => 150 + 25 * i,
    })
    .add({
      targets: ".moving-title .line",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
});
