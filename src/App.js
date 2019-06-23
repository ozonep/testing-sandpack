import { Manager } from 'smooshpack';
import React from "react";


const manager = new Manager(
    '#preview',
    {
      files: {
        '/index.js': {
          code: `console.log('lol it works')`,
        },
        '/index.html': {
          code: `<link rel="stylesheet" type="text/css" href="./public/style.css"><p>HAAA<a href="./index2.html">I am cool</a></p><script src="./index.js"></script>`
        },
        '/index2.html': {
          code: `<link rel="stylesheet" type="text/css" href="./public/style.css"><p>I am cool2</p>`
        },
        '/public/style.css': {
          code: `p {color: green}`
        }
      },
      entry: '/index.html',
      dependencies: {
        uuid: 'latest',
        "@babel/core": "7.4.5",
        "parcel-bundler": "^1.12.3"
      },
    }
);
// When you make a change you can just run `updatePreview`, we'll automatically discover
// which files have changed and hot reload them.
let edit = () => {
  manager.updatePreview({
    files: {
      '/index.js': {
        code: `console.log('New Text!')`,
      },
      '/index.html': {
        code: `<p>I am cool</p><script src="/index.js"></script>`
      }
    },
    entry: '/index.html',
    dependencies: {
      uuid: 'latest',
    },
  });
};



const App = () => (
    <div id="o"></div>
);

export default App;
