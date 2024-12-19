import Container from "@/app/_components/container";

export default function Index() {

  return (
    <main>
      <Container>
        Test. This is abstraction topic blog 

        <div className="divide-y divide-gray-300/50">
        <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>What is abstraction in network security?</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <p className="ml-4">
                <code className="text-sm font-bold text-gray-900">Abstraction</code> in
                network security is the concept of simplifying complex systems by representing them in a more understandable form. This involves hiding the intricate details of the network's underlying structure and operations, allowing users and administrators to focus on higher-level functions and policies.
              </p>
            </li>
            <p>Here are some key points about abstraction in network security:</p>
            <li className="flex items-center">
              <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="11" />
                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
              </svg>
              <p className="ml-4">
                <code className="text-sm font-bold text-gray-900">@apply</code>
                Extracting classes with
              </p>
            </li>


          </ul>
          <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.</p>
        </div>
        <div className="pt-8 text-base font-semibold leading-7">
          <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
          <p>
            <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
          </p>
        </div>



        <div className="flex flex-col lg:flex-row justify-center items-left lg:pl-4 lg:w-1/2">
          <a
            href="https://www.csoonline.com/article/573221/defense-in-depth-explained-layering-tools-and-processes-for-better-security.html"
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0"
            >
              Defense in depth explained: Layering tools and processes for better security
            </a>
          <a
            href={"https://www.fortinet.com/resources/cyberglossary/defense-in-depth"}
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0"
            >
              What Is Defense In Depth?
            </a>
          <a
            href={"https://blog.totalprosource.com/what-is-layered-security-how-does-it-defend-your-network"}
            className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0"
            >
              What is Layered Security & How Does it Defend Your Network?
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
