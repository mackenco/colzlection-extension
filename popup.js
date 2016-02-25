document.addEventListener('DOMContentLoaded', function() {
  var addPageButton = document.getElementById('addPage');

  addPageButton.addEventListener('click', function() {

    var cb = document.getElementById('finished');
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
      var url = tabs[0].url;
    });
  }, false);
}, false);
