/** @jsxImportSource @emotion/react */
import { FC, useState, useEffect } from "react";
import { css } from "@emotion/react";

const foodImages = [
  "/images/sejouk.png",
  "/images/zaatar.png",
  "/images/jebne.png",
  "/images/lahm-bi-ajeen.png",
  "/images/keshek.png",
];

const drinkImages = [
  "/images/tea.png",
  "/images/coffee.png",
  "/images/hot-chocolate.png",
];

interface ImageShufflerProps {
  category: "food" | "drink"; // ✅ Determines if images are food or drinks
  customCss?: any; // ✅ Allows passing custom styles
}

const ImageShuffler: FC<ImageShufflerProps> = ({ category, customCss }) => {
  const images = category === "food" ? foodImages : drinkImages;
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000); // ✅ Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      css={[
        css`
          width: 300px;
          height: 240px;
          overflow: hidden;
          border: 3px solid white;
          border-radius: 10px;
        `,
        customCss, // ✅ Apply custom styles passed as a prop
      ]}
    >
      <img
        src={currentImage}
        alt="Shuffling Manakish"
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `}
      />
    </div>
  );
};

export default ImageShuffler;
