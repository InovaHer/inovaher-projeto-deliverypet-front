import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormLogin from '../formlogin/FormLogin'; // substitua pelo seu componente
import { UserIcon } from '@phosphor-icons/react';
import { useState } from 'react';

function ModalLogin() {

    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    return (
        <>
            <Popup
                open={open}
                onClose={closeModal}
                trigger={
                    <button className="text-white hover:text-gray-300">
                        <UserIcon size={22} />
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormLogin onLoginSuccess={closeModal} />
            </Popup>
        </>
    );
}

export default ModalLogin;