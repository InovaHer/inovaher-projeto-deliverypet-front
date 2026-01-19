import { GithubLogoIcon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Inovapet() {
  return (

    <div className="w-full bg-emerald-100 text-emerald-800 py-1">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-6">
        {/* Logo à esquerda */}
        <Link
          to="/home"
          className="flex w-1/3 flex-col-reverse items-center justify-center text-center"
        >
          <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-bold">
            InovaPet<br />Comidinha Boa
          </h1>
          <img
            src="https://ik.imagekit.io/gocq6aosm/patas.png"
            alt="Logo InovaPet"
            className="w-12 md:w-60"
          />
        </Link>

        {/* Conteúdo */}
        <div className="max-w-3xl">

          <h2 className="text-xl font-bold mb-4">
            InovaPet - Comidinha Boa
          </h2>

          <p className="md:text-lg text-left leading-relaxed mb-8">
            Cada vez mais, os tutores tratam seus pets como membros da família.
            Pensando nisso, nossa plataforma oferece uma solução completa de
            alimentação natural para cães e gatos, com refeições frescas,
            balanceadas e entregues diretamente na casa do cliente.
            Por meio de um sistema simples e intuitivo, o usuário pode escolher
            os produtos ideais para seu pet, agendar entregas e garantir uma
            alimentação saudável sem sair de casa.
          </p>

          <h2 className="text-lg font-bold mb-4">
            Benefícios do InovaPet:
          </h2>

          <ul className="md:text-lg text-left leading-relaxed list-disc pl-6 space-y-2 mb-8">
            <li>Compra online prática.</li>
            <li>Entrega rápida em domicílio.</li>
            <li>Alimentação natural e saudável.</li>
            <li>Cardápios personalizados para o pet.</li>
            <li>Melhora da saúde e bem-estar animal.</li>
            <li>Redução de alergias e problemas digestivos.</li>
            <li>Informações claras sobre ingredientes.</li>
            <li>Fidelização por pedidos recorrentes.</li>
            <li>Gestão automatizada de pedidos e entregas.</li>
            <li>Negócio escalável e mercado em crescimento.</li>
          </ul>

          <h2 className="text-lg font-bold mb-4">
            Detalhes Técnicos:
          </h2>

          <p className="md:text-lg text-left leading-relaxed">
            Conheça as tecnologias que tornam o InovaPet possível acessando
            nosso repositório:
          </p>

          <a
            href="https://github.com/InovaHer/inovaher-projeto-deliverypet-front"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900 "
          >
            GitHub <GithubLogoIcon size={30} weight="bold" />
          </a>

        </div>
      </div>
    </div>

  )
}

export default Inovapet
