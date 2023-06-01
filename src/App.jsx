import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './Component/Landing/Landing';
import User from './Component/User/User';
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<Landing />} exact />
            <Route path="/user/:username" element={<User />} exact />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
