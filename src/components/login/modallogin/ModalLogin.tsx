import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import FormLogin from '../formlogin/FormLogin'; // substitua pelo seu componente
import { UserIcon } from '@phosphor-icons/react';

function ModalLogin() {
    return (
        <>
            <Popup
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
                <FormLogin />
            </Popup>
        </>
    );
}

export default ModalLogin;