import Icon from "../components/ui/Icon.tsx";

interface Props {
    title?: string;
    subtitle?: string;
    content?: string;
    buttonText?: string;
    buttonUrl?: string;
}

function TextWithButton({ title, subtitle, content, buttonText, buttonUrl }: Props) {

    return (
        <div class="pt-[90px] bg-base-300">
            <div class="text-center max-w-[550px] footer-container px-[33px] lg:px-0 flex flex-wrap justify-center items-center mx-auto">
                <div class="lg:w-[66.666%]">
                    <h5 class="text-[21px] text-secondary font-montserrat font-bold mb-[15px]">{title}</h5>
                    <h3 class="text-[30px] lg:text-[40px] text-secondary font-montserrat font-bold mb-[15px] leading-[38px] tracking-[0px]">{subtitle}</h3>
                    <p class="text-[13px] lg:text-[16px] text-secondary font-montserrat leading-[21px] tracking-[0px]">{content}</p>
                    <a href={buttonUrl} class="flex justify-end items-center mx-auto max-w-[171px] min-w-[171px] mt-5 md:mt-10 mb-[15px] text-[18px] font-opensans font-bold py-[8px] px-5 text-info-content border-info-content border-2 border-solid">{buttonText}  <Icon
                        class="ml-[20px]"
                        size={18}
                        id="ChevronRight"
                        strokeWidth={1}
                    /></a>
                </div>
            </div>
        </div>
    )
}

export default TextWithButton