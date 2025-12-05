import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormLogin from '../formlogin/FormLogin';
import { UserIcon } from '@phosphor-icons/react';
import { useState } from 'react';

function ModalLogin() {

    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    return (
        <>
            {/* Botão que abre o modal */}
            <button
                className="text-white hover:text-gray-300"
                onClick={() => setOpen(true)}
            >
                <UserIcon size={22} />
            </button>

            {/* Modal sem trigger — agora controlado por open */}
            <Popup
                open={open}
                onClose={()=>setOpen(false)}
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem',
                    width: "60vw",
                }}
            >
                <FormLogin closeModal={()=> setOpen(false)} />
            </Popup>
        </>
    );
}

export default ModalLogin;
