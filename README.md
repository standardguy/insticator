# Insticator Take Home Test

## Overview

This is simple Node-based library built with Typescript, Jest, Browserify, Uglify, Grunt, and gh-pages. I decided to use js-cookies to read and wrtie cookies efficiently.
This code starts and updates a browser-based session object based on user activity.
You can check it out [here on my GitHub page.](https://standardguy.github.io/insticator/index.html)

## How to build

<img src="./markdown/info-markup.svg" />

It takes a few easy steps:

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

or every time you change a file (as during dev)

```
yarn test:watch
```

Check code coverage

```
yarn test:coverage
```

#### Build

Build every time you change a file (as during dev)

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

Once `dist` is hosted you can navigate to the `index.html` and `index2.html` pages and navigate between them.
Consider opening your browser `inspector` panel where some helpful console messages will show the current state of the `instiSession` cookie. From here it is easy to see:

- the session get created on first page load
- expiration updated on each page load
- session ids update on campaign change and expiration, and
- a new session start at midnight

## Testing

Other than the unit tests that are supplied you can manually test much of this code by navigating between the pages and resetting your system clock to simulate a time change.
To test:

- the session expiration time change
  - reload any page or navigate to any page
- the session id change
  - go to a page with <code>?campaign=[campaingName]</code> inthe URL.
  - advance your system clock to 30+ minutes and reload the page
- to see the session reset at nidnight
  - open to any page and set your computer's system clock to just before midnight, say 11:59:50 PM, and save it. Reload your page and wait 10 seconds. A new session will be created and a new timer set for the next "new day" session.

## Security

Assuming this page were to be serverd using <code>https</code> the security implcation are not about transit, but about what happens in browser.

The largest issue I see with this implementation is that anyone can change the query string pramas to whatever they want or remove them entirely. Doing so does not ruin the user experience, it just impacts how reliable the data is.

The js bundle we are using is minfied. This means that it is not human readable as delivered, but since we are also providing source maps anyone can use the browser inspector to look at the sourcemapped code. Also someone could use a decompiler to reverse engineer the code if they wanted to. Javascript that runs on a browser is not very secure from the observation standpoint.

Cookies, as any data sotrage on a browser (local storage, or indexedDB), are also susceptible to be compromised by users. Again impacting the purity of the data, but likely not the user experience.

Because this bundle ultimately gets wrapped in a closure this code is not on the window or document global scope. This means it cannot be run from the browser inspector panel's console. It acts as a bunch of private methods managing the session.
