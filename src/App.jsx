import Header from "./Header.jsx"
import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import Services from "./Services.jsx";
import Footer from "./Footer.jsx";
import Contacts from "./Contacts.jsx";
import Projects from './Projects.jsx'
import { ToastContainer } from "react-toastify";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
      
      <Home/>
     <Services/>
     <Skills/>
     <Projects/>
      <Contacts/>
      <Footer/>

      <ToastContainer
       position="top-center"
        autoClose={3000}        
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </QueryClientProvider>
      
      
      
    </>
  );

}

export default App
