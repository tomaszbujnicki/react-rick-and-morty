# Rick and Morty React App

## Live

[Rick and Morty React App](https://rickmorty-app.herokuapp.com)

## Overview

- React
- Express
- [RestAPI](https://rickandmortyapi.com/documentation/#rest)

## Installation

1. Clone the repository

   ```sh
   git clone https://github.com/tomaszbujnicki/react-rick-and-morty.git
   ```

1. Install dependencies for server

   ```sh
   npm install
   ```

1. Install dependencies for client and build static files

   ```sh
   npm run build
   ```

1. Run the Express server

   ```sh
   npm start
   ```

1. Open your browser

   ```sh
   Server listening on 3001
   ```

## Pages

| Pages | Routes *(with example params)* | Description |
| ----- | ------ | ----------- |
| Home | [root](https://rickmorty-app.herokuapp.com) | Home page with random content
| Search | [root/search/character/name/Rick](https://rickmorty-app.herokuapp.com/search/character/name/Rick) | Search results
| Characters | [root/characters](https://rickmorty-app.herokuapp.com/characters) | List of all characters
| Locations | [root/locations/4](https://rickmorty-app.herokuapp.com/locations/4) | List of all locations
| Episodes | [root/episodes](https://rickmorty-app.herokuapp.com/episodes) | List of all episodes
| Character | [root/character/1](https://rickmorty-app.herokuapp.com/character/1) | Single character page
| Location | [root/location/1](https://rickmorty-app.herokuapp.com/location/1) | Single location page
| Episode | [root/episode/1](https://rickmorty-app.herokuapp.com/episode/1) | Single episode page
