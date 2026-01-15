import { GithubLogoIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {

  const data = new Date().getFullYear()

  return (
    <footer className="w-full bg-emerald-300 text-emerald-800">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">

        {/* Logo à esquerda */}
        <Link
          to="/home"
          className="flex shrink-0 items-center"
        >
          <img
            src="https://ik.imagekit.io/gocq6aosm/patas.png"
            alt="Logo InovaPet"
            className="w-12 md:w-14"
          />
        </Link>

        {/* Conteúdo ocupa a maior parte */}
        <div className="flex flex-1 flex-col items-center gap-2 text-center">

          <p className="text-base font-bold md:text-xl">
            InovaPet - Comidinha Boa | © Todos os direitos reservados {data}
          </p>

          <p className="text-sm md:text-lg">
            Esta é uma página destinada para fins educacionais.
          </p>

          <a
            href="https://github.com/InovaHer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-900 transition-colors"
          >
            Acesse nosso portfólio no GitHub
            <GithubLogoIcon size={28} weight="bold" />
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer
