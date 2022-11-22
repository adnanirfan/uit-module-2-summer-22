const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

const func = () => {
  console.log("FROM Func");
};

export { Routes, func };
export default Routes;
