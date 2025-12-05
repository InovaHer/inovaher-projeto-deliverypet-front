import { EmBreve } from "../../embreve/EmBreve"
import InovaHerAbout from "../../inovaherabout/InovaHerAbout"

function Finalizacao() {
    return (
        <>
            <div className="max-h-[100vh] ">
                <div>
                    <EmBreve />
                </div>
                <div>
                    <InovaHerAbout />
                </div>
            </div>
        </>
    )
}

export default Finalizacao