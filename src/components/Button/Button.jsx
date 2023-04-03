import { ButtonWrapper, ButtonStyled } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  return (
    <ButtonWrapper>
      <ButtonStyled type="button" onClick={handleLoadMore}>
        Load More
      </ButtonStyled>
    </ButtonWrapper>
  );
};
