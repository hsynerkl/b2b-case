import { Button } from "@/components/ui/Button";

const HeroContent = () => {
  return (
    <div className="lg:order-1 flex flex-col justify-center gap-4 order-2">
      <h1 className="font-extrabold leading-tight text-4xl lg:text-start text-center lg:max-w-lg">
        Outperform the Competition with Enterprise-Grade AI Solutions
      </h1>

      <p className="font-medium text-sm lg:text-start text-center lg:max-w-xs">
        At AgustaSoft, we build custom AI and machine learning models to
        streamline your business operations. From customer prediction to
        recommendation engines and process automation, we give you a competitive
        edge.
      </p>

      <Button className="mx-auto lg:mx-0">Get Started</Button>
    </div>
  );
};

export default HeroContent;
