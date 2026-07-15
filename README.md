# ACA Burger Builder

This project is a small React app that lets users build a burger by adding or removing fillings.

## How the app works

1. The burger is split into small reusable components:
   - TopBread
   - Tomato
   - Meat
   - Lettuce
   - BaseBread

2. The app uses React state to keep track of which ingredients should be shown.
   - The state is stored in `useState` inside `App.tsx`.
   - Each ingredient has a boolean value such as `true` or `false`.

3. When a user clicks a button or changes a checkbox, the app calls `toggleIngredient`.
   - This updates the state.
   - React then re-renders the burger preview automatically.

4. Conditional rendering is used to decide which layers appear.
   - For example, `{ingredients.tomato && <Tomato />}` only shows the tomato layer when the state is `true`.

## How to run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Approach used

The app is built in a simple way so it is easy to understand:

- Break the UI into small components.
- Store dynamic values in state.
- Use event handlers for user interaction.
- Use conditional rendering to show or hide layers.

This is the same pattern used in larger React applications.
