//const NEWS_URL = "https://larsroettig.de/news.json?jsoncallback=?";
const NEWS_URL = "demo.json";
const REFRESH_TIME = 1;  //5min // seconds
const READ_TIME    = 5;   //30s  // seconds

var current = 0;
var news = [ { "title": "Development Team",
               "tags": [ ],
               "text": "Diese Nachrichtenseite wurde mit Hilfe von viel Kaffee und Popcorn realisiert \
                        an der TH Rosenheim.<br> \
                        <br>\
                        Sebastian Dörr (Layout)<br>\
                        Artur Faltenberg (Scripting)<br>\
                        Patrizia Jüttner (Hardware)<br>\
                        Ingrid Jürgensen (Hardware)",
               "date": "2018-10-20T15:00:00",
               "extensions": []
             },

             { "title": "Nuzlose Fakten",
               "tags": [ ],
               "text": "Wussten Sie, dass 28% aller ITler ihren Beruf vor Familie und Freunden \
                        verheimlichen aus Angst davor um gratis Support gebeten zu werden?",
               "date": "2018-10-21 15:00:00",
               "extensions": []
             },

             { "title": "Sexy News",
               "tags": [ ],
               "text": "Eine Umfrage ergab, dass Computernerds die besten Liebhaber sind. \
                        82% der befragten Geeks gaben an, sie stellten die Lust der Partnerin \
                        über ihre eigene.",
               "date": "2018-10-21T14:59:59",
               "extensions": []
             },

             { "title": "Connection Error",
               "tags": [ "ticker" ],
               "text": "Es konnten bisher keine Nachrichten geladen werden. Bitte prüfen Sie die \
                        Internetverbindung und fragen Sie bei Risiken und Nebenwirkungen Ihren \
                        Boss oder Informatiker.",
               "date": "2018-10-21T15:00:00",
               "extensions": []
             },
           ];


function start() {
  generateHTML();
  updateNews();
//  window.setInterval(fetchNews, REFRESH_TIME*1000);
  window.setInterval(updateNews, READ_TIME*1000);
}


function fetchNews() {
  $.getJSON(NEWS_URL)
    .done(function(data) {
      var newNews = [];
      $.each(data, function(key, val) {
        newNews.push(val);
      });
      newNews.sort(function(a, b) { return new Date(a.date) > new Date(b.date); });
      news = newNews;
      generateHTML();
    });
}


function generateHTML() {
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


function updateNews() {

}
