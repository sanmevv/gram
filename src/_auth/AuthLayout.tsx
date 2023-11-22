import { Outlet,Navigate } from 'react-router-dom';
const AuthLayout = () => {
    const isAuthenticated = false;
  return (
    <>
    {isAuthenticated ?(
        <Navigate to="/" />
    ):
     <>
     <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
     </section>
     <img 
     src = "assets\images\Film Photography Darkroom_ develop black and white film rolls in daylight - 35mminstyle (1).jpg"
     alt="logo"
     className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
     />
     </>
     }</>
  )
}

export default AuthLayout