import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

interface Props {
    /**
 * @title Fundo do container 
 * @description define uma cor para o fundo do container
 * @format color-input
 */
    containerColor?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    name?: string;
    position?: string;
    linkedin?: string;
    /**
* @title Image props
* @description Do not change images width unless very necessary
*/
    image?: {
        image?: ImageWidget;
        alt?: string;
        width?: number;
        imageMarginBotMobile?: string;
        imageMarginBotDesktop?: string;
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
    /**
 * @description Defines if there will be a space padding at top and bottom of the content
 * @default false
 */
    spacingTopBot?: boolean;
    minHeight?: string;
    paddingTop?: string;
}

function TextWithImage({ containerColor, title, subtitle, content, name, position, linkedin, textMobile, image, imageReverse, showButton, button, backgroundEffect, spacingTopBot, minHeight, paddingTop }: Props) {
    return (
        <>
            {(backgroundEffect === "top" || backgroundEffect === "both") && (
                <div class="bg-textwithimage bg-no-repeat bg-top-center bg-cover bg-[#F3F6FE] h-[150px]"></div>
            )}
            <div style={{
                backgroundColor: containerColor,
                paddingTop: paddingTop
            }} class={`bg-primary-content ${spacingTopBot ? "py-[60px]" : ''}relative`}>
                <div class={`px-[33px] lg:px-0 mx-auto max-w-[550px] footer-container flex ${imageReverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'}  justify-center md:justify-between md:items-center min-h-[${minHeight}]`}>
                    {showButton && <a href={button?.buttonUrl} class="flex md:hidden justify-end items-center mr-auto max-w-[171px] min-w-[171px] mt-5 md:mt-10 mb-[20px] text-[18px] font-opensans font-bold py-[8px] px-5 text-info-content border-info-content border-2 border-solid">{button?.buttonText}
                        <Icon
                            class="ml-[20px]"
                            size={18}
                            id="ChevronRight"
                            strokeWidth={1} /></a>}
                    <div class={`lg:w-[50%] ${textMobile === "left" ? 'text-left' : 'text-center'} md:text-left`}>
                        <h5 class="text-[21px] text-secondary font-montserrat font-bold mb-[15px]">{title}</h5>
                        <h3 class="text-[24px] ss:text-[30px] lg:text-[40px] lg:leading-[50px] text-secondary font-montserrat font-bold mb-[15px] leading-[38px] tracking-[0px]">{subtitle}</h3>
                        <p class="text-[13px] lg:text-[16px] lg:leading-[28px] text-secondary font-montserrat leading-[21px] mb-[15px] tracking-[0px]">{content}</p>
                        {name && position && <h6 class="text-secondary text-[13px] lg:text-[14px] mb-[15px]"><b>{name}</b><br />{position}</h6>}
                        {linkedin && <a class="bg-secondary p-[8px] inline-block" href={linkedin}><Icon class="fill-white" id="MiniLinkedin" size={15} /></a>}
                        {showButton && <a href={button?.buttonUrl} class="hidden md:flex justify-end items-center mr-auto max-w-[212px] min-w-[212px] mt-5 md:mt-10 mb-[20px] text-[18px] font-opensans font-bold py-[8px] px-5 text-info-content border-info-content border-2 border-solid">{button?.buttonText}
                            <Icon
                                class="ml-[20px]"
                                size={18}
                                id="ChevronRight"
                                strokeWidth={1} /></a>}
                    </div>

                    {image &&
                        <Image
                            width={image.width || 556}
                            class={`ss:max-w-[484px] md:max-w-[330px] md:max-h-[318px] lg:max-w-[446px] lg:max-h-[391px] xl:max-w-[556px] xl:max-h-[488px] mb-[${image.imageMarginBotMobile}] lg:mb-[${image.imageMarginBotDesktop}]`}
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