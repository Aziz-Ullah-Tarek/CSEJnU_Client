import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Classroom from '../pages/Classroom';
import Lab from '../pages/Lab';
import Faculty from '../pages/Faculty';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import StudentLogin from '../pages/StudentLogin';
import Register from '../pages/Register';
import Admin from '../pages/Admin';

const routes = [
    {
        path: '/',
        element: Layout,
        children: [
            { path: '/', component: Home },
            { path: '/about', component: About },
            { path: '/classroom', component: Classroom },
            { path: '/lab', component: Lab },
            { path: '/faculty', component: Faculty },
            { path: '/events', component: Events },
            { path: '/gallery', component: Gallery },
            { path: '/contact', component: Contact },
        ]
    },
    // Routes without Layout (no navbar/footer)
    { path: '/student-login', component: StudentLogin },
    { path: '/StudentLogin', component: StudentLogin },
    { path: '/register', component: Register },
    { path: '/Register', component: Register },
    { path: '/admin', component: Admin },
];

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => {
                if (route.children) {
                    return (
                        <Route key={index} path={route.path} element={<route.element />}>
                            {route.children.map((child, childIndex) => (
                                <Route 
                                    key={childIndex} 
                                    path={child.path} 
                                    element={<child.component />} 
                                />
                            ))}
                        </Route>
                    );
                }
                return (
                    <Route 
                        key={index} 
                        path={route.path} 
                        element={<route.component />} 
                    />
                );
            })}
        </Routes>
    );
};

export default AppRouter;
