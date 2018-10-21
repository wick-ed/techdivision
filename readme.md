Techdivision Hot News
=====================

Known Issues
------------

* External JSON files cannot be loaded by the scipt as they violate the browser's same-origin policy. The
solution is to use JSONP (JSON with padding) that expects the suffix `?callback=myCallback` at the end of
the usual URL to a JSON file. This callback MUST be specified by the server and the client must provide such
a function that will be called on the received JSON to parse it. Another solution is the more modern CORS
(Cross-origin resource sharing). Until that is not used the script can only access JSON files stored in the
project's *html/* subdirectory.


Project Structure
-----------------

This project is a HTML/JavaScript webpage that retrieves news from a JSON file every now and then and
displays them. The project is structured like this:

* ***css/***
  Stylesheets for the webpage.
* ***demo/***
  An example JSON for news.
* ***html/***
  The *index.html* main page and some examples.
  The *demo.json* news file until external JSON files are supported.
* ***img/***
  Images.
* ***js/***
  The *news.js* main script and misc scripts.

The *html/index.html* is just a sceleton with hooks for the script to fill in the downloaded news. The hooks
are `div` containers with following `id`s:

* `news_list`
  Displays all news on the left sidebar, one of which will have `id="selected"`.
  Every news is a nested `div` with `class="news-element"`.
* `title`
  Displays the title of the current news
  the selected news' title is inserted as text.
* `content`
  Displays the current news.
  The selected news' content is inserted as text.
* `ticker`
  Displays important news in the ticker bar at the bottom.
  Every ticker news is a nested `div` with `class="ticker__item"` and its content as text.

The *js/news.js* script is started once the webpage is loaded. It will try to download the news from
`NEWS_URL` every `DOWNLOAD_TIME` seconds. If successfully fetched the script will parse the news and
inject the necessary HTML code into the webpage. Once every `UPDATE_TIME` it will move
`id="selected"` to the next news and display it in the main content area. News with the `"ticker"`
tag are handled specially and their content is shown in the scrolling ticker bar.
