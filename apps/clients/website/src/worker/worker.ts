/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

/* eslint-disable no-restricted-globals */
const workerFunction = function () {
  self.onmessage = (event) => {
    console.log(event.data);
    postMessage('Message has been gotten!');
  };
};

const codeToString = workerFunction.toString();
const mainCode = codeToString.substring(
  codeToString.indexOf('{') + 1,
  codeToString.lastIndexOf('}'),
);

const blob = new Blob([mainCode], { type: 'application/javascript' });
const script = URL.createObjectURL(blob);

export default script;
