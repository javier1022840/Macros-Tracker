import { useState } from "react";

const sampleFoods = [
  { name: "Huevo", protein: 6, carbs: 0.4, fat: 5 },
  { name: "Pollo (100g)", protein: 31, carbs: 0, fat: 3.6 },
  { name: "Aguacate (100g)", protein: 2, carbs: 9, fat: 15 },
  { name: "Atún (100g)", protein: 25, carbs: 0, fat: 1 },
];

export default function MacroTracker() {
  const [entries, setEntries] = useState([]);
  const [totals, setTotals] = useState({ protein: 0, carbs: 0, fat: 0 });

  const addFood = (food) => {
    setEntries([...entries, food]);
    setTotals({
      protein: totals.protein + food.protein,
      carbs: totals.carbs + food.carbs,
      fat: totals.fat + food.fat,
    });
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Tracker de Macros
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {sampleFoods.map((food, idx) => (
          <div
            key={idx}
            onClick={() => addFood(food)}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 12,
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <strong>{food.name}</strong>
            <p>Proteína: {food.protein}g</p>
            <p>Carbs: {food.carbs}g</p>
            <p>Grasa: {food.fat}g</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
        <h2>Resumen Diario</h2>
        <p>Proteína: {totals.protein}g</p>
        <p>Carbohidratos: {totals.carbs}g</p>
        <p>Grasa: {totals.fat}g</p>
      </div>

      <button
        onClick={() => {
          setEntries([]);
          setTotals({ protein: 0, carbs: 0, fat: 0 });
        }}
        style={{ marginTop: 16, padding: 8 }}
      >
        Reiniciar Día
      </button>
    </div>
  );
}