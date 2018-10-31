Techdivision Hot News
=====================

Project Structure
-----------------

This project is a HTML/JavaScript webpage that retrieves news from a JSON file on a server every
now and then and displays them. The project is structured like this:

* ***css/***
  Stylesheets for the webpage.
* ***demo/***
  An example JSON for news and PHP script meant to be stored on a server.
* ***html/***
  The *index.html* main page and some preview of the fully generated page.
* ***img/***
  Images.
* ***js/***
  The *news.js* main script and misc scripts.

The *html/index.html* is just a sceleton with hooks for the script to fill in the downloaded news.
The hooks are `div` containers with following `id`s:

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

The contents of the *demo/* directory should be stored on the server. If the JSON file is relocated
don't forget to change the path in the PHP file accordingly.


Automatization
--------------

The client is meant to run on a Raspberry Pi and display news on a monitor in full-screen mode
of Firefox. In Raspbian the following packages must be installed:

- `sudo apt-get install firefox-esr`
- `sudo apt-get install xdotool`

The `launch.sh` script can be added to the login script to launch the website in Firefox
automatically after login.

For example insert in `~/.profile`:
```sh
sh -c path/to/techdivision/launch.sh &
```
