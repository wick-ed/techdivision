const NEWS_URL = "https://larsroettig.de/news.json";
//const NEWS_URL = "file.txt";


function start() {
  var req = $.ajax(NEWS_URL)
      .done(function() {
        alert("done");
      })
      .fail(function(data, status, error) {
        alert("status: " + status + ", error: " + error);
      });

  document.getElementById("root").innerHTML = "Hello, world!";
}
