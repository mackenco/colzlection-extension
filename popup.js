document.addEventListener('DOMContentLoaded', function() {
  chrome.browserAction.setIcon({path: "PF.png"});

  var addPageButton = document.getElementById('addPage');
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
      i2.name = 'title';
      i2.value = tabs[0].title;
      f.appendChild(i2);

      var i3 = d.createElement('input');
      i3.type = 'hidden';
      i3.name = 'finished';
      i3.value = cb.checked;
      f.appendChild(i3);

      d.body.appendChild(f);
      f.submit();

      chrome.browserAction.setIcon({tabId: tabs[0].id, path: "CBG.png"});
    });
  }, false);
}, false);
