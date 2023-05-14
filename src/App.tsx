import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/Contact/Contact";
import ChartMaps from "./components/pages/Chart/ChartMaps";
import { QueryClient, QueryClientProvider } from "react-query";

// provided tanstack query for chart route
const queryClient = new QueryClient();

/*
Here we are setting two routes
/ -- for Contact Page
/chart -- for Chart & Maps Page
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Contact /> },
      {
        path: "/chart",
        element: (
          <QueryClientProvider client={queryClient}>
            <ChartMaps />
          </QueryClientProvider>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
