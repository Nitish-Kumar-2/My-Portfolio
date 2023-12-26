import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:relative xl:max-w-none xl:top-14 xl:left-3">
      <Image
        src={"/Rahul.png"}
        width={650}
        height={100}
        alt="Avatar image"
        className="translate-z-0 w-full"
      />
    </div>
  );
};

export default Avatar;
