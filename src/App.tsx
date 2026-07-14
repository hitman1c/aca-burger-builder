import { useState } from 'react';

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

const ingredientList = [
  { id: 'tomato', label: 'Tomato' },
  { id: 'meat', label: 'Meat' },
  { id: 'lettuce', label: 'Lettuce' },
];

export default function App() {
  const [ingredients, setIngredients] = useState({
    tomato: true,
    meat: true,
    lettuce: true,
  });

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
        <p>Use buttons or checkboxes to add and remove fillings.</p>

        <div className="controls">
          {ingredientList.map((ingredient) => (
            <div key={ingredient.id} className="control-row">
              <label>
                <input
                  type="checkbox"
                  checked={ingredients[ingredient.id as keyof typeof ingredients]}
                  onChange={() => toggleIngredient(ingredient.id as keyof typeof ingredients)}
                />
                {ingredient.label}
              </label>
              <button
                type="button"
                onClick={() => toggleIngredient(ingredient.id as keyof typeof ingredients)}
              >
                {ingredients[ingredient.id as keyof typeof ingredients] ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card preview-card">
        <h2>Burger Preview</h2>
        <div className="burger-stack">
          <TopBread />
          {ingredients.tomato && <Tomato />}
          {ingredients.meat && <Meat />}
          {ingredients.lettuce && <Lettuce />}
          <BaseBread />
        </div>
      </section>
    </main>
  );
}
