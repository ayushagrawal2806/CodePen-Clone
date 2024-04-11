import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Userprovidercontext from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Userprovidercontext>
      <App />
     </Userprovidercontext>
    
  </React.StrictMode>,
)
