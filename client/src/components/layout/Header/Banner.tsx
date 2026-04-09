import TrImg from "@assets/images/tr.png";
import RuImg from "@assets/images/ru.png";
import { Link } from "react-router-dom";

const languages = [
  { alt: "tr", name: "Türkçe", flag: TrImg },
  { alt: "ru", name: "Rusça", flag: RuImg },
];

const Banner = () => {
  return (
    <aside className="container py-3 text-dark flex justify-between">
      <div className="flex gap-2.5 items-center">
        {languages.map((lang) => (
          <button
            //onclick eklemiyorum case dışı diye
            key={lang.alt}
            className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition"
          >
            <img src={lang.flag} className="h-4 w-4" alt={lang.alt} />
            <span className="text-xs font-medium">{lang.name}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center text-[13px]">
        <p className="lg:block hidden">Taking your career to the next level.</p>

        <Link to="/" className="underline ml-0.5 font-bold">
          AgustaSoft Career
        </Link>
      </div>
    </aside>
  );
};

export default Banner;
