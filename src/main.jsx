import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserCotext from './MainDataDirectory/UserCotext.jsx'
const GITHUB_REPO_NAME = 'tailwindcss';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={`/${GITHUB_REPO_NAME}/`}> 
    <UserCotext>
      <App/>
    </UserCotext>
  </BrowserRouter>
)
