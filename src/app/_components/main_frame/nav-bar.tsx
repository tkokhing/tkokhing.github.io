import React, { FC } from "react";
import { TKOKHING_ICON_ANI_GIF_URL } from "@/lib/constants";
import { ProfileLogoSVG } from "@/app/_components/main_frame/icons_svg";
import { HomeWithTextIcon, BlogWithTextIcon, TopicWithTextIcon } from "@/app/_components/main_frame/icons_svg";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', current: true, icon: HomeWithTextIcon },
  { name: 'Blog', href: '/blog', current: false, icon: BlogWithTextIcon },
  { name: 'Topics', href: '/topics', current: false, icon: TopicWithTextIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Navbar() {
  return (
    <section className="mt-1 mb-16 md:mb-12 min-h-full">
      <Disclosure as="nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-30 items-center">
            <div className="shrink-0 flex size-48">
              <ProfileLogoSVG />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex  items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-700 dark:bg-gray-600' : 'text-sky-800 hover:bg-gray-500',
                      'rounded-md px-3 py-2'
                    )}
                  >
                    <item.icon aria-hidden="true" />
                  </a>
                ))}
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
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900' : 'hover:bg-gray-700',
                  'block rounded-md px-3 py-2'
                )}
              >
                {/* {item.name} */}
                <item.icon aria-hidden="true" />
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </section>
  );
}