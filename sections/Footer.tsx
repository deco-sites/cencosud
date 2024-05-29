import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: {
    url?: string;
    text?: string;
  }[]
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  links
}: Props) {
  return (
    <footer class="bg-secondary">
      <div class="pt-[100px] pb-[50px]">
        <div class="px-[33px] md:px-0 md:flex max-w-[550px] footer-container h-full mx-auto relative xl:min-h-[280px]">
          <div class="w-full m-0 h-[96px] flex items-center md:w-[33.333%]">
            <div class="mx-3">
              <aside class="">
                <Image
                  width={150}
                  src={logo.src}
                  alt={logo.alt}
                  decoding="async"
                  loading="lazy"
                />
              </aside>
            </div>
          </div>
          <div class="w-full m-0 md:w-[33.333%]">
            <div class="mx-3">
              <aside class="my-[30px]">
                <div>
                  <ul class="text-[#0095eb] list-square pl-[30px] py-[5px] pr-[10px]">
                    {links?.map((link) => (
                      <li class="footer-list relative">
                        <a class="block font-opensans text-[13px] footer-text text-base-300 py-2" href={link.url}>
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
          <div class="w-full m-0 md:w-[33.333%]">
            <div class="mx-3">
              <aside class="flex justify-end h-[96px] items-center">
                <a href="https://www.linkedin.com/company/cencosud-ventures/"><Icon class="fill-white" id="MiniLinkedin" size={24} /></a>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
