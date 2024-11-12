"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // إغلاق القائمة
  };

  return (
    <header className=" py-6 bg-gray-900 dark:bg-black ">
      <div className="mx-auto max-w-screen-xl container">
        <div className="flex h-16 items-center justify-between">
          {/* اللوجو يظهر على اليسار في جميع الشاشات */}
          <div className="flex items-center gap-4">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <div className="relative w-24 h-24">
                <Image
                  className="z-10 object-contain"
                  src="/logo.svg"
                  alt="شعار الموقع"
                  fill // استخدم fill بدلاً من width و height
                  sizes="(max-width: 640px) 100vw, 50vw" // أضف sizes لتحديد الحجم النسبي
                />
              </div>
            </Link>
          </div>
          <ThemeToggle />
          {/* أيقونة القائمة (Menu Icon) تظهر في الشاشات الصغيرة والمتوسطة */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* القائمة تظهر في الشاشات الكبيرة */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm font-bold">
                <li>
                  <Link
                    className="text-white transition hover:text-gray-500/75 text-xl"
                    href="/"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white transition hover:text-gray-500/75 text-xl"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-gray-500/75 text-xl"
                    href="/projects"
                  >
                    مشاريعنا
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/201555909247"
                    className="text-white transition hover:text-gray-500/75 text-xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* قائمة الهواتف تظهر في الشاشات الصغيرة */}
      {isMenuOpen && (
        <div className="md:hidden  bg-gray-900 dark:bg-black p-4">
          <nav aria-label="Global">
            <ul className="flex flex-col items-end text-sm font-bold gap-4">
              <li>
                <Link
                  className="text-white transition hover:text-gray-500/75"
                  href="/"
                  onClick={closeMenu} // غلق القائمة عند النقر على الرابط
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-gray-500/75"
                  href="/about-us"
                  onClick={closeMenu} // غلق القائمة عند النقر على الرابط
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-gray-500/75"
                  href="/projects"
                  onClick={closeMenu} // غلق القائمة عند النقر على الرابط
                >
                  مشاريعنا
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/201555909247"
                  className="text-white transition hover:text-gray-500/75"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu} // غلق القائمة عند النقر على الرابط
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
