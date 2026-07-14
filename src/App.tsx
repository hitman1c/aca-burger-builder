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

export default function App() {
  const [showTomato, setShowTomato] = useState(true);
  const [showMeat, setShowMeat] = useState(true);
  const [showLettuce, setShowLettuce] = useState(true);

  const toppings = [
    { label: 'Tomato', value: showTomato, setter: setShowTomato },
    { label: 'Meat', value: showMeat, setter: setShowMeat },
    { label: 'Lettuce', value: showLettuce, setter: setShowLettuce },
  ];

  return (
    <main className="page">
      <section className="card">
        <h1>ACA Burger</h1>
        <p>Use the checkboxes to add or remove ingredients.</p>
        <div className="controls">
          {toppings.map(({ label, value, setter }) => (
            <label key={label}>
              <input
                type="checkbox"
                checked={value}
                onChange={() => setter(!value)}
              />
              {label}
            </label>
          ))}
        </div>
      </section>

      <section className="card preview-card">
        <h2>Burger Preview</h2>
        <div className="burger-stack">
          <TopBread />
          {showTomato && <Tomato />}
          {showMeat && <Meat />}
          {showLettuce && <Lettuce />}
          <BaseBread />
        </div>
      </section>
    </main>
  );
}
