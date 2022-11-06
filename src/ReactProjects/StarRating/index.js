import React, { useState } from "react";
import { Star, Wrapper } from "./styles";
const StarRating = () => {
  const [stars, setStars] = useState(
    new Array(5).fill({ background: "black" })
  );
  const [hasBeenClicked, setClicked] = useState(-1);

  const settingStars = (index) => {
    const copyStars = [...stars];

    for (let i = 0; i < copyStars.length; i++) {
      if (index >= i) {
        copyStars[i] = { background: "#feb614" };
      } else {
        copyStars[i] = { background: "black" };
      }
    }

    setStars(copyStars);
  };

  return (
    <Wrapper
      onMouseLeave={() =>
        hasBeenClicked >= 0
          ? settingStars(hasBeenClicked)
          : setStars(new Array(5).fill({ background: "black" }))
      }
    >
      {stars.map((star, i) => (
        <Star
          onClick={() => setClicked(i)}
          onMouseEnter={() => settingStars(i)}
          key={i}
          style={star}
        />
      ))}
    </Wrapper>
  );
};

export default StarRating;
