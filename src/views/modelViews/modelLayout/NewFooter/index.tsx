'use client';
import { TextContainer, TextContainerMain } from './MainFooter.styled';
import NewFooter from './MainFooter';
const NewModelFooter = () => {
  return (
    <TextContainerMain>
      <TextContainer>
        <NewFooter />
      </TextContainer>
    </TextContainerMain>
  );
};

export default NewModelFooter;
