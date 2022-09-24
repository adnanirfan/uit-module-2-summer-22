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
export const x = 41234;

export { Routes, func };
export default Routes;
