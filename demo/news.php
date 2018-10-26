<?php
  $news = file_get_contents('./news.json');

  if ($news == false) {
    $news = '{
      "error": {
          "title": "ERROR",
          "tags": [ "ticker" ],
          "text": "Die Nachrichten konnten auf dem Server nicht gefunden werdenn. Bitte wenden Sei \
                   sich an den Serveradministrator.",
          "date": "2018-10-20 12:00:00",
          "extensions": []
      },

      "honors": {
          "title": "Development Team",
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

      "nutzlos": {
          "title": "Nuzlose Fakten",
          "tags": [],
          "text": "Wussten Sie, dass 28% aller ITler ihren Beruf vor Familie und Freunden \
                   verheimlichen aus Angst davor um gratis Support gebeten zu werden?",
          "date": "2018-10-21 15:00:02",
          "extensions": []
      },

      "sexy": {
          "title": "Sexy News",
          "tags": [],
          "text": "Eine Umfrage ergab, dass Computernerds die besten Liebhaber sind. \
                   82% der befragten Geeks gaben an, sie stellen die Lust der Partnerin \
                   über ihre eigene.",
          "date": "2018-10-21 15:00:01",
          "extensions": []
      }
    }';
  }

  echo $_GET['callback'] . "(" . $news . ")";
?>
