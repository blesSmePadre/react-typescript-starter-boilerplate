import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    background: #fff;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    html {
      display: flex;
      flex-direction: column;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    margin: 0;
    background-color: #fff;
    line-height: 1;
    text-rendering: optimizeLegibility;
    text-decoration-skip: objects;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  #react-view {
    height: 100%;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity 0.3s;
  }

  ::-moz-input-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity 0.3s;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: none;
    font: inherit;
  }

  ::-ms-clear {
    display: none;
  }

  :-webkit-autofill {
    box-shadow: 0 0 100px #fff inset;
    -webkit-text-fill-color: currentColor;
  }

  :focus {
    outline: none;
  }

  p,
  dd,
  dl,
  figure,
  blockquote {
    margin: 0;
  }

  blockquote,
  q {
    quotes: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  th {
    font-weight: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  audio,
  video {
    display: block;
  }

  img {
    display: block;
    border: none;
  }

  iframe {
    border: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: inherit;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  abbr {
    border: none;
    text-decoration: none;
  }

  b,
  strong {
    font-weight: inherit;
  }

  i,
  em {
    font-style: inherit;
  }

  dfn {
    font-style: inherit;
  }

  mark {
    background-color: transparent;
    color: inherit;
  }

  small {
    font-size: inherit;
  }

  sub,
  sup {
    position: relative;
    vertical-align: baseline;
    font-size: inherit;
    line-height: 0;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-align: left;
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    cursor: pointer;
    -webkit-appearance: none;
  }

  textarea {
    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: none;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline: none;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    padding: 0;
    margin: 0;
    border: none;
  }

  legend {
    display: block;
    padding: 0;
    white-space: normal;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  :-moz-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity 0.3s;
  }

  :-ms-input-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity 0.3s;
  }

  :focus::-webkit-input-placeholder {
    opacity: 0;
  }

  :focus::-moz-input-placeholder {
    opacity: 0;
  }

  :focus:-moz-placeholder {
    opacity: 0;
  }

  :focus:-ms-input-placeholder {
    opacity: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [hidden] {
    display: none;
  }

  ::selection {
    color: #fff;
    background-color: #004fe4;
  }
`;
