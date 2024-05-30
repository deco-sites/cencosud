import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ]
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end md:shadow-headerShadow fixed top-0 left-0 w-full z-[500] bg-base-300">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content px-4 lg:px-0 lg:py-4 flex gap-8 items-center justify-between py-[5px]">
        <a href="/">
          <Image class="lg:hidden" src={logo.src || ""} width={142} height={35} alt={logo.alt} />
          <Image class="hidden lg:block ml-5" src={logo.src || ""} width={163} height={40} alt={logo.alt} />
        </a>

        <div class="hidden items-center justify-between lg:flex">
          <ul class="flex">
            {navigation.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-5 text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex lg:hidden btn btn-ghost drawer-button p-0"
        >
          <Icon id="Bars3" class="bar-filter" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-full bg-base-100 text-base-content bg-secondary">
          <div class="text-base-300 text-[24px] ml-auto mr-[17px] mt-[17px]"><label
            htmlFor="mobile-drawer-nav"
            aria-label="close sidebar"
            class="drawer-overlay"
          >          <Icon
              class="fill-white"
              size={22}
              id="CloseIcon"
            /></label></div>
          <ul class="menu p-0">
            {navigation?.links.map((link) => (
              <li>
                <a class="text-base-300 text-[21px] leading-[120%] font-medium pl-[20px] py-[11px]" href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div class="flex gap-[10px] justify-center items-center">
            <Icon class="fill-white" id="MiniLinkedin" size={13} />
            <Icon class="fill-white" id="Feed" size={13} />
          </div>
        </div>
      </aside>
    </nav>
  );
}
