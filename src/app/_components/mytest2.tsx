'use client';

import { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    // const handlePopState = (event: PopStateEvent) => {
    //   if (event.state) {
    //     setMessage('Forward button was clicked!');
    //     setIndex(1);
    //   } else {
    //     setMessage('Back button was clicked!');
    //     setIndex(0);
    //   }
    // };

    window.addEventListener('beforeunload', () => {
      setMessage('beforeunload  is working! BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB beforeunload');
      setIndex(1);
    });

  }, []);

  const load = index;
  const displayMessage = message;
  return (
    <div>
      <h1>beforeunload</h1>
      <p>{displayMessage}</p>
      {load !== null && <p>Index: {load}</p>}
      <h2>beforeunload end</h2>

    </div>
  );
};

export default Home;



// "use client"

// import Link from "next/link";
// import {usePathname} from "next/navigation";
// import { useNavigation } from "@/app/_components/main_frame/NavigationContext";

// type Props = {
//   title: string;
//   subPath: string;
// };

// const SubpageHeader = ({
//   title,
//   subPath,
// }:Props) => 
//   {
//     const { setSelected } = useNavigation();

//     const segments = subPath.split('/');
//     const generateBreadcrumbs = () => {
//       const breadcrumbs = [];
//       let path = '';
  
//       breadcrumbs.push(
//         <Link href="../../" className="hover:underline" onClick={() => setSelected('Home')}>
//           HOME
//         </Link>
//       );
  
//       segments.forEach((segment, index) => {
//         path += `/${segment}`;
//         breadcrumbs.push(
//           <span key={index}>&nbsp;/&nbsp;</span>,
//           <Link key={path} href={path} className="hover:underline uppercase" onClick={() => setSelected(segment)}>
//             {segment}
//           </Link>
//         );
//       });
  
//       return breadcrumbs;
//     };
  

//     // const modifiedSubPath = subPath.substring(0, subPath.indexOf('/'));
//     // const endsWithModifiedSubPath = usePathname().endsWith('/'+ modifiedSubPath);
//   return (
//     <h2 className="text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
//       <div className="truncate">
//         {generateBreadcrumbs()}
//         &nbsp;/&nbsp;{title} || {segments}
//       </div>
//     </h2>
//   );
// };

// export default SubpageHeader;
