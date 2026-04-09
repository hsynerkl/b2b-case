import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

const PoweredBy = () => {
  return (
    <section className="overflow-hidden border-y-gray border-y text-dark">
      <div className="logos-slider-track py-4 animate-slide-logos hover:[animation-play-state:paused]">
        {[...Array(24)].map((_, idx) => (
          <Link to={"/"} key={idx} className="cursor-pointer py-4 group">
            <img
              src={Logo}
              alt="AgustaSoft"
              className="h-12 w-auto group-hover:-translate-y-1 transition"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PoweredBy;
