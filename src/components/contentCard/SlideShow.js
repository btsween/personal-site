import React, { useEffect } from "react";
import styled from "styled-components";
import Picture from "../../assets/photos/picture.png";
import RightIcon from "../../assets/icons/chevron-right.svg";
import LeftIcon from "../../assets/icons/chevron-left.svg";

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

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftButton = styled.img`
  background-size: cover;
  height: 2rem;
  width: 2rem;
`;

const Button = styled.button`
  background: gray;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
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

  const nextLeft = () => {
    if (currentActive > 0) {
      setImageInfo((imageInfo) => {
        const infoCopy = [...imageInfo];
        infoCopy[currentActive].isActive = false;
        return infoCopy;
      });
      setCurrentActive((currentActive) => currentActive - 1);
    } else {
      // TODO: show effect for no further images or only show when useful
    }
  };
  const nextRight = () => {
    if (currentActive !== imageInfo.length - 1) {
      setCurrentActive((currentActive) => currentActive + 1);
    } else {
      // TODO: show effect for no further images or only show when useful
    }
  };

  useEffect(() => {
    setImageInfo((imageInfo) => {
      const infoCopy = [...imageInfo];
      infoCopy[currentActive].isActive = true;
      return infoCopy;
    });
  }, [currentActive]);

  return (
    <Carousel>
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
      </ImageWrapper>
      <NavigationContainer>
        <Button onClick={() => nextLeft}>
          <LeftButton src={LeftIcon}></LeftButton>
        </Button>
        <Button onClick={() => nextRight}>
          <LeftButton src={RightIcon}></LeftButton>
        </Button>
      </NavigationContainer>
    </Carousel>
  );
}

export default SlideShow;
