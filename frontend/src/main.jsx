import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import theme from './theme.js'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { CodeExecutionProvider } from './Context.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <CodeExecutionProvider>
        <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider>
      </CodeExecutionProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
