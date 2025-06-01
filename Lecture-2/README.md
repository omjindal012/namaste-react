# Props (Properties)

- It is something we can send to our component
- If we want to dynamically send data to our component we can use props
- Passing a prop to a component is just like passing an argument to a function

# config-driven UI (configuration-driven user interface)

- It is a design pattern where the UI is not hardcoded, but instead generated dynamically based on configuration data—usually in the form of JSON or JavaScript objects.

- Flexibility: You can change the UI by just updating the config—no need to touch the code.
- Reusability: Same component can render different UIs from different configs.
- Scalability: Great for form builders, dashboards, admin panels, or any dynamic interface.
- Low-code platforms: A common foundation for systems where non-developers configure the UI.

# Key

- We need the key prop in .map() functions in React to help React identify which items have changed, been added, or removed during re-renders. This allows React to efficiently update only what's necessary in the Virtual DOM, rather than re-rendering everything.
- Dont use index as keys, as the order of items might change.

# React Hooks

- Functional Component is a plane JS function at the end of the day
- React Element is a planer JS object at the end of the day
- React Hool is a normal JS fxn given to us by React

1. UseState() - Whenever a state variable updates React re-renders the component
2. UseEffect()

# Reconciliation Algorithm (React Fiber)

- React creates a virtual DOM which is a represenation of actual DOM which is a normal JS object.
- Diff Algorithm is used to find the difference between Old Virtual DOM && Updated Virtual DOM, then it update the actual DOM.
- React is fast because it does efficient DOM manipulation by maintaing a Virtual DOM.

# Monolithic Architecture

A single unified unit where all components (UI, business logic, database) are part of one codebase and deployed together.

# Microservice Architecture

A system broken into small, independent service.

# Approaches to get data from Backend

1. Page Loads -> API Call -> Render
2. Page Loads -> Render (what is available) -> API Call -> Re-renders (This approach gives a better UX)

# useEffect() Arguments

1. Callback fxn -> this fxn will be called after our component renders
2. dependency array

# Shimmer UI

- himmer UI is a loading placeholder effect that mimics the appearance of content being loaded by displaying animated gradients or light sweeps.

# CORS Plugin

- When we are trying to make an api call from localhost to API our browser does not allow for that
- So we use the `Allow CORS` extension to overcome it
- `corsproxy.io` -> `https://corsproxy.io/?` Add this before API link to avoid cors issue of extension

- rafce -> Shortcut to create basic code for our component
- When we want to move a next page we do not use anchor tag because it refreshes the whole page

# Types of Routing in web app

- Client Side Routing :- Single Page application just the components are interchaning which is already available on the client side
- Server Side Routing :- Demands a whole new page in request from the server

# why cant we make useEffect async

You can’t directly make the useEffect function itself async, because:

useEffect expects the callback to return either:

- undefined (nothing), or
- A cleanup function (a synchronous function that React can call before the effect runs again or on component unmount).

You're making the callback return a Promise, not a cleanup function or undefined — which React doesn’t know how to handle. This causes unexpected behavior or warnings.

You can't make useEffect itself async because it would return a Promise, which React can't use for cleanup. Instead, declare an async function inside the effect and call it.

# Single Responsibility Principle

- Each class or function must have only a single responsibility
- This helps in testing and debugging

# Chunking/ CodeSplitting/ DynamicBundling/ Lazy loading/ Ondemand Loading/ Dynamic Import

- Parcel bundles all the files into a single js file
- But to optimize our app we make different bundles for different use cases that will only be loaded when they are required by using lazy loading

# Higher Order Component

- It is a function that takes a component as input and returns a component.

# Lifting State Up

- Controlled/ Uncontrolled Components

# Props Drilling

- We may want to pass data from parent node to leaf node but in this process data has to traverse through all the intermediate nodes which even does not require the data. And there may be some data that i want to be accessible everytime anywhere in my app, So this is possible with the help of `React Context`
