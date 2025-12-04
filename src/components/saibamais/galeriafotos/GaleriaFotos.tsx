function GaleriaFotos() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-indigo-800 text-center">
         refeições naturais 🍗🥕
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <img
          src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Captura%20de%20tela%202025-12-04%20094242.png"
          alt="Refeição natural para pet"
          className="rounded-xl shadow-md object-cover w-full h-80"
        />

        <img
          src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Captura%20de%20tela%202025-12-04%20122443.png"
          alt="Refeição natural para pet"
          className="rounded-xl shadow-md object-cover w-full h-80"
        />

        <img
          src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Captura%20de%20tela%202025-12-04%20094403.png"
          alt="Refeição natural para pet"
          className="rounded-xl shadow-md object-cover w-full h-80"
        />

      </div>
    </section>
  )
}

export default GaleriaFotos
