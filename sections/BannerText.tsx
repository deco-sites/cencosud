interface Props {
    backgroundUrl?: string;
    title?: string;
    subtitle?: string;
}

function BannerText({ backgroundUrl, title, subtitle }: Props) {
    return (
        <><style
            dangerouslySetInnerHTML={{
                __html: `
          .editableBg {
            height: 400px;
            padding-top: 70px;
            background-image: url(${backgroundUrl ? backgroundUrl : "/bg-faq2.png"});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
  
          `,
            }} /><div class="bg-primary-content relative editableBg">
                <div class="px-[33px] lg:px-0 mx-auto max-w-[550px] footer-container">
                    <div class="pt-[80px]">
                        <div class="mb-[15px]">
                            <h2 class="text-secondary text-[36px] leading-[42px] font-extrabold ss:text-[60px]">{title}</h2>
                            <p class="font-opensans max-w-[556px] text-secondary text-[24px] leading-[32px] my-[15px]">{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default BannerText