import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contact from "./components/pages/Contact/Contact";
import ChartMaps from "./components/pages/Chart/ChartMaps";
import { QueryClient, QueryClientProvider } from "react-query";
import Maps from "./components/pages/Chart/Maps";
import ChartItem from "./components/pages/Chart/ChartItem";

const queryClient = new QueryClient();

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
            <ChartItem />
          </QueryClientProvider>
        ),
      },
      {
        path: "/maps",
        element: (
          <QueryClientProvider client={queryClient}>
            <Maps />
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
