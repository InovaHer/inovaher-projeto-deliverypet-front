import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormCategoria from "../formcategoria/FormCategoria";

function ModalCategoria({ onSave }: { onSave?: () => void }) {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='text-lg
                        font-bold
                         text-white
                         bg-fuchsia-600
                        px-6
                        py-3
                        rounded-xl
                         hover:bg-fuchsia-700
    transition'>
                        Nova Categoria
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: "1rem",
                    paddingBottom: "2rem",
                    overflowY: "auto",
                    maxHeight: "90vh",
                    width: "95%",
                    maxWidth: "600px",
                }}
            >
                {((close: () => void) => (
                    <FormCategoria close={close} onSave={onSave} />
                )) as any}
            </Popup>

        </>
    );
}

export default ModalCategoria;
