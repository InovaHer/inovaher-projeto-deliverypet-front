import Popup from "reactjs-popup";
import FormCategoria from "../formcategoria/FormCategoria";

function ModalDepartamento() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='
                            border rounded 
                            border-fuchsia-500 
                            font-bold 
                            px-4 py-2 
                            bg-fuchsia-400 
                            hover:bg-fuchsia-700 
                            text-white   // <-- AQUI
                            w-80 
                            md:text-lg
                        '
                    >
                        Nova Categoria
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormCategoria />
            </Popup>
        </>
    );
}

export default ModalDepartamento;