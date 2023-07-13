import Image from "next/image";
import image from "./LoginPagePhoto.png";
import Link from "next/link";

export default function SignUp() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <Image width={800} height={500} src={image} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          maxLength={10}
          type="tel"
          placeholder="Contact Number"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-primary mt-4 w-full">
        <svg width="1200px" height="800px" viewBox="0 0 1024 1024" className="mx-auto h-3.5 w-3.5"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M522.24 81.984a308.288 308.288 0 0 0-308.352 308.352c0 224.96 308.352 461.632 308.352 461.632s85.056-65.6 165.888-160.256a22.4 22.4 0 0 0-15.744-38.4 22.016 22.016 0 0 0-17.152 8.512l-0.064-0.064 74.496-109.376 3.52 2.176a21.568 21.568 0 0 0-3.968 11.968 22.4 22.4 0 0 0 22.4 22.464 22.272 22.272 0 0 0 20.992-15.36c33.92-58.56 57.92-121.216 57.92-183.232A308.224 308.224 0 0 0 522.24 81.984z" fill="" /><path d="M716.864 620.416m-22.4 0a22.4 22.4 0 1 0 44.8 0 22.4 22.4 0 1 0-44.8 0Z" fill="" /><path d="M522.24 126.784a263.808 263.808 0 0 0-263.552 263.552c0 163.008 191.168 341.824 263.552 403.648 72.384-61.824 263.552-240.64 263.552-403.648A263.872 263.872 0 0 0 522.24 126.784z m0 432.576a172.032 172.032 0 1 1 0-344.064 172.032 172.032 0 0 1 0 344.064z" fill="#FF6749" /><path d="M522.24 387.328m-127.168 0a127.168 127.168 0 1 0 254.336 0 127.168 127.168 0 1 0-254.336 0Z" fill="#FFFFFF" /><path d="M186.304 936.384m-22.4 0a22.4 22.4 0 1 0 44.8 0 22.4 22.4 0 1 0-44.8 0Z" fill="" /><path d="M263.04 913.984a22.464 22.464 0 0 0-22.4 22.4v0.064c0 12.288 10.112 22.4 22.4 22.4h595.2c12.288 0 22.4-10.048 22.4-22.4v-0.064a22.464 22.464 0 0 0-22.4-22.4h-595.2z" fill="" /><path d="M292.8 359.36a16 16 0 0 1-15.744-18.816c25.6-144 153.28-183.616 158.656-185.216a16 16 0 0 1 9.152 30.656c-4.672 1.408-114.24 35.968-136.384 160.192a16 16 0 0 1-15.68 13.184z" fill="#FFFFFF" /></svg>
         

          Please on click this location icon
        </button>

        <div className="dropdown dropdown-top mt-4 ">
          <label tabIndex={0} className="btn m-1 ">
            Select Your Profession
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Except terms and conditions</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <Link
            href="login"
            className="btn btn-primary mt-4 w-full hover:bg-blue-700"
            type="submit"
          >
            Login
          </Link>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account{"    "}
          <Link
            className="text-green-600 hover:underline hover:underline-offset-4"
            href="login"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}
