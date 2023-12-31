import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center lg:mt-0 px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 md:py-8">
          <Link href={"/"}>
            <Image
              src={"/Nitish.png"}
              width={200}
              height={48}
              alt=""
              priority={true}
            />
          </Link>
          {/*socails */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
