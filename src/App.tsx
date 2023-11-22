//primary router component
//in react to do the routing npm install react-router-dom
//react hook library for managing forms and its states is great for forms and ZOD is great for form validation
//TypeScript-first schema declaration and validation library
import {Routes, Route} from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import './globals.css'; //global.css is using tailwind css

const App = () => {
  return (
    <main className = "flex h-screen"> 
    <Routes>
        {/*public routes */}
        <Route element={<AuthLayout />}>
            <Route path= "/sign-in" element={<SigninForm />} />
            <Route path= "/sign-up" element={<SignupForm />} />
        </Route>
        
        {/*private routes */}
        <Route element={<RootLayout />}>
           <Route index element={<Home />} />
        </Route>
    </Routes>
        </main>
  )
}
export default App