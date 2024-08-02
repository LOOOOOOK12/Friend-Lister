import React from 'react'
import { BrowserRouter,Route , Routes } from 'react-router-dom'
import App from '@/App'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'

function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/Login'
                    element={<Login/>}
                />
                <Route
                    path='/App'
                    element={<App/>}
                />
                <Route
                    path='/Signup'
                    element={<Signup/>}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default routes