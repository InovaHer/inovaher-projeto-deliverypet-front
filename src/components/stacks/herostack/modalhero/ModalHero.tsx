interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full relative">

        {/* BOTÃO FECHAR */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-fuchsia-500 text-white px-4 py-2 rounded-lg"
        >
          X
        </button>

        { children }

      </div>
    </div>
  )
}
