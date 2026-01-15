import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormLogin from '../formlogin/FormLogin'; // substitua pelo seu componente
import { UserIcon } from '@phosphor-icons/react';
import { useState } from 'react';

function ModalLogin({ onSave }: { onSave?: () => void }) {

    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    return (
        <>
            <Popup
                open={open}
                onClose={closeModal}
                trigger={
                    <button className="text-emerald-800 hover:text-white">
                        <UserIcon size={22} weight='bold' />
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                {((close:() => void) => (
                    <FormLogin close={close} onSave={onSave} />
                )) as any}
                {/* <FormLogin onLoginSuccess={closeModal} /> */}
            </Popup>
        </>
    );
}

export default ModalLogin;