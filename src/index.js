import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';


function mainRender() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }
  
  if (process.env.NODE_ENV !== "production") {
    // Workaround for https://github.com/facebook/create-react-app/issues/6399
    // until it gets fixed upstream
    setTimeout(() => {
      mainRender();
    }, 1000);
  } else {
    mainRender();
  }



serviceWorker.unregister();
