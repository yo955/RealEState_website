import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 dark:bg-black border dark:border-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="flex flex-col items-center order-3 md:order-1">
          <h3 className="text-xl font-bold mb-4">تابعنا</h3>
          <div className="flex justify-around items-center w-1/4">
            <FaFacebook className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaTwitter className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col items-center order-2">
          <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
          <ul>
            <li>
              <Link href="#" prefetch={true} className="hover:underline">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="#"prefetch={true} className="hover:underline">
                مشاريعنا
              </Link>
            </li>
            <li>
              <Link href="#" prefetch={true} className="hover:underline">
                من نحن
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center order-1 md:order-3">
          <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
          <p>+966 1234 5678</p>
          <p>info@nomu.com.sa</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Nomu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
