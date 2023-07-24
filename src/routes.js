import Home from './pages';
import Patient from './pages/patient';
import Doctor from './pages/doctor';
import HeaderAppBar from './components/HeaderAppBar';

const routes = [
    {
        path: '/',
        component: [
            {
                path: '',
                element: (
                    <Home />
                    <AlertPopup />
                )
            },
            {
                path: 'patient',
                element: (
                    <HeaderAppBar />
                    <AlertPopup />
                    <Patient /> 
                )
            },
            {
                path: 'doctor',
                element: (
                    <HeaderAppBar />
                    <AlertPopup />
                    <Doctor />
                )
            }
        ]
    }
]

export default routes;