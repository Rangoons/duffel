import styled from 'styled-components';
import { Icon } from '@blueprintjs/core';
import colors from './colors';

export const LoginWrapper = styled.div`
  width: 30%;
  min-width: 25rem;
  background: #fff;
  border-radius: 5px;
  padding: 2rem;
  -webkit-box-shadow: 0px 0px 20px 3px rgba(16, 22, 26, 0.2);
  -moz-box-shadow: 0px 0px 20px 3px rgba(16, 22, 26, 0.2);
  box-shadow: 0px 0px 20px 3px rgba(16, 22, 26, 0.2);
  display: flex;
  flex-flow: column wrap;
`;

export const Logo = styled.img`
  width: 15%;
  min-width: 250px;
  height: auto;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 20px auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 3px solid #fff;
  color: #fff;
  overflow: hidden;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  padding: 15px 50px;
  text-align: center;

  margin: 5px 0px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  width: 100%;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  align-self: auto;
  background: ${colors.pink};

  &:hover {
    background: ${colors.darkPink};
  }
  &:active {
    border-color: ${colors.darkPink};
    color: ${colors.darkPink};
  }
  &:disabled {
    background: ${colors.lightGray};
    cursor: not-allowed;
  }
`;

export const StyledIcon = styled(Icon)`
  left: 70%;
  opacity: 0;
  top: 1rem;
  position: absolute;
  height: 100%;
  font-size: 125%;
  line-height: 3.5;
  color: #fff;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;

  ${StyledButton}:hover & {
    left: 80%;
    opacity: 1;
  }
  ${StyledButton}:active & {
    left: 80%;
    opacity: 1;
    color: ${colors.darkBlue};
  }
  ${StyledButton}:disabled & {
    opacity: 0;
  }
`;

export const ErrorWrapper = styled.p`
  color: ${colors.darkRed};
`;

export const GradientContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
`;
