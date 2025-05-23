"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HomeWithTextIcon, BlogWithTextIcon, TopicWithTextIcon, ResearchWithTextIcon } from "@/app/_components/main_frame/icons_svg";
import { ProfileLogoSVG } from "@/app/_components/main_frame/icons_svg";
import { useNavigation } from "@/app/_components/main_frame/navigation-context";
import { TKOKHING_LOGO_SVG_URL } from "@/lib/constants";
import { ThemeSwitcher } from "@/app/_components/main_frame/theme-switcher";
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
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0 flex size-48">
                <ProfileLogoSVG />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex  items-baseline space-x-4">
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
              <div className="space-x-8 flex items-center px-8 md:ml-6">
                <FontSizeDropdown />
                <div className="">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={selected === item.name ? 'page' : undefined}
                className={classNames(
                  selected === item.name ? 'bg-gray-900' : 'hover:bg-gray-700',
                  'block rounded-md px-3 py-2'
                )}
              >
                <item.icon aria-hidden="true" />
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">

            <div className="flex justify-evenly">

                <FontSizeDropdown />

            <div className="px-5">
              <ThemeSwitcher />
            </div>
            </div>

          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};
