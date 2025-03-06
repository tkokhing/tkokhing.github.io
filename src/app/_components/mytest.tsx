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