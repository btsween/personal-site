import React, { useEffect } from "react";
import styled from "styled-components";
import Picture from "../../assets/photos/picture.png";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3px;
`;

const ImageCust = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  display: none;

  &.active {
    display: flex;
  }
`;

function SlideShow() {
  const images = [Picture, Picture, Picture];
  const initialState = [];
  images.map((image, index) =>
    initialState.push({
      id: index,
      src: image,
      isActive: index === 0 ? true : false,
    })
  );
  const [imageInfo, setImageInfo] = React.useState(initialState);
  const [currentActive, setCurrentActive] = React.useState(0);

  const bClick = () => {
    setCurrentActive(currentActive + 1);
  };

  useEffect(() => {
    const info = imageInfo;
    console.log("ok...", currentActive);
    info[currentActive].isActive = true;
    setImageInfo(info);
  }, [currentActive]);

  return (
    <ImageWrapper>
      {images.map((image, index) => {
        return (
          <ImageCust
            key={index}
            src={image}
            // className={(index, imageInfo[index].isActive ? "active" : "")}
            className={"hi" + index}
          ></ImageCust>
        );
      })}
      <button onClick={bClick}>click me</button>
    </ImageWrapper>
  );
}

export default SlideShow;
