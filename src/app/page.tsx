'use client';

const products = [
  { id: 1, name: "Apple", price: 120 },
  { id: 2, name: "Milk", price: 60 },
  { id: 3, name: "Apple", price: 120 },
  { id: 4, name: "Milk", price: 60 },
  { id: 5, name: "Apple", price: 120 },
  { id: 6, name: "Milk", price: 60 },
  { id: 7, name: "Apple", price: 120 },
  { id: 8, name: "Milk", price: 60 },
  { id: 9, name: "Apple", price: 120 },
  { id: 10, name: "Milk", price: 60 },
  { id: 11, name: "Apple", price: 120 },
  { id: 12, name: "Milk", price: 60 },
  { id: 13, name: "Apple", price: 120 },
  { id: 14, name: "Milk", price: 60 },
  { id: 15, name: "Apple", price: 120 },
  { id: 16, name: "Milk", price: 60 },
  { id: 17, name: "Apple", price: 120 },
  { id: 18, name: "Milk", price: 60 },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1>Aha Mart </h1>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid", margin: 10 }}>
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}