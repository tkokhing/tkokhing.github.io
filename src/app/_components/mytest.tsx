// // "use client";

// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { Home } from "@/lib/constants";

// // type Props = {
// //   title: string;
// //   subPath: string;
// // };

// // const SubpageHeader = ({ title, subPath }: Props) => {
// //   const pathname = usePathname();
// //   const segments = subPath.split('/');

// //   const generateBreadcrumbs = () => {
// //     const breadcrumbs = [];
// //     let path = '';

// //     breadcrumbs.push(
// //       <Link key="home" href={Home} className="hover:underline">
// //         Home
// //       </Link>
// //     );

// //     segments.forEach((segment, index) => {
// //       path += `/${segment}`;
// //       breadcrumbs.push(
// //         <span key={index}>&nbsp;/&nbsp;</span>,
// //         <Link key={path} href={path} className="hover:underline">
// //           {segment}
// //         </Link>
// //       );
// //     });

// //     return breadcrumbs;
// //   };

// //   return (
// //     <h2 className="text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
// //       {generateBreadcrumbs()}
// //       &nbsp;/&nbsp;{title}
// //     </h2>
// //   );
// // };

// // export default SubpageHeader;



// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Home } from "@/lib/constants";

// type Props = {
//   title: string;
//   subPath: string;
// };

// const SubpageHeader = ({ title, subPath }: Props) => {
//   const pathname = usePathname();
//   const segments = subPath.split('/');

//   const generateBreadcrumbs = () => {
//     const breadcrumbs = [];
//     let path = '';

//     segments.forEach((segment, index) => {
//       path += `/${segment}`;
//       breadcrumbs.push(
//         <span key={`separator-${index}`}>&nbsp;/&nbsp;</span>,
//         <Link key={path} href={path} className="hover:underline">
//           {segment}
//         </Link>
//       );
//     });

//     return breadcrumbs;
//   };

//   return (
//     <h2 className="text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
//       <Link href={Home} className="hover:underline">
//         Home
//       </Link>
//       {generateBreadcrumbs()}
//       &nbsp;/&nbsp;{title}
//     </h2>
//   );
// };

// export default SubpageHeader;



// 
// Added subpage-header inside AtoZ and posts


// Again the same symptom, when at this page, 
//       > > http://localhost:3000/topics/AtoZ

// and click on the last breadcrumb, the shade is gone. 
//       > > HOME / topics / AtoZ / 
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
//       const breadcrumbs: JSX.Element[] = [];
//       let path = '';
  
//       segments.forEach((segment, index) => {
//         path += `/${segment}`;
//         breadcrumbs.push(
//           <span key={index}>&nbsp;/&nbsp;</span>,
//           <Link key={path} href={path} className="hover:underline" onClick={() => setSelected(segment)} >
//             {segment}
//           </Link>
//         );
//       });
//       const subpageheader = breadcrumbs.slice(1);
//       return subpageheader;
//     };
  
//     const modifiedSubPath = subPath.substring(0, subPath.indexOf('/')); // first path
//     // const modifiedSubPath = subPath.split('/').slice(1).join('/'); // second path
//     const endsWithModifiedSubPath = usePathname().endsWith('/'+ modifiedSubPath);
//     if (!endsWithModifiedSubPath){

//     };
//     const realPathName = usePathname();
//   return (
//     <h2 className="uppercase text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
//       <div className="truncate">
//         <Link href="../../" className="hover:underline" onClick={() => setSelected('Home')}>
//           HOME
//         </Link>
//         &nbsp;/&nbsp;
//         {endsWithModifiedSubPath ? (
//           <span>{modifiedSubPath}</span>
//         ) : (
//           <span>{generateBreadcrumbs()}</span>

//         )}
//       &nbsp;/&nbsp;{title} 
//       </div>
//       <div>|| Segments: {segments} || </div>
//       <div>|| RealPathName: {realPathName} || </div>
//     </h2>
//   );
// };

// export default SubpageHeader;

// I want to try out another logic flow...  Can you help me draft the new logic flow for subpage-header.tsx

// 1) Home to be either localhost or mysite.com depending if I'm running npm run dev or npm run build.


// 2) Home to be part of  function breadcrumbs()

// 3) breadcrumbs() to take input from usePathname(), instead of subPath, and pass to segments[] and then to create clickable links. However, the last segment of the pathname (/lastsegment) should present inside breadcrumb but not clickable.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
};

const SubpageHeader = ({ title }: Props) => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(segment => segment);

  const isDev = process.env.NODE_ENV === 'development';
  const homeUrl = isDev ? 'http://localhost' : 'https://mysite.com';

  const generateBreadcrumbs = () => {
    const breadcrumbs = [];
    let path = '';

    breadcrumbs.push(
      <Link key="home" href={homeUrl} className="hover:underline">
        Home
      </Link>
    );

    segments.forEach((segment, index) => {
      path += `/${segment}`;
      if (index < segments.length - 1) {
        breadcrumbs.push(
          <span key={`separator-${index}`}>&nbsp;/&nbsp;</span>,
          <Link key={path} href={path} className="hover:underline">
            {segment}
          </Link>
        );
      } else {
        breadcrumbs.push(
          <span key={`separator-${index}`}>&nbsp;/&nbsp;</span>,
          <span key={path}>{segment}</span>
        );
      }
    });

    return breadcrumbs;
  };

  return (
    <h2 className="text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      {generateBreadcrumbs()}
      &nbsp;/&nbsp;{title}
    </h2>
  );
};

export default SubpageHeader;