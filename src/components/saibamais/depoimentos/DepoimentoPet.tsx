
  const depoimentos = [
  {
    nome: "Chico",
    raca: "Shih Tzu",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/chico2.png",
    mensagem:
      "Antes eu vivia cansado e minha pelagem era sem brilho. Depois da alimentação natural, ganhei mais energia, meu pelo ficou super macio e agora tenho disposição até para correr no parque!",
  },
  {
    nome: "Meg",
    raca: "Westie",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/meg.png",
    mensagem:
      "Eu tinha muitos problemas de alergia e coceiras. Com a comida natural, minha pele melhorou muito e não passo mais o dia me coçando. Estou muito mais feliz!",
  },
  {
    nome: "Rex",
    raca: "Indefinida",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/pet%20Naiy1.jpg",
    mensagem:
      "Minha digestão não era nada boa... mas agora está tudo em dia! Me sinto mais leve, ativo e pronto para qualquer aventura com meu humano.",
  },

  //  NOVOS DEPOIMENTOS (9)
  {
    nome: "Luna",
    raca: "Golden Retriever",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/cat%20marcia.jpg",
    mensagem:
      "Minha energia voltou! Agora consigo brincar por muito mais tempo e meu pelo está super brilhante!",
  },
  {
    nome: "Thor",
    raca: "Caramelus Brasileiro",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/dog%20jamila%201.jpg",
    mensagem:
      "Eu tinha dificuldade para digerir ração comum. Com a alimentação natural, me sinto muito melhor!",
  },
  {
    nome: "Mel",
    raca: "Caramelus Brasileiro Coloridus",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/dog%20pat.jpg",
    mensagem:
      "Nunca mais tive problemas no estômago e ainda recebo vários elogios pelo meu pelo lindo!",
  },
  {
    nome: "Billy",
    raca: "SDR",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/do%20pati%203.jpeg",
    mensagem:
      "Agora tenho energia de sobra para correr atrás da minha bolinha todos os dias!",
  },
  {
    nome: "Nina",
    raca: "Labrador",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/dodg%20lauren.jpeg",
    mensagem:
      "A comida é deliciosa e me sinto muito mais feliz e saudável.",
  },
  {
    nome: "Max",
    raca: "SDR",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/DOG%20PATI.jpeg",
    mensagem:
      "Meu peso está controlado e minhas dores articulares melhoraram demais!",
  },
  {
    nome: "Amora",
    raca: "SRD",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/cat%20jamila.jpg",
    mensagem:
      "Nunca me senti tão bem! Estou mais ativa, feliz e cheia de vida.",
  },
  {
    nome: "Spike",
    raca: "SRD",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/pet%20Nay%203.jpg",
    mensagem:
      "Minha pelagem está super brilhante e minha energia aumentou bastante.",
  },
  {
    nome: "SDR",
    raca: "Husky Siberiano",
    imagem: "https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/pet%20Nay%206.jpg",
    mensagem:
      "Agora estou muito mais disposta para longas caminhadas e aventuras!",
  },
];



function DepoimentosPets() {
  return (
    <section id="depoimentos" className="bg-white py-16 px-6">

      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          🐾 Depoimentos dos nossos clientes peludos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((pet, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <img
                src={pet.imagem}
                alt={pet.nome}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-indigo-600"
              />

              <h3 className="text-xl font-bold text-fuchsia-700">
                {pet.nome}
              </h3>
              <span className="font-bold text-slate-500 mb-6">

              
                {pet.raca}
              </span>

              <p className="text-gray-700 font-bold">

                “{pet.mensagem}”
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default DepoimentosPets
