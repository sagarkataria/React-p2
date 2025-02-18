import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import { AuthLayout } from './components/index.js';
import AllPost from './pages/AllPost.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddPost from './pages/AddPost.jsx';
import EditPost from './pages/EditPost';
import Post from './pages/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    clildren: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <AuthLayout authetication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path:'/signup',
        element: (
          <AuthLayout authetication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path:"all-posts",
        element:(
          <AuthLayout authetication>
            <AllPost/>
          </AuthLayout>
        )
      },
      {
        path:'add-post',
        element:(
          <AuthLayout authetication>
            <AddPost/>
          </AuthLayout>
        )
      },
      {
        path:"/edit-post/:slug",
        element:(
          <AuthLayout authetication>
            <EditPost/>
          </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element:(
          <AuthLayout authetication>
            <Post/>
          </AuthLayout>
        )
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
