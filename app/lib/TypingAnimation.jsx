"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TypingAnimation = () => {
  const textRef = useRef(null);
  const texts = ["عمرانى", "عصرى", "متكامل"];
  let currentIndex = 0;

  useEffect(() => {
    if (!textRef.current) return;

    const typeText = () => {
      const text = texts[currentIndex] + "_";
      gsap.to(textRef.current, {
        text: text,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(textRef.current, {
            duration: 0.5,
            delay: 0.5,
            text: "",
            onComplete: () => {
              currentIndex = (currentIndex + 1) % texts.length; // التبديل إلى الكلمة التالية
              typeText();
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
      <h1 className="text-[3.5em] sm:text-[5em] lg:text-[8.5em] text-white mr-4 ">
        نمو
      </h1>{" "}
      <div
        ref={textRef}
        className=" font-medium text-[3.5em] sm:text-[5em] lg:text-[8.5em] text-white font-sans"
      />
    </div>
  );
};

export default TypingAnimation;
