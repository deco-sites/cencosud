import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

interface Props {
    title?: string;
    subtitle?: string;
    content?: string;
    image?: {
        image?: ImageWidget;
        alt?: string;
    }
    /**
 * @default false
 */
    imageReverse?: boolean;
    textMobile?: "left" | "center";
    /**
* @default false
*/
    showButton?: boolean;
    button?: {
        buttonText?: string;
        buttonUrl?: string;
    }
    backgroundEffect?: "top" | "bottom" | "both";
}

function TextWithImage({ title, subtitle, content, textMobile, image, imageReverse, showButton, button, backgroundEffect }: Props) {
    return (
        <>{(backgroundEffect === "top" || backgroundEffect === "both") && (
            <div class="bg-textwithimage bg-no-repeat bg-top-center bg-cover bg-[#F3F6FE] h-[150px]"></div>
        )}
            <div class="bg-primary-content pt-[60px] relative">
                <div class={`px-[33px] lg:px-0 mx-auto min-h-[100vh] max-w-[550px] footer-container flex ${imageReverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'}  justify-center md:justify-between md:items-center`}>
                    {showButton && <a href={button?.buttonUrl} class="flex md:hidden justify-end items-center mr-auto max-w-[171px] min-w-[171px] mt-5 md:mt-10 mb-[20px] text-[18px] font-opensans font-bold py-[8px] px-5 text-info-content border-info-content border-2 border-solid">{button?.buttonText}
                        <Icon
                            class="ml-[20px]"
                            size={18}
                            id="ChevronRight"
                            strokeWidth={1} /></a>}
                    <div class={`lg:w-[66.666%] ${textMobile === "left" ? 'text-left' : 'text-center'} md:text-left`}>
                        <h5 class="text-[21px] text-secondary font-montserrat font-bold mb-[15px]">{title}</h5>
                        <h3 class="text-[24px] ss:text-[30px] lg:text-[40px] lg:leading-[50px] text-secondary font-montserrat font-bold mb-[15px] leading-[38px] tracking-[0px]">{subtitle}</h3>
                        <p class="text-[13px] lg:text-[16px] lg:leading-[28px] text-secondary font-montserrat leading-[21px] mb-[15px] tracking-[0px]">{content}</p>
                        {showButton && <a href={button?.buttonUrl} class="hidden md:flex justify-end items-center mr-auto max-w-[171px] min-w-[171px] mt-5 md:mt-10 mb-[20px] text-[18px] font-opensans font-bold py-[8px] px-5 text-info-content border-info-content border-2 border-solid">{button?.buttonText}
                            <Icon
                                class="ml-[20px]"
                                size={18}
                                id="ChevronRight"
                                strokeWidth={1} /></a>}
                    </div>

                    {image &&
                        <Image
                            width={556}
                            class="ss:max-w-[484px] md:max-w-[330px] md:max-h-[318px] lg:max-w-[446px] lg:max-h-[391px] xl:max-w-[556px] xl:max-h-[488px]"
                            src={image.image}
                            alt={image.alt}
                            decoding="async"
                            loading="lazy" />}

                </div>
            </div>
            {(backgroundEffect === "bottom" || backgroundEffect === "both") && (
                <div class="bg-textwithimage bg-no-repeat bg-top-center bg-cover bg-[#F3F6FE] h-[150px] rotate-180"></div>
            )}</>
    )
}

export default TextWithImage