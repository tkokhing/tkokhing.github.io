// import Link from "next/link";
import Image from "next/image";
import { IRONWEB_PROFILE_LOGO_PNG_URL } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Image
          src={IRONWEB_PROFILE_LOGO_PNG_URL}
          alt="Logo"
          width={400}
          height={400}
          className="mr-2" // Add "logo-image" class, if need to toggle logo
        />
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Future is Secure.
      </h4>
    </section>
  );
}
