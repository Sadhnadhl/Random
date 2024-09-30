import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component2/navbar";
import Product from "./component2/Product";
import ProductDetail from "./component2/ProductDetail";
import SearchItem from "./component2/SearchItem";
import Cart from "./component2/Cart";
import { items } from "./component2/data";
import "./App.css";
import Posts from "./component/postss";
// import Count from "./component/count";
import Todos from "./component/todo";
import Album from "./component/album";

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Album />
      {/* <Count /> */}
      <Todos /> <Posts />
      {/* <Router>
        <Navbar cart={cart} setData={setData} />

        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router> */}
    </>
  );
};

export default App;
// import { Router } from "react-router-dom";
// import "./App.css";
// // import FilterableProductTable from "./component/filterableProductTable";
// import React from "react";
// import SignIn from "./component/signup";
// import NavigationBar from "./component/nav";
// import { vehicles } from "./component/array";
// import Card2 from "./component/card2.0";
// import Calculator from "./component/counter";
// import Button from "./component/button";
// import Card from "./component/card";
// import Temperature from "./component/temperature";
// import Clock from "./component/clock";
// import strangerthings from "./assest/images/strangerThings.jpg";
// import Counter from "./component/counter";
// import Form from "./component/form";
// import Toggle from "./component/toggle";
// import Auth from "./component/auth";
// import Array from "./component/array";
// import VehicleList from "./component/vehicles";
// import { dataArray } from "./component/array";
// import SignIn from "./component/signup";
// import ListAndKeys from "./component/vehicles";
// import { useState } from "react";
// import Pointer from "./component/pointer";
// import Status from "./component/statusDependent";
// import Counter from "./counter";
// import Input from "./component/input";

// const PRODUCTS = [
//   {
//     category: "Sporting Goods",
//     price: "$49.99",
//     stocked: true,
//     name: "Football",
//   },
//   {
//     category: "Sporting Goods",
//     price: "$9.99",
//     stocked: true,
//     name: "Baseball",
//   },
//   {
//     category: "Sporting Goods",
//     price: "$29.99",
//     stocked: false,
//     name: "Basketball",
//   },
//   {
//     category: "Electronics",
//     price: "$99.99",
//     stocked: true,
//     name: "iPod Touch",
//   },
//   {
//     category: "Electronics",
//     price: "$399.99",
//     stocked: false,
//     name: "iPhone 5",
//   },
//   { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
// ];
// function App() {
//   const [age, setAge] = useState(18);
//   const [name, setName] = useState("");

//   function handleClick() {
//     setAge(age + 1);
//   }
//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <>
//     <Router>
//     <Navbar cart={cart} setData={setData}/>
//     <Routes>
//       <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
//       <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
//       <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
//       <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
//     </Routes>

//     </Router>
//     </>

//       <Input/>
//       <NavigationBar />
// <Counter/>
// <SignIn/>
{
  /* <Pointer/>
      <Status/>
      <SignIn /> */
}

{
  /* <input
        value={name}

        type="text"
        onChange={handleChange}
      />
      <h1>
        {name ? name : "stranger"} is {age} year old
      </h1>
      <button onClick={handleClick}>Click me</button> */
}
{
  /* <FilterableProductTable products={PRODUCTS}/> */
}
// </div>
//   );
// }

// <Temperature/>

// <div>
//   {dataArray.map((item) => (
//     <ListAndKeys
//       key={item.id}
//       title={item.title}
//       paragraph1={item.paragraph1}
//       paragraph2={item.paragraph2}
//       paragraph3={item.paragraph3}
//       paragraph4={item.paragraph4}
//     />
//   ))}
// </div>

{
  /* <Card2/>
      <Auth/>
      <Toggle/> */
}
{
  /* <Calculator/> */
}
// <Form />
{
  /* <Counter/> */
}
{
  /* <Clock/> */
}
// {
//    <div className="card-container">
//       <Card
//         // img={strangerthings}
//         category="A Netflix Original Series"
//         title="Stranger Things"
//         link="https://www.netflix.com/np/title/80057281"
//       />
//       <Card
//         // img="../src/assest/images/strangerThings.jpg"
//         category="A Netflix Original Series"
//         title="Stranger Things"
//         link="https://www.netflix.com/np/title/80057281"
//       />
//       <Card
//         // img="../src/assest/images/strangerThings.jpg"
//         category="A Netflix Original Series"
//         title="Stranger Things"
//         link="https://www.netflix.com/np/title/80057281"
//       />
//     </div> );
// }

// {
/* <Button name="Click here" />
      <Button name="Submit all your inquery" />
      <Button name="Cancel" /> */
// }

// export default App;
