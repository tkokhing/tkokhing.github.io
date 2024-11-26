import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-1/2 dark:text-teal-100 ">
            Learn to live or Live to learn
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2 dark:text-teal-100">
            <a
              href={`https://github.com/tkokhing`}
              className="mx-3 font-bold hover:underline"
            >
              Which one will you choice?
            </a>
            <a
              href="https://github.com/tkokhing"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0  dark:bg-slate-500 dark:text-white dark:border dark:border-white  dark:hover:bg-black dark:hover:text-lime-300"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
