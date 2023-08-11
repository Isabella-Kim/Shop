//css
import "./css/App.css";
import "./css/reset.css";
import "./css/Header.css";
import "./css/Blog.css";
import "./css/OurStory.css";
//library
import {
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useState } from "react";
//component
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Detail from "./component/Detail";
import productData from "./component/productData";
import Shop from "./component/Shop";
import Blog from "./component/Blog";
import OurStory from "./component/OurStory";

function App() {
  let [data] = useState(productData);
  return (
    <div className="App">
      {/* 헤더영역 */}
      <Header className="header" />
      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/Shop" element={<Shop data={data} />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/OurStory" element={<OurStory />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
      {/* 푸터 영역 */}
      <Footer className="footer" />
    </div>
  );
}

export default App;
