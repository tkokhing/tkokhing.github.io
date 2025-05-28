"use client";

import { useFontSize } from "@/app/_components/main_frame/font-size-ctrl";
import { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const fontSizes = ['sm', 'base', 'lg', 'xl', '2xl'];
const sizeLabels: Record<string, string> = {
  sm: 'Small',
  base: 'Default',
  lg: 'Large',
  xl: 'XL',
  '2xl': '2XL',
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FontSizeDropdown() {
  const { fontSize, setFontSize } = useFontSize();

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <MenuButton 
          className="p-1 h-10 w-15 -inset-0.5 relative flex max-w-xs items-center rounded-full text-tkokhing-blue hover:text-tkokhing-dark ring-1 ring-tkokhing-blue hover:bg-gray-700 hover:dark:ring-tkokhing-dark"
          aria-label="Open font size menu"
          >
          <span className="text-base"><sub>A</sub>A</span>
          <ChevronDownIcon className="h-3 w-3 text-gray-500" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {fontSizes.map((size) => (
              <MenuItem key={size}>
                {({ focus }) => (
                  <button
                    onClick={() => setFontSize(size as typeof fontSize)}
                    className={classNames(
                      focus ? 'bg-gray-100 dark:bg-gray-700 text-tkokhing-blue dark:text-tkokhing-dark' : 'text-gray-700 dark:text-gray-300',
                      'flex justify-between w-full px-4 py-2 text-sm'
                    )}
                  >
                    {sizeLabels[size]}
                    {fontSize === size && <span>&#10003;</span>}
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
