import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Preloader from "./Components/Preloader";
import Loadable from "react-loadable";
import { Toaster } from "react-hot-toast";
import Nav from "./Components/Nav";

const Blog = Loadable({
	loader: () => import("./Pages/Blog"),
	loading: Preloader,
});
const Works = Loadable({
	loader: () => import("./Pages/Works"),
	loading: Preloader,
});
const Resume = Loadable({
	loader: () => import("./Pages/Resume"),
	loading: Preloader,
});
const Contact = Loadable({
	loader: () => import("./Pages/Contact"),
	loading: Preloader,
});
const Home = Loadable({
	loader: () => import("./Pages/Home"),
	loading: Preloader,
});
const About = Loadable({
	loader: () => import("./Pages/About"),
	loading: Preloader,
});
const Main = Loadable({
	loader: () => import("./Pages/Main"),
	loading: Preloader,
});
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path={"/:param"} element={<Main/>}/>
        <Route path={"/"} element={<Main/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/work" element={<Works/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    <Toaster
      position="top"
      containerStyle={{
      top: 90,
      right: 20,
  }}/>
    </>
  );
}

export default App;
