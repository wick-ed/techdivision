const NEWS_URL = "http://178.254.25.14/news.php";
const DOWNLOAD_TIME = 5*60;  // seconds
const UPDATE_TIME   = 30;    // seconds


var current        = 0;   // index of the selected news that is displayed in the main content area
var sidebarIndices = [];  // since all news are in one array but the sidebar does skip ticker news
                          // we must store the indeces of sidebar news separately

// dummy news that will be replaced by real news once the JSON file is downloaded
var news = [ { "title": "Development Team",
               "tags": [],
               "text": "Diese Nachrichtenseite wurde mit Hilfe von viel Kaffee und Popcorn an der \
                        TH Rosenheim realisiert.<br> \
                        <br>\
                        Sebastian Dörr (Layout)<br>\
                        Artur Faltenberg (Scripting)<br>\
                        Patrizia Jüttner (Hardware)<br>\
                        Ingrid Jürgensen (Hardware)",
               "date": "2018-10-20 15:00:00",
               "extensions": []
             },

             { "title": "Nuzlose Fakten",
               "tags": [],
               "text": "Wussten Sie, dass 28% aller ITler ihren Beruf vor Familie und Freunden \
                        verheimlichen aus Angst davor um gratis Support gebeten zu werden?",
               "date": "2018-10-21 15:00:00",
               "extensions": []
             },

             { "title": "Sexy News",
               "tags": [],
               "text": "Eine Umfrage ergab, dass Computernerds die besten Liebhaber sind. \
                        82% der befragten Geeks gaben an, sie stellen die Lust der Partnerin \
                        über ihre eigene.",
               "date": "2018-10-21 14:59:59",
               "extensions": []
             },

             { "title": "Connection Error",
               "tags": [ "ticker" ],
               "text": "Es konnten bisher keine Nachrichten geladen werden. Bitte prüfen Sie die \
                        Internetverbindung und fragen Sie bei Risiken und Nebenwirkungen Ihren \
                        Boss oder Informatiker.",
               "date": "2018-10-20 12:00:00",
               "extensions": []
             }
           ];


function start() {
  generateHTML();
  updateNews();
  fetchNews();
  window.setInterval(fetchNews, DOWNLOAD_TIME*1000);
  window.setInterval(updateNews, UPDATE_TIME*1000);
}


function fetchNews() {
  $.getJSON(NEWS_URL + "?callback=?", function(data) {
    var newNews = [];
    $.each(data, function(key, val) {
      newNews.push(val);
    });
    newNews.sort(function(a, b) { return new Date(a.date) > new Date(b.date); });
    news = newNews;
    sidebarIndices = [];
    generateHTML();
    updateNews();
  })
  .fail(function(data, state, error) {
    alert("error: " + state);
  });
}


function generateHTML() {
  $("#news_list").html("");
  $("#ticker").html("");
  $("#title").html("");
  $("#content").html("");

  $.each(news, function(index, n) {
    if (n.tags.includes("ticker")) {
      $("#ticker").append("<div class=\"ticker__item\">+++ " + n.text + " +++</div>");
    } else {
      $("#news_list").append("<div class=\"news-element\">" + n.title + "</div>");
      sidebarIndices.push(index);
    }
  });

  $(".news-element").first().attr("id", "selected");
  current = 0;
}


function updateNews() {
  $("#selected").removeAttr("id");
  $(".news-element").eq(current).attr("id", "selected");
  var currentNews = news[sidebarIndices[current]];
  $("#title").html(currentNews.title);
  $("#content").html(currentNews.text);

  current++;
  if (current >= sidebarIndices.length) {
    current = 0;
  }
}
