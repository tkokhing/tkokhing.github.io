import Link from "next/link";
import Image from "next/image";
import { REPO_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        <Image
          src={`https://ironweb-research.github.io/${REPO_NAME}/assets/blog/logo/Ironweb_github_profile.gif`}
          alt="Logo"
          width={100} // Adjust the width as needed
          height={100} // Adjust the height as needed
          className="mr-2" // Add some margin to the right of the image
        />
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Back.
      </h4>
      </Link>
    </h2>
  );
};

export default Header;
