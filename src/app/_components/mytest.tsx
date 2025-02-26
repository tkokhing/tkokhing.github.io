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
