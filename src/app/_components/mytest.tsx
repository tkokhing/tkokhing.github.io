'use client'

import { useEffect, useState } from 'react';
import Container from "@/app/_components/container";
import { HomeWithTextIcon, BlogWithTextIcon, TopicWithTextIcon } from "@/app/_components/main_frame/icons_svg";

const navigation = [
    { name: 'NoFound', href: '/topics', icon: TopicWithTextIcon },
    { name: 'Topics', href: '/topics', icon: TopicWithTextIcon },
    { name: 'Tester', href: '/tester', icon: TopicWithTextIcon },
    { name: 'Blog', href: '/blog', icon: BlogWithTextIcon },
    { name: 'Home', href: '/home', icon: HomeWithTextIcon },
    { name: 'Topics', href: '/topics', icon: TopicWithTextIcon },
  ];
  
// const pathname = 'www.mysite.com/blsog/';
// const pathname = 'www.mysite.com/blog/posts/Rise_of_Supply-chain_Attacks';
const pathname = 'https://tkokhing.github.io/bloag/posts/Rise_of_Supply-chain_Attacks';

export default function Index() {
  const [first, setFirst] = useState<number | null>(null);

  useEffect(() => {
    let index = -1;
    navigation.map((item, i) => {
      if (pathname.includes(item.href + '/')){
        index = i;
      }
      if (index < 0) 
        index = 0; 
    });
  setFirst(index);
  }, []);

  const load = first;

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
                    <p>First number over 18 is index is {load}</p>
                    {/* <p>First number over 18 is {load !== null ? navigation[load].name : 'not found'} index is {load}</p> */}
                </div>
                <p>Test ends here!</p>

            </Container>
        </main>
    );
}
