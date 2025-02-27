












// "use client";

// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import { HomeWithTextIcon, BlogWithTextIcon, TopicWithTextIcon } from './icons'; // Adjust the import paths as needed

// const navigation = [
//   { name: 'Home', href: '/', icon: HomeWithTextIcon },
//   { name: 'Blog', href: '/blog', icon: BlogWithTextIcon },
//   { name: 'Topics', href: '/topics', icon: TopicWithTextIcon },
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

// const findNavigationIndex = (pathName: string, navigation: { name: string; href: string; icon: any }[]) => {
//   const index = navigation.findIndex(navItem => pathName.endsWith(navItem.href) || pathName.includes(navItem.href + '/'));
//   return index !== -1 ? index : 0;
// };

// const generateBreadcrumb = (pathName: string, navigation: { name: string; href: string; icon: any }[]) => {
//   const pathSegments = pathName.split('/').filter(segment => segment);
//   const breadcrumb = ['Home'];

//   pathSegments.forEach(segment => {
//     const navItem = navigation.find(navItem => navItem.href.includes(segment));
//     if (navItem) {
//       breadcrumb.push(navItem.name);
//     } else {
//       breadcrumb.push(segment);
//     }
//   });

//   return breadcrumb.join(' / ');
// };

// export default function Navigationbar() {
//   const pathname = usePathname();
//   const [selected, setSelected] = useState(() => {
//     const navIndex = findNavigationIndex(pathname, navigation);
//     return navigation[navIndex].name;
//   });
//   const [breadcrumb, setBreadcrumb] = useState(() => generateBreadcrumb(pathname, navigation));

//   useEffect(() => {
//     const handlePopState = (event: PopStateEvent) => {
//       if (event.state) {
//         console.log('Forward button was clicked!');
//         setSelected(navigation[findNavigationIndex(pathname, navigation)].name);
//       } else {
//         console.log('Back button was clicked!');
//         setSelected(navigation[findNavigationIndex(pathname, navigation)].name);
//       }
//       setBreadcrumb(generateBreadcrumb(pathname, navigation));
//     };

//     window.addEventListener('popstate', handlePopState);

//     return () => {
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, [pathname]);

//   return (
//     <section className="mt-1 mb-16 md:mb-12 min-h-full">
//       <Disclosure as="nav">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="flex h-30 items-center">
//             <div className="shrink-0 flex size-48">
//               <ProfileLogoSVG />
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={selected === item.name ? 'page' : undefined}
//                     className={classNames(
//                       selected === item.name ? 'bg-gray-700 dark:bg-gray-600' : 'text-sky-800 hover:bg-gray-500',
//                       'rounded-md px-3 py-2'
//                     )}
//                     onClick={() => setSelected(item.name)}
//                  .icon aria-hidden="true" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="-mr-2 flex md:hidden">
//             {/* Mobile menu button */}
//             <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
//             </Disclosure.Button>
//           </div>
//         </div>
//         <Disclosure.Panel className="md:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
//             {navigation.map((item) => (
//               <Disclosure.Button
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 aria-current={selected === item.name ? 'page' : undefined}
//                 className={classNames(
//                   selected === item.name ? 'bg-gray-900' : 'hover:bg-gray-700',
//                   'block rounded-md px-3 py-2'
//                 )}
//               >
//                 <item.icon aria-hidden="true" />
//               </Disclosure.Button>
//             ))}
//           </div>
//         </Disclosure.Panel>
//       </Disclosure>
//       <div className="mt-4 px-4 sm:px-6 lg:px-8">
//         <p>{breadcrumb}</p>
//       </div>
//     </section>
//   );
// }

'use client'

import { useEffect, useState } from 'react';
import Container from "@/app/_components/container";
import { HomeWithTextIcon, BlogWithTextIcon, TopicWithTextIcon } from "@/app/_components/main_frame/icons_svg";

const navigation = [
  { name: 'CannotFind', href: '/topics', icon: TopicWithTextIcon },
  { name: 'Blog', href: '/blog', icon: BlogWithTextIcon },
  { name: 'Topics', href: '/topics', icon: TopicWithTextIcon },
  { name: 'Tester', href: '/tester', icon: TopicWithTextIcon },
  { name: 'Home', href: '/home', icon: HomeWithTextIcon },
  { name: 'Topics', href: '/topics', icon: TopicWithTextIcon },
  ];
  
// const pathname = 'www.mysite.com/blsog/';
// const pathname = 'www.mysite.com/blog/blog/Rise_of_Supply-chain_Attacks';
const pathname = 'www.mysite.com/home';
// const pathname = 'https://tkokhing.github.io/blog/posts/Rise_of_Supply-chain_Attacks';

export default function Index() {

  // const findNavigationIndex = (pathName: string, navigation: { name: string; href: string; icon: any }[]) => {
  //   const index = navigation.findIndex(navItem => pathName.includes(navItem.href || (navItem.href + '/')));
  //   if (index < 0)
  //     return 0;
  //   else 
  //     return index
  // };

  const findNavigationIndex = (pathName: string, navigation: { name: string; href: string; icon: any }[]) =>
    navigation.findIndex(navItem => pathName.includes(navItem.href) || pathName.includes(navItem.href + '/')) || 0;

  const index = findNavigationIndex(pathname, navigation);
  
  console.log(index); // Output: 1 (if '/blog' is found in pathName)














  // const [first, setFirst] = useState<number | null>(null);
  // first !== null ?navigation[first]:navigation[0] ;
  // useEffect(() => {
  //   let index = -1;
  //   navigation.map((item, i) => {
  //     if (pathname.includes(item.href + '/')){
  //       index = i;
  //     }
  //     if (index < 0) 
  //       index = 0; 
  //   });
  // setFirst(index);
  // }, []);

  // const load = first;

    // const thisName = navigation[load]
    return (
        <main>
            <Container>
                <header>
                    <div className="mx-auto max-w-7xl px-2 py-6 sm:px-1 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-inherit">My Test</h1>
                    </div>
                </header>
                <div>
                    <h1>JavaScript Arrays</h1>
                    <h2>The find() Method</h2>
                    <p>First number over 18 is index is {index}</p>
                </div>
                <p>Test ends here!</p>

            </Container>
        </main>
    );
}
