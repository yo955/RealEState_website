"use client"; // لا تنسى هذا السطر في Next.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin"; // استيراد TextPlugin

gsap.registerPlugin(TextPlugin); // تسجيل TextPlugin

const TypingAnimation = () => {
  const textRef = useRef(null);
  const texts = ["عمرانى", "عصرى", "متكامل"];
  let currentIndex = 0;

  useEffect(() => {
    if (!textRef.current) return; // التأكد من وجود المرجع

    const typeText = () => {
      const text = texts[currentIndex] + "_"; // إضافة علامة "_" في نهاية النص
      gsap.to(textRef.current, {
        text: text,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(textRef.current, {
            duration: 0.5,
            delay: 0.5, // تأخير قبل المسح
            text: "", // المسح
            onComplete: () => {
              currentIndex = (currentIndex + 1) % texts.length; // التبديل إلى الكلمة التالية
              typeText(); // استدعاء الدالة مرة أخرى
            },
          });
        },
      });
    };

    typeText(); // بدء الأنيميشن

    return () => {
      gsap.killTweensOf(textRef.current); // تنظيف الأنيميشن عند إلغاء المكون
    };
  }, [textRef]); // إضافة textRef كمراقب

  return (
    <div className="flex ">
      <h1 className="text-[8.5em] text-white mr-4 ">نمو</h1> {/* كلمة "نمو" ثابتة */}
      <div
        ref={textRef}
        style={{
          fontFamily: "Red Hat Display",
          color: "white",
          fontSize: "8.5em",
          fontWeight: 500,
        }}
      />
    </div>
  );
};

export default TypingAnimation;
