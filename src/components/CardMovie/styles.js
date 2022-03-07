import styled from "styled-components";

export const CardMovieInfo = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background-color: #1b2530;
  border-radius: 8px;
  // overflow: hidden;
  img {
    border-radius: 8px;
    cursor: pointer;
  }
  &:hover {
    transform: scale(1.1);
    transition: ease all 0.5s;
    border: 2px solid #19b8da;
    .cardMovieInfo--section {
      display: flex;
      margin-top: 172px;
      border: 2px solid #19b8da;
    }
  }
  .cardMovieInfo--section {
    position: fixed;
    width: inherit;
    flex-direction: column;
    display: none;
    background: linear-gradient(to top, #1b2530, #000);
    align-items: center;
    border-radius: 0 0 8px 8px;
    .cardMovieInfo--playSection {
      width: 85%;
      display: flex;
      justify-content: space-between;
      color: #fff;
      margin: 15px 0;
      .cardMovieInfo--playSectionButton {
        display: flex;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
      }
      .cardMovieInfo--playSectionActions {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      svg {
        margin-right: 10px;
        cursor: pointer;
      }
    }
    .cardMovieInfo--Details {
      width: 85%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #fff;
      text-align: left;
      h3 {
        color: #19b8da;
      }
      h2 {
        font-size: 20px;
        font-weight: bold;
      }
      p {
        font-size: 13px;
      }
      .cardMovieInfo--DetailsFooter {
        width: inherit;
        display: flex;
        align-items: left;
        margin: 10px 0;
        p {
          margin-right: 15px;
        }
        svg {
          cursor: pointer;
        }
      }
    }
  }
`;
