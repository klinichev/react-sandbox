import styled from 'styled-components';

export const ToggleContainer = styled.div`
  & label {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 20px;

      & input {
          opacity: 0;
          width: 0;
          height: 0;
      }

      & span {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: #ccc;
          cursor: pointer;

          &::before {
              position: absolute;
              content: '';
              top: 2px;
              left: 2px;
              width: 26px;
              height: 16px;
              border-radius: 4px;
              border: 1px solid #222;
              background-color: #fff;
          }
      }

      & input:checked + span:before {
        transform: translateX(20px);
      }
  }
`;