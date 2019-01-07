import React from 'react';
import 'react-smooshpack/dist/styles.css';

import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider,
} from 'react-smooshpack';

const files = {
  '/index.js': {
    code: "document.body.innerHTML = `<div>${require('uuid/v4')()}</div>`",
  },
};

const dependencies = {
  uuid: 'latest',
};

const App = () => (
  <SandpackProvider files={files} dependencies={dependencies} entry="/index.js">
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <FileExplorer style={{ width: 300 }} />
      <CodeMirror style={{ flex: 1 }} />
      <BrowserPreview style={{ flex: 1 }} />
    </div>
  </SandpackProvider>
);


export default App;
