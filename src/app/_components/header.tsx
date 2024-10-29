import Link from "next/link";
import Image from "next/image";
import { REPO_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-20 mt-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={`https://ironweb-research.github.io/${REPO_NAME}/assets/blog/logo/Ironweb_go_back.gif`}
            alt="Logo"
            width={400} // Adjust the width as needed
            height={400} // Adjust the height as needed
            className="mr-2" // Add some margin to the right of the image
          />
          
        </Link>
      </div>
      <h4 className="text-lg md:text-left mt-5 md:pl-8">
        Future is Secure.
      </h4>
    </div>
  );
};

export default Header;

