import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Statistics from '../components/Statistics/Statistics';
import Topic from '../components/Topic/Topic';
import Main from '../layout/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>,
            },
            { path: 'home', element: <Home></Home> },
            { path: 'Topic', element: <Topic></Topic> },
            { path: 'Statistics', element: <Statistics></Statistics> },
            { path: 'blog', element: <Blog></Blog> }
        ])
    }

])