# Bot-Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and enlist a bot into their army.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Advanced Features](#advanced-features)
- [Author](#author)

## About

This project is a React application that allows users to create their own Bot Army by browsing through a list of robots and enlisting them. The app also provides features like viewing robot details, sorting by attributes, and more.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory. `cd Bot-Battlr/bot-battlr`
3. Install the required dependencies using `npm install`.
4. Start the JSON DB server using `json-server --watch db.json --port 8001`.
5. Start the React development server using `npm start`.

## Technologies Used

- React
- JSON Server
- CSS

## Features

As a user, you can:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to your army by clicking on it. The bot can be enlisted only **once**.
- Release a bot from your army.
- Discharge a bot from their service forever.

## Advanced Features

These additional features are also implemented:

- Choose if you want to enlist a bot or just see their data. Clicking on the card displays a show view (`BotSpecs`) for that bot.
- Sort bots by their health, damage, or armor using the `SortBar`.
- Filter bots by their class.
- Enlist only one bot from each `bot_class`.

## Author

This project was created by Brian Kipkirui.

---

Feel free to explore the project and make improvements. If you have any questions, feel free to contact me.

## LICENSE

Copyright (c) 2024 bryokn
