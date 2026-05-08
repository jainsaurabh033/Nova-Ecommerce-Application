import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));

const DashBoard = lazy(() => import("./pages/admin/dashboard"));
const Product = lazy(() => import("./pages/admin/product"));
const Transaction = lazy(() => import("./pages/admin/transaction"));

import Loader from "./components/loader";
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/dashboard" element={<DashBoard />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/transaction" element={<Transaction />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
