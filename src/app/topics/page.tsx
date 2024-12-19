import Container from "@/app/_components/container";

export default function Index() {
  return (
    <main>
      <Container>
        Test. This is topic main page 

        <div className="py-8 flex flex-col lg:flex-row items-center">
          <p>
            Network defense typically involves multiple layers to ensure comprehensive protection. Here are some key layers:
          </p>
          <ol>
            <li>Firewall: Acts as the first line of defense by monitoring and controlling incoming and outgoing network traffic based on predetermined security rules.</li>
            <li>Intrusion Detection and Prevention Systems (IDPS): Monitors network traffic for suspicious activity and can take action to prevent potential threats.</li>
          </ol>
          <p>
            These layers work together to create a robust defense-in-depth strategy, ensuring that if one layer is compromised, others can still provide protection.
          </p>
          <div className="flex flex-col lg:flex-row justify-stretch items-left lg:pl-4 lg:w-1/2">
            <a
              href="https://www.csoonline.com/article/573221/defense-in-depth-explained-layering-tools-and-processes-for-better-security.html"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0"
            >
              Defense in depth explained: Layering tools and processes for better security
            </a>
            <a
              href="https://www.fortinet.com/resources/cyberglossary/defense-in-depth"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-6 lg:px-4 duration-200 transition-colors mb-4 lg:mb-0"
            >
              What Is Defense In Depth?
            </a>
            <a
              href="https://blog.totalprosource.com/what-is-layered-security-how-does-it-defend-your-network"
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

//```