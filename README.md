# Video-Player app

An exercise that uses **Django** for the API and **Angular** to front-end client.

## High Level Requirements
* It receives YouTube video URLs
* Allows to play YouTube video URLs
* Allows to have bookmarks
* Allows to have history

## Back End

The small Django application stores and lists the player history with a simple Entity: _History_. That's it.

[Check back end folder](backend/README.md), where you have the source code and instructions to configure and start the project the API side.

### Requirements
* Endpoint to list current history
* Endpoint to save an URL into the history table

## Front End

### Requirements
* Receive YouTube video URLs
* List bookmarks
* List history
* Play YouTube video URLs
* Use *LocalStorage*