import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-4 lg:mb-0 lg:pr-4 lg:w-1/2 dark:text-teal-100">
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
              className="mx-3 bg-black text-white hover:bg-slate-500 hover:text-white border border-black font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0 dark:bg-slate-500 dark:text-white dark:border dark:border-white dark:hover:bg-black dark:hover:text-lime-300 flex items-center"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              View on
              <svg 
                viewBox="0 0 16 16"
                className="w-5 h-5 ml-2"
                fill="white"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
