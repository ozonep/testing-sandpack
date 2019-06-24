import {Manager} from 'smooshpack';
import React, {useEffect} from "react";
import "./App.css";

import {html} from './PWA Project/indexhtml';
import {manifestjson} from "./PWA Project/manifestjson";
import {portfolio1html} from "./PWA Project/portfolio1html";
import {portfolio2html} from "./PWA Project/portfolio2html";
import {serviceworker} from "./PWA Project/serviceworker";
import {stylecss} from "./PWA Project/stylecss";
import {mainjs} from "./PWA Project/js/mainjs";
import {drymenujs} from "./PWA Project/js/drymenujs";
import {clearcss} from "./PWA Project/css/clearcss";
import {commoncss} from "./PWA Project/css/commoncss";
import {caroufredselcss} from "./PWA Project/css/caroufredselcss";


let manager;
function NewNewApp(props) {
    useEffect(() => {
        manager = new Manager(
            '#preview',
            {
                files: {
                    '/index.html': {
                        code: html
                    },
                    '/manifest.webmanifest': {
                        code: manifestjson
                    },
                    '/single-portfolio.html': {
                        code: portfolio1html
                    },
                    '/single-portfolio2.html': {
                        code: portfolio2html
                    },
                    '/service_worker.js': {
                        code: serviceworker
                    },
                    '/style.css': {
                        code: stylecss
                    },
                    '/js/main.js': {
                        code: mainjs
                    },
                    '/js/jquery.dryMenu.js': {
                        code: drymenujs
                    },
                    '/css/clear.css': {
                        code: clearcss
                    },
                    '/css/common.css': {
                        code: commoncss
                    },
                    '/css/carouFredSel.css': {
                        code: caroufredselcss
                    }
                },
                entry: '/index.html',
                template: "parcel",
                dependencies: {
                    "@babel/core": "7.4.5",
                    "parcel-bundler": "^1.12.3"
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

export default NewNewApp;
