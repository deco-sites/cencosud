import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "../components/ui/Slider/index.tsx";
import { useId } from "../sdk/useId.ts";

interface Slide {
    image?: ImageWidget;
    alt?: string;
    interval?: number;
}

interface Props {
    text?: string;
    slides?: Slide[];
    interval?: number;
}

function TextWithSlider({ text, slides, interval }: Props) {
    const id = useId();
    return (
        <div class="bg-primary-content">
            <div id={id} class="mx-auto min-h-[100vh] max-w-[550px] footer-container flex flex-col md:flex-row justify-center md:justify-between md:items-center">
                {text && <h2 class="flex justify-center text-secondary text-[36px] leading-[42px] ss:text-[45px] md:text-[51px] lg:text-[60px] leading-[53px] md:leading-[60px] lg:leading-[70px] tracking-[0px] text-center md:text-left font-extrabold mb-[15px]" dangerouslySetInnerHTML={{ __html: text }}></h2>}

                {slides && <Slider
                    class="carousel carousel-center w-full col-span-full row-span-full gap-6 max-w-[484px] md:max-w-[330px] md:max-h-[318px] lg:max-w-[446px] lg:max-h-[430px] xl:max-w-[556px] xl:max-h-[536px]"
                    rootId={id}
                    interval={interval && interval}
                    infinite
                >
                    {slides?.map((slide, index) => (
                        <Slider.Item
                            index={index}
                            class="carousel-item w-full"
                        >
                            <Image
                                width={484}
                                class="w-full object-fit"
                                src={slide.image}
                                alt={slide.alt}
                                decoding="async"
                                loading="lazy"
                            />
                        </Slider.Item>
                    ))}
                </Slider>
                }
            </div>
        </div>
    )
}

export default TextWithSlider