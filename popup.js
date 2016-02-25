document.addEventListener('DOMContentLoaded', function() {
  var addPageButton = document.getElementById('addPage');
  var oopsButton = document.getElementById('oops');
  var d = document;

  addPageButton.addEventListener('click', function() {

    var cb = document.getElementById('finished');
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {

      var f = d.createElement('form');
      f.action = 'https://agile-chamber-71691.herokuapp.com/';
      f.method = 'post';

      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tabs[0].url;
      f.appendChild(i);
      
      var i2 = d.createElement('input');
      i2.type = 'hidden';
      i2.name = 'finished';
      i2.value = cb.checked;
      f.appendChild(i2);

      d.body.appendChild(f);
      f.submit();
    });
  }, false);

  oopsButton.addEventListener('click', function() {
    var f = d.createElement('form');
    f.action = 'https://agile-chamber-71691.herokuapp.com/?pop=true';
    f.method = 'post';

    d.body.appendChild(f);
    f.submit();
  }, false);

}, false);
