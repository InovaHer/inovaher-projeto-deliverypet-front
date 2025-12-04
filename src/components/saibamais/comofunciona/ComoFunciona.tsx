function ComoFunciona() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-8 items-center">
      
      <img
        src="https://ik.imagekit.io/gocq6aosm/foto%20comida%20pet.jpg"
        alt="Alimentação natural para pet"
        className="rounded-2xl shadow-lg w-full object-cover"
      />

      <div>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-indigo-800">
          Como funciona?
        </h2>

        <ul className="space-y-6 text-slate-700 font-bold text-xl">
          <li>🥩 Ingredientes frescos e selecionados</li>
          <li>⚖️ Refeições balanceadas por nutricionistas</li>
          <li>🍲 Preparação artesanal e cuidadosa</li>
          <li>🐶 Porções personalizadas para cada pet</li>
          <li>❄️ Pode ser congelada ou refrigerada</li>
        </ul>
      </div>
    </section>
  )
}

export default ComoFunciona
