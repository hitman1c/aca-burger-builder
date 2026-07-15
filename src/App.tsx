import { useState } from 'react';

// Each part of the burger is a small component.
function TopBread() {
  return <div className="burger-part top-bread"></div>;
}

function Tomato() {
  return <div className="burger-part tomato">Tomato</div>;
}

function Meat() {
  return <div className="burger-part meat">Meat</div>;
}

function Lettuce() {
  return <div className="burger-part lettuce">Lettuce</div>;
}

function BaseBread() {
  return <div className="burger-part base-bread"></div>;
}

// This list is used to render the controls for the burger fillings.
const ingredientList = [
  { id: 'tomato', label: 'Tomato' },
  { id: 'meat', label: 'Meat' },
  { id: 'lettuce', label: 'Lettuce' },
];

export default function App() {
  // State stores which ingredients should be visible in the burger preview.
  const [ingredients, setIngredients] = useState({
    tomato: true,
    meat: true,
    lettuce: true,
  });

  // This helper updates the chosen ingredient and keeps the UI in sync.
  const toggleIngredient = (name: keyof typeof ingredients) => {
    setIngredients((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  return (
    <main className="page">
      <section className="card">
        <h1>ACA Burger Builder</h1>
        <p>Use the controls below to add or remove fillings.</p>

        <div className="controls">
          {ingredientList.map((ingredient) => {
            const key = ingredient.id as keyof typeof ingredients;
            const isActive = ingredients[key];

            return (
              <div key={ingredient.id} className="control-row">
                {/* Checkbox gives a simple on-off control. */}
                <label>
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => toggleIngredient(key)}
                  />
                  {ingredient.label}
                </label>

                {/* Button gives an extra action for the same toggle logic. */}
                <button type="button" onClick={() => toggleIngredient(key)}>
                  {isActive ? 'Remove' : 'Add'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="card preview-card">
        <h2>Burger Preview</h2>
        <div className="burger-stack">
          <TopBread />
          {/* Conditional rendering decides whether each filling appears. */}
          {ingredients.tomato && <Tomato />}
          {ingredients.meat && <Meat />}
          {ingredients.lettuce && <Lettuce />}
          <BaseBread />
        </div>
      </section>
    </main>
  );
}
