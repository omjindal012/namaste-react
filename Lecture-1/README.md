- We can use React just in a small portion of our page. It is a library not a framework to be used in the entire file.
- The main function of react is to do DOM manipulation using javascript. DOM manipulation is the most costly operation in our browser and we are optimizing these operations using react library.
- React at the end of the day is just a plane javascript code
- Git is a version control tool that runs locally to track code changes, while GitHub is an online platform where you can store and collaborate on Git-managed projects.

# How do the browser know the element like createElement, inner HTML, appendChild

- These are the superpowers that browser has already in it, it has a javascript engine in it that executes these javacript.
- But the browser does not know what is react or what is react code.

# why do we add script at the bottom of body tag not in the head of the html file

`<script src="script.js" defer></script>`
defer: Loads the script in the background and executes it after the HTML is fully parsed.

- Scripts are placed at the bottom of the <body> to ensure the HTML content loads first, preventing JavaScript from blocking page rendering and improving performance.
- Placing scripts in the `head` can delay rendering unless you use attributes like defer or async.
- We place `script` tags at the end of the `body` so the HTML loads first, ensuring the DOM is ready before scripts run, which avoids errors and improves load speed.

# CDN (Content Delivery Network)

- It is a geographically distributed network of servers that stores copies of website content closer to users, aiming to reduce latency and improve web performance. CDNs are used because they offer faster content delivery, enhanced reliability, cost savings, and protection against attacks.
- These are the website where react has been hosted and we are just pulling react from there into our project.

# React CDN Links

By adding these link now our project has react in it and now our browser will understand the react code

# What does crossorigin mean and why we have written it here

`<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js" ></script>`

It's an attribute that tells the browser how to load a file from another website (like a CDN).
Because the React scripts are loaded from unpkg.com (a different website), crossorigin is added to:

1. Allow better error messages in the browser.
2. Help with debugging if something goes wrong.

There are two main values:

1. "anonymous" – The browser does not send credentials (cookies, HTTP authentication) when making the request.
2. "use-credentials" – The browser does send credentials with the request.

If you just write crossorigin without a value, it's treated as crossorigin="anonymous".

# Why we have included two files, couldn't be there a single file

react.development.js contain the core of the react while react-dom.development.js is used for manipulating the dom(Document Object model) elements and acts as a bridge between the browser and react && react is used in various places like react-native in our phone and react-3d so there are two separate files
It is very important to maintain the order of our script files, first -> react, second -> react-dom, third -> app.js

# To Ignite our own react app

- npm does not stand for node package manager, It is a biggest repository from where we can include packages. npm is a package manager
- package.json is the configuration for npm. npm stores the lastest version of our dependencies.
- The most important package in our project is a bundler. Bundler bundles your app, cleans your code, compress your code, minimize our code so that it can be shift to production. Eg:- Webpack, Vite, Parcel
- create-react-app uses Webpack behind the scenes
- package-lock.json keeps the track of exact latest version of the dependency being installed/ it locks the version

# There are two types of dependencies/ packages

1. dev dependency (npm i -D parcel) (telling that we want parcel as dev dependency)
2. Normal dependency

# "parcel": "^2.14.4"

- This ^ (caret) sign indicates that parcel will automatically be upgraded to any latest version in future (small version changes)
- On the other hand ~ (tilde) is used for major version changes but always advised to use caret

# Difference between package.json & package-lock.json

- package.json is a configuration file that defines the metadata, scripts, and dependency ranges required for a Node.js project. We can manipulate it own our own.
- package-lock.json is automatically generated to record the exact versions of installed dependencies and their sub-dependencies, ensuring consistent and reproducible installs across different environments. It is generally not manipulated

# Transitive dependencies

- We have installed parcel in our project but along with it some dependencies are installed which the parcel needs and these dependencies may furthur be dependent on other sub dependencies known as transitive dependencies
- And there are many package.json files in our project which we can see in node modules each project has its own package.json

# Github

- Since the size of `node_modules` is very large so we do not push it onto our github or production
- But we need to push `package.json` && `package-lock.json` as they store the exact version of the dependency being used in our project and by using these two files we can generate our node_modules.
- We can reinstall node_modules by running `npm install` command.
- node_modules contains the code for our project.

# Parcel

- npx parcel index.html
- npx => Node Package Execute
- By running this command parcel has created a server for us `Server running at http://localhost:1234`
- Parcel is automatically refreshing the pafe for us, HMR (Hot Module Replacement)
- Parcel uses File watchig algorithm which is written in c++.
- Parcel is caching things for us as a result of which it builds the project very fast
- It is not only the React which is making our app fast but a collection of things one of which is the parser which does image-optimization, compression, minification, bundling, consistent hashing, code splitting, differential bundling, error handling, diagonistic, https, tree shaking etc. to make our app faster
- To create a production build `npx parcel build index.html`

# Another way to add React to our project

- The CDN links are not the good or prefferd way to bring `react/ react-dom` to our project because fetching from CDN is a costly operation.
- Another way to add `react` is by using `npm`
- npm i react
- npm i react-dom

# package.json

<!-- "browserslist": [
"last 2 Chrome version",
"last 2 versions"
] -->

To signify which browser and their version our project should be able to run on

<!-- "scripts": {
"start": "parcel index.html",
"build": "parcel build index.html"
}, -->

- We had created these scripts to avoid writing `npx parcel index.html` again and again to start our project
- Once we added the script we would write `npm run start` OR `npm start` to run our project
- To build project `npm run build `

# JSX

- Now it is very tedious to write these nested elements in React
- So meta developers introduces JSX (JavaScript XML) to make it easy to create and manipulate elements
- But React and JSX are two different things, they are not the part of one another
- JSX is not HTML in Javascript but it is HTML-like or XML-like syntax.

`const jsxHeading = <h1 id="heading">This is heading in JSX</h1>;`

- This is not the valid pure javascript which js engine understand. Our JS engine understand ES6(ECMAScript). This would not be recognized by our browser
- So how does the browser is understanding it here :- It is because of parcel. This code is transpiled even before it reaches to the browser. Transpiled means converted it to the code which browser can understand.
- But this transpilation is not performed by the parcel itself. It is performed by the package named babel which parcel has installed. Babel is a js compiler.

- Normally flow of execution is :- React.createElement -> ReactElement-JS Object -> HTML Element
- In case of JSX :- JSX -> React.createElement -> ReactElement-JS Object -> HTML Element

# React Components

1. Class Based Components - OLD
2. Functional Components - NEW -> It is just a normal javascript function which return some JSX code.

- Whatever we write inside our curly brackets inside JSX, It will be executed as js code, but suppose we are calling an api which send somes malicious data, then it will also be get executed, but JSX takes cares of it. It does not directly execute the code, it sanitizes the code from cross site scripting attacks on our browser
