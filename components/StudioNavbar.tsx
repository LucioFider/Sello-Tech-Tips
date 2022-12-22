import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#fabb0a] items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
          Go to website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#f7ab0a]">
          <h1 className="font-bold text-white">
            Want the latest tech news sent to your inbox daily?
          </h1>
          <Link
            href="https://sello-blog.vercel.app"
            className="text-[#f7ab0a] font-bold ml-2"
          >
            www.sellohub.com
          </Link>
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
export default StudioNavbar;
