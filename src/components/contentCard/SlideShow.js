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
      idx: index,
      src: image,
      isActive: index === 0 ? true : false,
      count: 0,
    })
  );
  const [imageInfo, setImageInfo] = React.useState(initialState);
  const [currentActive, setCurrentActive] = React.useState(0);

  const bClick = () => {
    setCurrentActive((currentActive) => currentActive + 1);
  };

  useEffect(() => {
    setImageInfo((imageInfo) => {
      const infoCopy = [...imageInfo];
      infoCopy[currentActive].isActive = true;
      return infoCopy;
    });
  }, [currentActive]);

  useEffect(() => {
    console.log(imageInfo);
  }, [imageInfo]);

  return (
    <ImageWrapper>
      {images.map((image, index) => {
        return (
          <ImageCust
            key={index}
            src={image}
            className={imageInfo[index].isActive ? "active" : ""}
          />
        );
      })}
      <button onClick={bClick}>click me</button>
    </ImageWrapper>
  );
}

export default SlideShow;
