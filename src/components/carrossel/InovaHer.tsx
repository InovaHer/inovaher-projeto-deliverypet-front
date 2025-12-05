// import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
function InovaHer() {
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
          grid-cols-1 md:grid-cols-3
          gap-0
          text-slate-700
          items-center
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

          <img
            src="https://ik.imagekit.io/wvjuanedn/InovaHer%20-%20%C3%8Dcones/inovaherrecorte.png?updatedAt=1762459692191"
            alt="foto Logo InovaHer"
            className="w-60 h-60 md:w-80 md:h-80 mx-auto object-cover rounded-3xl"
          />
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-lg md:text-xl font-semibold text-center px-4">
            O delivery que faz seu pet correr até a porta.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full gap-4">
          <img
            //Preciso adicionar o QRCode do deploy aqui depois, o atual é só para testar visualmente
            src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/ChatGPT%20Image%2022%20de%20out.%20de%202025,%2011_10_50.png?updatedAt=1762459773485"
            alt="qr deploy"
            className="w-60 h-60 md:w-80 md:h-80 mx-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  )
}

export default InovaHer
