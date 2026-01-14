import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from "react"
import Slide01 from "./Slide01"
import Slide02 from "./Slide02"
import Slide03 from "./Slide03"
import Slide04 from "./Slide04"

function CarrosselDepoimentos() {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
        },

        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    const [slidesCount, setSlidesCount] = useState(0)

    useEffect(() => {

        if (!emblaApi) return

        const updateIndex = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        setSlidesCount(emblaApi.scrollSnapList().length)

        emblaApi.on("select", updateIndex)

        updateIndex()

        return () => {

            emblaApi.off("select", updateIndex)
        }
    }, [emblaApi])

    function scrollTo(index: number) {
        emblaApi?.scrollTo(index)
    }

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <div className="relative w-full bg-linear-to-br from-emerald-300 via-orange-200 to-emerald-300">

            <div
                className="overflow-hidden group"
                ref={emblaRef}
            >
                {/* Container dos slides */}
                <div className="flex flex-cols">
                    {/* Slide 1 */}
                    <div className="flex-[0_0_100%]">
                        <article className="overflow-hidden flex flex-col">
                            <Slide01 />
                        </article>
                    </div>

                    {/* Slide 2 */}
                    <div className="flex-[0_0_100%]">
                        <article className="overflow-hidden flex flex-col">
                            <Slide02 />
                        </article>
                    </div>

                    {/* Slide 3 */}
                    <div className="flex-[0_0_100%]">
                        <article className="overflow-hidden flex flex-col">
                            <Slide03 />
                        </article>
                    </div>

                    {/* Slide 4 */}
                    <div className="flex-[0_0_100%]">
                        <article className="overflow-hidden flex flex-col">
                            <Slide04 />
                        </article>
                    </div>

                </div>

                {/* Botões de Navegação - Anterior e Próximo */}
                {/* Botão Anterior */}
                <button
                    className="cursor-pointer hidden md:flex items-center justify-center w-16 h-16 absolute left-3 top-1/2 -translate-y-1/2 z-10 transition-opacity opacity-0 group-hover:opacity-100 bg-transparent hover:bg-transparent"
                    onClick={scrollPrev}
                    aria-label="Slide anterior"
                >
                    <CaretLeftIcon size={48} className="text-white fill-white drop-shadow-xl" />
                </button>

                {/* Botão Próximo */}
                <button
                    className="cursor-pointer hidden md:flex items-center justify-center w-16 h-16 absolute right-3 top-1/2 -translate-y-1/2 z-10 transition-opacity opacity-0 group-hover:opacity-100 bg-transparent hover:bg-transparent"
                    onClick={scrollNext}
                    aria-label="Próximo slide"
                >
                    <CaretRightIcon size={48} className="text-white fill-white drop-shadow-xl" />
                </button>
            </div>

            <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
                {[...Array(slidesCount)].map((_, index) => (
                    <button
                        key={`carousel-dot-${index + 1}`}
                        className={`cursor-pointer w-2 h-2 md:w-3 md:h-3 rounded-full transition-all p-0 ${selectedIndex === index ? "bg-emerald-300 scale-125" : "bg-white"
                            }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Ir para slide ${index + 1}`}
                        aria-current={selectedIndex === index ? "true" : "false"}
                    />
                ))}
            </div>
        </div>
    )
}

export default CarrosselDepoimentos