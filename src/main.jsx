
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./layout/firebase/auth";
import "./index.scss";
import Loader from './layout/layoutcomponent/loaders';
import { Routingdata } from './common/routingdata';
import Switcher1 from './components/pages/switcher/switcher1/switcher1';


const App = React.lazy(() => import("./layout/App"));
const Switcherapp = React.lazy(() => import("./layout/Switcherapp"));
const Custompages = React.lazy(() => import("./layout/custompages"));


//charts
//pages
const SignUp = React.lazy(() =>
  import("./components/pages/authentication/signup/signup")
);
const SignIn = React.lazy(() =>
  import("./components/pages/authentication/signin/signin")
);
const ForgotPassword = React.lazy(() =>
  import("./components/pages/authentication/forgotpassword/forgotpassword")
);
const Lockscreen = React.lazy(() =>
  import("./components/pages/authentication/lockscreen/lockscreen")
);
const ResetPassword = React.lazy(() =>
  import("./components/pages/authentication/resetpassword/resetpassword")
);
const UnderConstruction = React.lazy(() =>
  import(
    "./components/pages/authentication/underconstruction/underconstruction"
  )
);
const Error404 = React.lazy(() =>
  import("./components/pages/authentication/404error/404error")
);
const Error500 = React.lazy(() =>
  import("./components/pages/authentication/500error/500eror")
);


const AuthLogin = React.lazy(() => import("./layout/firebase/login"));
const AuthSignup = React.lazy(() => import("./layout/firebase/Signup"));
//Form
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
            <Route index element={<AuthLogin />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/login`} element={<AuthLogin />} />
            <Route path={`${import.meta.env.BASE_URL}authentication/signup`} element={<AuthSignup />} />
          </Route>

          <Route path={`${import.meta.env.BASE_URL}`} element={<App />} >
            {Routingdata.map((idx) => (
              <Route path={idx.path} element={idx.element} key={Math.random()} />
            ))}
          </Route>

          <Route path={`${import.meta.env.BASE_URL}`} element={<Custompages />}>
            {/* <Route path={`${import.meta.env.BASE_URL}pages/authentication/sigin`} element={<SignIn />} /> */}
            <Route path={`${import.meta.env.BASE_URL}pages/authentication/sigup`} element={<SignUp />} />
            <Route path={`${import.meta.env.BASE_URL}pages/authentication/forgotpassword`} element={<ForgotPassword />} />
            <Route path={`${import.meta.env.BASE_URL}pages/authentication/resetpassword`} element={<ResetPassword />} />
            <Route path={`${import.meta.env.BASE_URL}pages/authentication/lockscreen`} element={<Lockscreen />} />
            <Route path={`${import.meta.env.BASE_URL}pages/authentication/underconstruction`} element={<UnderConstruction />} />
            <Route path={`${import.meta.env.BASE_URL}pages/authentication/404error`} element={<Error404 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/authentication/500error`} element={<Error500 />} />

            <Route path="*" element={<Error404 />} />
          </Route>

          <Route path={`${import.meta.env.BASE_URL}`} element={<Switcherapp />} >
            <Route path={`${import.meta.env.BASE_URL}pages/switcher/switcher1`} element={<Switcher1 />} />
          </Route>
          <Route></Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
);
