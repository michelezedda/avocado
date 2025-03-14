import Newsletter from "../components/Newsletter";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex flex-col justify-center bg-linear-to-b from-white to-amber-950/80 mt-6 pt-20 pb-10">
        <div className="flex items-end justify-center mb-4">
          <img src="/media/logo.png" alt="avocado logo" className="w-32" />
          <span className="ml-2 text-amber-950 text-lg font-medium">
            &#169; {new Date().getFullYear()}
          </span>
        </div>
        <Newsletter />
        <div className="flex flex-col justify-center items-center mt-10 gap-3">
          <span className="text-lg">Follow Us</span>
          <div className="flex gap-2 text-xl">
            <FaFacebookF className="cursor-pointer hover:scale-105" />
            <FaInstagram className="cursor-pointer hover:scale-105" />
            <FaPinterestP className="cursor-pointer hover:scale-105" />
            <FaTiktok className="cursor-pointer hover:scale-105" />
            <FaYoutube className="cursor-pointer hover:scale-105" />
          </div>
        </div>
        <div className="flex justify-around items-center mt-10">
          <div className="flex">
            <ul>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Media Mentions</li>
            </ul>
          </div>
          <div className="flex">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
