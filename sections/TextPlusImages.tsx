import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    title?: string;
    subtitle?: string;
    content?: string;
    textMobile?: "left" | "center";
    images?: {
        image?: ImageWidget;
        alt?: string;
        text?: string;
    }[]
}

function TextPlusImages({ title, subtitle, content, textMobile, images }: Props) {
    return (
        <div class="px-[33px] lg:px-0 py-[40px] mx-auto max-w-[550px] footer-container flex flex-wrap h-full mx-auto">
            <div class={`w-full ${textMobile === "left" ? 'text-left' : 'text-center'} md:text-center`}>
                <h5 class="text-[21px] text-secondary font-montserrat font-bold mb-[15px]">{title}</h5>
                <h3 class="text-[24px] ss:text-[30px] lg:text-[40px] lg:leading-[50px] text-secondary font-montserrat font-bold mb-[15px] leading-[38px] tracking-[0px]">{subtitle}</h3>
                <p class="text-[13px] lg:text-[16px] lg:leading-[28px] text-secondary font-montserrat leading-[21px] mb-[15px] tracking-[0px]">{content}</p>
            </div>
            {images &&
                images.map((img) => (
                    <div class="w-[50%] lg:w-[25%]">
                        <Image
                            width={265}
                            class="max-w-[100.1%]"
                            src={img.image}
                            alt={img.alt}
                            decoding="async"
                            loading="lazy" />
                        <p class="text-center mb-[20px] h-auto text-[13px] font-opensans">{img.text}</p>
                    </div>
                ))}

        </div>
    )
}

export default TextPlusImages