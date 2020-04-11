import { css } from '@emotion/core';

export default css`
  input,
  label,
  select,
  button,
  textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;

    font-size: 13px;
    font-family: Arial;
  }

  input:focus {
    outline: 0;
  }
  input,
  textarea {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'],
  input[type='checkbox'],
  input[type='radio'],
  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  input[type='date'],
  input[type='datetime'],
  input[type='datetime-local'],
  input[type='email'],
  input[type='month'],
  input[type='number'],
  input[type='password'],
  input[type='range'],
  input[type='search'],
  input[type='tel'],
  input[type='text'],
  input[type='time'],
  input[type='url'],
  input[type='week'] {
  }

  input[type='checkbox'],
  input[type='radio'] {
    width: 13px;
    height: 13px;
  }

  input[type='file'] {
  }

  input[type='search'] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
  }

  ::-webkit-search-decoration {
    display: none;
  }

  button,
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    overflow: visible;
    width: auto;
  }

  ::-webkit-file-upload-button {
    padding: 0;
    border: 0;
    background: none;
  }

  textarea {
    vertical-align: top;

    overflow: auto;
  }

  select {
  }

  select[multiple] {
    vertical-align: top;
  }
`;
