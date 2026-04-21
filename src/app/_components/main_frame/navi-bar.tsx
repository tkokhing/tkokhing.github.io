"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ProfileLogoSVG, HomeWithTextIcon, BlogWithTextIcon, TopicWithTextIcon, HeptagoningWithTextIcon, ResearchWithTextIcon } from "@/app/_components/main_frame/icons_svg";
import { useNavigation } from "@/app/_components/main_frame/navigation-context";
import { TKOKHING_LOGO_SVG_URL } from "@/lib/share/constants";
import { ThemeSwitcherButton } from "@/app/_components/main_frame/theme-switcher";
import FontSizeDropdown from "@/app/_components/main_frame/font-size-button";

const user = {
  name: 'tkokhing',
  telegram: '@tkokhing',
  imageUrl: TKOKHING_LOGO_SVG_URL,
};

const userFontPreference = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const navigation = [
  { name: 'Home', href: '/', icon: HomeWithTextIcon },
  { name: 'Blog', href: '/blog', icon: BlogWithTextIcon },
  { name: 'Topics', href: '/topics', icon: TopicWithTextIcon },
  { name: 'heptagoning', href: '/heptagoning', icon: HeptagoningWithTextIcon},
  { name: 'Research', href: '/research', icon: ResearchWithTextIcon },
];

const findNavigationIndex = (pathName: string, navigation: { name: string; href: string; icon: any }[]) => {
  const index = navigation.findIndex(navItem => pathName.endsWith(navItem.href) || pathName.includes(navItem.href + '/'));
  return index !== -1 ? index : 0;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
};

export default function Navigationbar() {
  const pathname = usePathname();
  const { selected, setSelected } = useNavigation();

  useEffect(() => {
    const navIndex = findNavigationIndex(pathname, navigation);
    setSelected(navigation[navIndex].name);

    const handlePopState = () => {
      const navIndex = findNavigationIndex(pathname, navigation);
      setSelected(navigation[navIndex].name);
    };

    const handleBeforeUnload = () => {
      const navIndex = findNavigationIndex(pathname, navigation);
      setSelected(navigation[navIndex].name);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname, setSelected]);

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="mt-3 mb-16 md:mb-12">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0 flex size-28">
                <ProfileLogoSVG />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex shrink-0 items-baseline space-x-0.5">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-label="NavigationBar"
                      aria-current={selected === item.name ? 'page' : undefined}
                      className={classNames(
                        selected === item.name ? 'bg-gray-700 dark:bg-gray-600' : 'text-sky-800 hover:bg-gray-500',
                        'rounded-md px-3 py-2'
                      )}
                      onClick={() => setSelected(item.name)}
                    >
                      <item.icon aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-row justify-evenly items-center space-x-7 px-4 md:ml-6">
                <ThemeSwitcherButton />
                <FontSizeDropdown />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile Menu Button */}
              <DisclosureButton 
                title="Open Menu"
                className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-tkokhing-blue hover:dark:text-tkokhing-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="Open Menu"
                >
                <span className="absolute -inset-0.5" />
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>
        <DisclosurePanel className="md:hidden">
          {/* blur out backdrop */}
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
          {/* Drawer panel */}
          <div className="absolute origin-top-right right-5 sm:right-6 lg:right-8 z-50 h-full w-[80%] max-w-sm">
            {/* separate shading which cannot be absolute, resizing will failed*/}
            <div className="bg-white dark:bg-zinc-900 border-1 border-gray-300 dark:border-zinc-700 shadow-2xl transition-transform duration-300">
              {/* Top Controls */}
              <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-zinc-700">
                <span className="font-semibold">Menu</span>
                <DisclosureButton 
                  title="Close menu"
                  className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-tkokhing-blue hover:dark:text-tkokhing-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-label="Close Menu"
                  >
                  <span className="absolute -inset-0.5" />
                  <XMarkIcon aria-hidden="true" className="size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              {/* Settings */}
              <div className="flex justify-around items-center py-4 border-b border-gray-200 dark:border-zinc-700">
                <ThemeSwitcherButton />
                <FontSizeDropdown />
              </div>
              {/* Navigation */}
              <div className="space-y-2 px-4 py-4">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={selected === item.name ? 'page' : undefined}
                    className={classNames(
                      selected === item.name ? 'bg-gray-700 dark:bg-gray-600' : 'text-sky-800 hover:bg-gray-500',
                      'block rounded-md px-3 py-2'
                    )}
                  >
                    <item.icon aria-hidden="true" />
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};
