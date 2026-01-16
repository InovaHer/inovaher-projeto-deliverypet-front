import Carrossel from "../../components/carrossel/Carrossel"
import Inovapet from "../../components/inovapet/Inovapet"
import HeroStack from "../../components/stacks/herostack/HeroStack"


function Sobre() {
    return (
        <>
            <div className="mt-6 md:mt-0">
                    <Inovapet />
            </div>
            <div className="mt-6 md:mt-0">
                    <Carrossel />
            </div>
            <div className="mt-6 md:mt-0">
                    <HeroStack />
            </div>
        </>
    )
}

export default Sobre