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
