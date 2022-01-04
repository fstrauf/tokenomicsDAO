import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 15em;
  height: 2em;
  background: ${({ theme }) => theme.colorbase};
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    border: none;
    ${({ hasFocus }) => hasFocus && css`
      border: ${({ theme }) => theme.iconcolor} 1px solid;
    `}
    font-size: 1em;
    transition: 100ms;
    border-radius: 0.6rem;
    color: ${({ theme }) => theme.iconcolor};
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: ${({ theme }) => theme.iconcolor};
    pointer-events: none;
  }
`