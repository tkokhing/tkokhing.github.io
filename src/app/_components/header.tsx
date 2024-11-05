import Link from "next/link";
import Image from "next/image";
import { IRONWEB_PROFILE_LOGO_PNG_URL } from "@/lib/constants";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-20 mt-8">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src= {IRONWEB_PROFILE_LOGO_PNG_URL}
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

