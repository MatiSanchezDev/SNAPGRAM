import { Route, Routes } from "react-router-dom";
import "./globals.css";
import { SigninForm, SignupForm } from "./_auth/form/";
import { Home } from "./_root/pages/Home";
import { AuthLayuot } from "./_auth";
import { RootLayout } from "./_root/RootLayout";


export const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayuot />}>
          <Route path="/sign-in" element={<SigninForm/>}/>
          <Route path="/sign-up" element={<SignupForm/>}/>
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </main>
  )
}
