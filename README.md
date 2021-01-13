# Insticator Take Home Test

## Overview

This is simple Node-based library built with Typescript, Jest, Browserify, uglify, grunt, and gh-pages.
It starts and updates a browser-based session object based on user activity.
You can check it out [here on my GitHub page.](https://standardguy.github.io/insticator/index.html)

## How to build

<img src="./markdown/info-markup.svg" />

Just a few easy steps:

- Clone this repo
- Get into the instictor directory
- Run yarn

```
git clone https://github.com/standardguy/insticator.git
cd insticator
yarn
```

### Useful commands

#### Tests

Run tests once

```
yarn test
```

or every time you change a file (during dev)

```
yarn test:watch
```

#### Build

Build every time you change a file (during dev)

```
yarn build
```

#### Deploy to your github pages

```
yarn deploy
```

## How to see it in action

To enjoy the InsticatorSession experience you'll need to build the project (see commands above) and then, either

- use VScode's LiveServer plugin to run the `dist/index.html` page form your IDE, or
- post the `dist` folder to a server.

Once `dist` is hosted you can navigate to the `index.html` and `index2.html` pages and reload and navigate between them.
Consider opening your browser `inspector` panel where Helpful console messages will show the current state of the `instiSession` cookie. From here it is easy to see

- the session get created on first page load
- expiry updated on each page load
- session ids update on campaign change and expiration, and
- a new session start at midnight
