function Slide04() {
    return (
        <div className="flex justify-center items-center w-full">
            <img
                src="https://ik.imagekit.io/wvjuanedn/Projeto%20Delivery/depoimento4.png"
                alt="Imagem Slide 01"
                className="w-full mx-auto 
                        h-64   /* telas pequenas */
                        sm:h-80 /* telas >= 640px */
                        md:h-96 /* telas >= 768px */
                        lg:h-96 /* telas >= 1024px */
                        xl:h-[500px] /* telas >= 1280px */
                        object-contain"
            />

        </div>
    )
}

export default Slide04