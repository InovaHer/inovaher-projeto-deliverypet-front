import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
function Jamila() {
  return (
    <div className="relative h-[50vh] md:h-[70vh] flex justify-center items-center overflow-hidden bg-white">
      {/* Overlay (sombra / marca d'água) */}
      <div className="absolute inset-0 bg-transparent z-5"></div>
      {/* Use bg-black/20, /30, /40 conforme a intensidade desejada */}

      {/* Conteúdo acima */}
      <div
        className="
          relative z-10
          container 
          grid 
          grid-cols-1 md:grid-cols-2
          text-slate-700
        "
      >
        <div
          className="
    flex 
    flex-col 
    gap-2 md:gap-4
    items-center 
    justify-center 
    py-2 md:py-4
  "
        >
          <h2
            className="
      text-3xl md:text-5xl 
      font-bold
      text-center
    "
          >
            Jamila M. Cardoso
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-center">
            Desenvolvedora Full Stack<br/>Scrum Master
          </p>

          <img
            src="https://ik.imagekit.io/wvjuanedn/QRCode/jamilacardoso.svg?updatedAt=1764526141984"
            alt="qr jamila"
            className="w-52 md:w-64 mx-auto h-52 md:h-64 object-contain"
          />
          <div className="flex gap-4">
            <a href="https://github.com/jmcardoso18" target="_blank" className="flex items-center" rel="noopener noreferrer">
              <span className="flex items-center justify-center w-10 h-10">
                <GithubLogoIcon size={28} weight='bold' />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/jamila-m-c/" target="_blank" className="flex items-center" rel="noopener noreferrer">
              <span className="flex items-center justify-center w-10 h-10">
                <LinkedinLogoIcon size={28} weight='bold' />
              </span>
            </a>
          </div>

        </div>


        <div className="flex flex-col justify-center items-center w-full gap-4">
          <img
            src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/Imagens%20Equipe/WhatsApp%20Image%202025-12-03%20at%2010.26.55.jpeg"
            alt="foto jamila"
            className="w-72 h-72 md:w-96 md:h-96 mx-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Jamila
