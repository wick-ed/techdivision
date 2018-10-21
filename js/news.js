//const NEWS_URL = "https://larsroettig.de/news.json?jsoncallback=?";
const NEWS_URL = "demo.json";
const REFRESH_TIME = 10;  // seconds

var news = [];


function start() {
  var update = function() {
    fetchNews();
    window.setTimeout(displayNews, 1000);
  }

  update();
  window.setInterval(update, REFRESH_TIME*1000);
}


function fetchNews() {
  $.getJSON(NEWS_URL)
    .done(function(data) {
      news = [];
      $.each(data, function(key, val) {
        news.push(val);
      });
    })
    .fail(function(data, status, error) {
      alert("status: " + status + ", error: " + error);
    });
}


function displayNews() {
  var messages = [];
  $.each(news, function(index, message) {
    var items = [];
    $.each(message, function(key, val) {
      items.push("<li class=\"" + key + "\">" + val + "</li>");
    });
    messages.push("<ul>" + items.join("") + "</ul>");
  });
  $("#main").html(messages);
}
