import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const HomePage = React.lazy(() => import("./pages/Hompage"));


const ProjectRoutes = () =>{

    return(
        <React.Suspense fallback={<>Loading....</>}>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </Router>
        </React.Suspense>
    )
}
export default ProjectRoutes