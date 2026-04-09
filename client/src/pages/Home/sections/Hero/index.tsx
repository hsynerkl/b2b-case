import HeroContent from "./HeroContent";
import ImageContent from "./ImageContent";

const Hero = () => {
  return (
    <section className="bg-primary-light text-dark py-8 lg:py-16">
      <div className="container grid lg:grid-cols-2">
        <HeroContent />

        <ImageContent />
      </div>
    </section>
  );
};

export default Hero;
