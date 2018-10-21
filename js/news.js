//const NEWS_URL = "https://larsroettig.de/news.json?jsoncallback=?";
const NEWS_URL = "demo.json";
const REFRESH_TIME = 10;  // seconds

var news = [ { "title": "Development Team",
               "tags": [ ],
               "text": "Diese Nachrichtenseite wurde mit Hilfe von viel Kaffee und Popcorn realisiert \
                        an der TH Rosenheim.<br> \
                        <br>\
                        Sebastian Dörr (Layout)<br>\
                        Artur Faltenberg (Scripting)<br>\
                        Patrizia Jüttner (Hardware)<br>\
                        Ingrid Jürgensen (Hardware)",
               "date": "2018-10-21 15:00:00",
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
               "date": "2018-10-21 15:00:00",
               "extensions": []
             },

             { "title": "Connection Error",
               "tags": [ "ticker" ],
               "text": "Es konnten bisher keine Nachrichten geladen werden. Bitte prüfen Sie die \
                        Internetverbindung und fragen Sie bei Risiken und Nebenwirkungen Ihren \
                        Boss oder Informatiker.",
               "date": "2018-10-21 15:00:00",
               "extensions": []
             },
           ];


function start() {
  var update = function() {
   fetchNews();
    window.setTimeout(displayNews, 1000);
  }

  window.alert("foo");

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
