export default function Item({ name, quantity, category, onSelect }) {
    return (
      <section
        className="bg-slate-300 m-2 p-2 cursor-pointer"
        onClick={() => onSelect(name)} // Handle click event
      >
        <h2 className="font-bold text-lg text-orange-600">{name}</h2>
        <p className="ml-1">Quantity: {quantity}</p>
        <p className="ml-1">Category: {category}</p>
      </section>
    );
  }
  