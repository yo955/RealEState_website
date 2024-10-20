import TypingAnimation from "../lib/TypingAnimation";

const HeroSection = () => {
  return (
    <section className="w-full bg-black px-4 sm:px-16 lg:px-28 py-10">
      <div className="max-w-full mx-auto flex flex-col items-start">
        <TypingAnimation />
        <div className="w-full sm:w-[70%] lg:w-[63%] pt-[43px] pb-[30px]">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-primary text-right leading-relaxed">
            نوفر لك امتلاك سكنك المثالي المتميز بتصاميم عصرية وتقنيات حديثة،
            <br />
            لتعيش حياة أفضل في منزلك براحة وأمان
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
