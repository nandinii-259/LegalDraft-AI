function Card({ title, description, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 border">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default Card;