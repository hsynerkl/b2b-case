import Logo from "@/assets/images/logowhite.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = {
    services: {
      title: "Services",
      links: [
        "UI/UX Design",
        "Software Development",
        "SEO & Performance",
        "Front-End Development",
        "DevOps",
        "QA & Test Automation",
      ],
    },
    solutions: {
      title: "Solutions",
      links: [
        "B2B Solutions",
        "Web & Mobile Dev",
        "AI & Automation",
        "Cloud",
        "Cyber security",
        "Digital Trans formation",
      ],
    },
    sectors: {
      title: "Sectors",
      links: [
        "Health care",
        "Finance & Banking",
        "Logistics",
        "Retail Markets",
        "Hotel Management",
        "Manufacturing Industry",
      ],
    },
    support: {
      title: "Support",
      links: [
        "FAQ",
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "Submit Support Ticket",
      ],
    },
  };

  const contactInfo = ["bilgi@agustasoft.com", "info@agustasoft.com"];

  return (
    <footer className="bg-dark py-8 lg:py-16 mt-8 lg:mt-16">
      <div className="container">
        <img src={Logo} alt="logo" className="w-auto h-17" />

        <p className="text-light mt-4 text-xs">
          Your innovative and reliable technology partner on your digital
          transformation journey.
        </p>

        <div className="grid lg:grid-cols-12 border-t border-t-muted mt-8 pt-8">
          <div className="lg:col-span-9 lg:border-r lg:pr-8 border-r-muted grid grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(footerData).map((section, idx) => (
              <div key={idx}>
                <h3 className="text-light font-semibold mb-4">
                  {section.title}
                </h3>

                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to="/"
                        className="text-light text-sm hover:text-primary transition"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 mt-4 lg:mt-0 lg:pl-8">
            <h3 className="text-light font-semibold my-4">E-Mail</h3>

            <ul className="space-y-2">
              {contactInfo.map((email, idx) => (
                <li key={idx}>
                  <a
                    href={`mailto:${email}`}
                    className="text-light text-sm hover:text-primary transition"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
