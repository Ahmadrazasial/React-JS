import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Props from "./components/props";
import Card from "./components/Card";
function App() {


  return (
    <>
     <Navbar />
     <div className="Cards">
      <Card title={"Web development"} description={"This course lets u learn how to design Web Pages"} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsDeMB9UHRtAGAOCvYIZ9uuDZeXlyrkz5IxOQztxatbZmaps4Gl-On4vk&s=10"}/>
      <Card title={"Web development"} description={"This course lets u learn how to design Web Pages"} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsDeMB9UHRtAGAOCvYIZ9uuDZeXlyrkz5IxOQztxatbZmaps4Gl-On4vk&s=10"}/>
      <Card title={"Web development"} description={"This course lets u learn how to design Web Pages"} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsDeMB9UHRtAGAOCvYIZ9uuDZeXlyrkz5IxOQztxatbZmaps4Gl-On4vk&s=10"}/>
      <Card title={"Web development"} description={"This course lets u learn how to design Web Pages"} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsDeMB9UHRtAGAOCvYIZ9uuDZeXlyrkz5IxOQztxatbZmaps4Gl-On4vk&s=10"}/>
     </div>
     <Footer />
    </>
  )
}

export default App
