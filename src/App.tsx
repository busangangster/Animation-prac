// import React from "react";

import Navbar from "./Navbar";
import CircleCarousel from "./CircleCarousel";
import LandingPage from "./LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyPage from "./Mypage";
import UserInfo from "./UserInfo";
import Favorite from "./Favorite";
import Verification from "./Verification";
import UserInfoEdit from "./UserInfoEdit";
import MovieDetail from "./MovieDetail";
import Survey from "./Survey";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/moviedetail" element={<MovieDetail />} />
        <Route path="/survey" element={<Survey />} />

        <Route path="/mypage" element={<MyPage />}>
          <Route path="userinfo" element={<UserInfo />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="verification" element={<Verification />} />
          <Route path="userinfoedit" element={<UserInfoEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
