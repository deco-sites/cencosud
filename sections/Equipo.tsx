import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

interface Equipo {
    image?: ImageWidget;
    imageAlt?: string;
    title?: string;
    subtitle?: string;
    linkedin?: string;
}

interface Props {
    title?: string;
    equipo: Equipo[];
}

function Equipo({ title, equipo }: Props) {
    return (
        <div class="bg-base-300 pt-[60px]">
            <div class="px-[33px] lg:px-0 mx-auto max-w-[550px] footer-container flex flex-wrap">
                <div class="mb-[20px] w-full">
                    <h3 class="text-secondary text-[24px] ss:text-[30px] md:text-[34px] lg:text-[40px] font-bold">{title}</h3>
                </div>
                {equipo.map((member, index) => (
                    <div class="mb-[20px] w-[50%] md:w-[33.33%] flex justify-center ss:justify-normal items-center flex-col ss:flex-row" key={index}>
                        <div>
                            <Image
                                width={129}
                                class=""
                                src={member.image}
                                alt={member.imageAlt}
                                decoding="async"
                                loading="lazy" />
                        </div>
                        <div class="flex flex-col items-center lg:items-start lg:ml-[12px]">
                            <h4 class="font-bold mb-[3px] text-secondary text-center lg:text-left text-[13px] ss:text-[14px] lg:text-[18px] max-w-[134px]">{member.title}</h4>
                            <p class="text-secondary mb-[15px] font-opensans text-center lg:text-left text-[13px] lg:text-[14px]">{member.subtitle}</p>
                            <a class="bg-secondary p-[8px] mr-auto ss:mr-[unset]" href={member.linkedin}><Icon class="fill-white" id="MiniLinkedin" size={15} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Equipo;
