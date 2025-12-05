import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import { X } from "@phosphor-icons/react";
import Finalizacao from '../finalização/Finalização';


function ModalFooter() {
    return (
        <>
            <Popup
                trigger={
                    <button>
                        e conheça nossos recursos futuros
                    </button>
                }
                modal
                nested
                contentStyle={{
                    borderRadius: "1rem",
                    padding: 0,
                    width: "90vw",      
                    height: "90vh", 
                    maxHeight: "100vh",
                    overflowY: "auto"
                }}
            >
                <Finalizacao />
            </Popup>

        </>
    );
}

export default ModalFooter;