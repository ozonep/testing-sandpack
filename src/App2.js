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
                            import React from 'react';
                            import ReactDOM from 'react-dom';

                            function Test() {
                                return (
                                    <div>Here's Johnny!</div>
                                )
                            }
                            ReactDOM.render(<Test />, document.getElementById('root'));
                        `
                    },
                    '/index.html': {
                        code: `<link rel="stylesheet" type="text/css" href="./public/style.css"><div id="root"></div></div><script src="./index.js"></script>`
                    },
                    '/public/style.css': {
                        code: `p {color: green}`
                    }
                },
                entry: '/index.html',
                template: "parcel",
                dependencies: {
                    "@babel/core": "7.4.5",
                    "parcel-bundler": "^1.12.3",
                    "react": "^16.8.6",
                    "react-dom": "^16.8.6",
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
