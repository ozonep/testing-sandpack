import {Manager} from 'smooshpack';
import React, {useEffect} from "react";
import "./App.css";


let manager;


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

// every time we run edit function content in Preview will be updated
// edit()

function App(props) {
    useEffect(() => {
        manager = new Manager(
            '#preview',
            {
                files: {
                    '/index.js': {
                        code: `
                        var random = require('math-random');
                        console.log("Random number", random());
                        `,
                    },
                    '/index.html': {
                        code: `<link rel="stylesheet" type="text/css" href="public/style.css"><p>Here we go again just checking text and its length bla bla bla oh man it takes so long</p><a href="./index2.html">I am cool</a><script src="./index.js"></script>`
                    },
                    '/index2.html': {
                        code: `<link rel="stylesheet" type="text/css" href="public/style.css"><p>I am cool2</p>`
                    },
                    '/public/style.css': {
                        code: `p {color: red}`
                    }
                },
                entry: '/index.html',
                template: "parcel",
                dependencies: {
                    "@babel/core": "7.4.5",
                    "parcel-bundler": "^1.12.3",
                    "math-random": "1.0.4"
                },
            }
        );
    }, []);
    return (
        <div className="iframe-container">
            <iframe id="preview"></iframe>
        </div>

    )
}

export default App;
