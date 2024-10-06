import "./App.css";
import { Header, CreateContainer, MainContainer } from "./components";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateValue } from "./utils/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import reducer from "./utils/Reducer";
function App() {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data)
      dispatch({
        type: "SET_FOOD_ITEMS",
        foodItems: data,
      });
    }).catch((error)=>console.log(error))
};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-slate-300">
        <BrowserRouter>
          <Header />
          <main className="mt-16 px-6 md:mt-20 md:px-16  py-4 w-full">
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/createItem" element={<CreateContainer />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </AnimatePresence>
  );
}

export default App;
