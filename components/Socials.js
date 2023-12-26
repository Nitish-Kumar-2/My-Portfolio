import Link from "next/link";
import {
  RiGithubLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiTwitterLine,
  RiDownloadLine,
} from "react-icons/ri";

const Socials = () => {
  const handleDownload = () => {
    // Replace 'path/to/resume.pdf' with the correct path to your PDF file
    const pdfPath = "/Nitish_Kumar.pdf";

    // Create a link element
    const link = document.createElement("a");

    // Set the download attribute with the desired file name
    link.download = "Nitish_Kumar.pdf";

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/Nitish-Kumar-2"}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.instagram.com/nitish_sutharr?igsh=dXpwcXBmcXVraWQ1"}
        className="hover:text-accent transition-all duration-300 "
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={
          "https://www.facebook.com/nitishsuthar.nitishsuthar.9?mibextid=rS40aB7S9Ucbxw6v"
        }
        className="hover:text-accent transition-all duration-300 "
      >
        <RiFacebookLine />
      </Link>

      <Link
        href={
          "https://twitter.com/Nitishkumar_147?t=pAsUhou4GX4-hveoUdP8AQ&s=08"
        }
        className="hover:text-accent transition-all duration-300 "
      >
        <RiTwitterLine />
      </Link>
      <button
        onClick={handleDownload}
        className="hover:bg-accent hover:text-white flex gap-x-2 text-accent border px-4 py-1 font-light rounded-md border-accent bg-transparent"
      >
        Resume
        <RiDownloadLine className="my-auto" />
      </button>
    </div>
  );
};

export default Socials;
