(function (window) {
  var names = [
    "Yasemin",
    "Mike",
    "Jonah",
    "Samuel",
    "Nathaniel",
    "Mariia",
    "Anastasiia",
    "Jimmy",
    "Narina",
    "Alexandra",
  ];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);
