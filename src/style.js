import styled from "styled-components";

export const AppContainer = styled.main`
  padding: 10px;
  background-color: #eeeeee;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  .data__table {
    background-color: #fff;
    width: 100%;
    overflow: auto;
    max-height: calc(100vh - 20px);
    &_column {
      width: max(1218px, 100%);
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      background-color: #fff;
      &:first-child {
        position: sticky;
        top: 0;
        left: 0;
        z-index: 1;
      }
      &__row {
        padding: 30px 40px;
        font-weight: 500;
        &.title {
          padding: 20px 40px;
          font-weight: 700;
        }
        &.date {
          color: var(--almost-black);
          display: flex;
          gap: 16px;
          button {
            padding: 12px 16px 10px;
          }
        }
        &.time {
          font-weight: 700;
        }
        &.id {
          color: #ccc;
        }
        &.delivered {
          color: var(--yellow);
        }
        &.canceled {
          color: var(--red);
        }
        &.pending {
          color: var(--green);
        }
      }
      &:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
    }
  }
  .error {
    background-color: aliceblue;
    padding: 30px;
    p {
      text-align: center;
      max-width: 836px;
      margin: auto;
    }
  }
`;
