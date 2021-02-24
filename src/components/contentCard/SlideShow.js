import React, { useEffect } from "react";
import styled from "styled-components";
import Picture from "../../assets/photos/picture.png";
import Video from "../../assets/photos/vid.mp4";
import RightIcon from "../../assets/icons/chevron-right.svg";
import LeftIcon from "../../assets/icons/chevron-left.svg";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 3px;
  min-height: 34rem;
`;

const StyledImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  display: none;
  min-height: 34rem;
  object-fit: none;

  &.active {
    display: flex;
  }
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chevron = styled.img`
  background-size: cover;
  height: 2rem;
  width: 2rem;
`;

const Button = styled.button`
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  background-color: rgba(71, 130, 218, 0.05);
  display: flex;
  border-radius: 5px;
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-bottom: solid 1px black;
  margin-top: 0.75rem;
`;

const StyledVideo = styled.video`
  display: none;
  min-height: 30rem;

  &.active {
    display: flex;
  }
`;

const ImageDot = styled.button`
  height: 1rem;
  width: 1rem;
  background-color: white;
  background-color: rgba(71, 130, 218, 0.3);
  margin: 6px;
  border-radius: 8px;

  &.active {
    background-color: rgba(71, 130, 218, 0.88);
  }
`;

function SlideShow(props) {
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

  const handleLeftArrowClick = () => {
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

  const handleRightArrowClick = () => {
    if (currentActive < imageInfo.length - 2) {
      setImageInfo((imageInfo) => {
        const infoCopy = [...imageInfo];
        infoCopy[currentActive].isActive = false;
        return infoCopy;
      });
      setCurrentActive((currentActive) => currentActive + 1);
    } else {
      // TODO: show effect for no further images or only show when useful
    }
  };

  const handleDotClick = (dotIndex) => {
    if (currentActive !== dotIndex) {
      setImageInfo((imageInfo) => {
        const infoCopy = [...imageInfo];
        infoCopy[currentActive].isActive = false;
        return infoCopy;
      });
      setCurrentActive(dotIndex);
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
      <ImageWrapper className="image-wrapper">
        {props.assets.map((asset, index) => {
          return asset.type === "photo" ? (
            <StyledImage
              key={index}
              src={Picture}
              className={imageInfo[index].isActive ? "active" : ""}
            />
          ) : (
            <StyledVideo
              key={index}
              src={Video}
              controls
              autoplay
              format="video/mp4"
              className={imageInfo[index].isActive ? "active" : ""}
            />
          );
        })}
      </ImageWrapper>
      <NavigationContainer>
        <Button onClick={handleLeftArrowClick}>
          <Chevron src={LeftIcon}></Chevron>
        </Button>
        {props.assets.map((asset, index) => {
          return (
            <ImageDot
              key={index}
              val={index}
              className={imageInfo[index].isActive ? "active" : ""}
              onClick={handleDotClick.bind(this, index)}
            />
          );
        })}
        <Button onClick={handleRightArrowClick}>
          <Chevron src={RightIcon}></Chevron>
        </Button>
      </NavigationContainer>
    </Carousel>
  );
}

export default SlideShow;
