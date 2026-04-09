import OfisImage from "@assets/images/ofis.jpg";
import { useState } from "react";

const ImageContent = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="lg:order-2 min-h-60 sm:min-h-80 md:min-h-90 lg:min-h-100 flex justify-center relative items-center order-1">
      <div className="relative">
        <img
          src={OfisImage}
          alt="ofis"
          className="rounded-lg shadow-2xl"
          onLoad={() => setImageLoaded(true)}
        />

        {imageLoaded && (
          <div className="absolute -bottom-5 -right-2.5 sm:-right-5 bg-dark text-light shadow-2xl rounded-lg px-4 py-2">
            <p className="text-center font-extrabold">8+ </p>
            <p className="text-center text-xs font-light">
              Years of Experience
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageContent;
