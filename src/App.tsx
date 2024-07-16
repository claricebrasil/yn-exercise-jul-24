import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SideMenu } from './components'
import { APP_ROUTES } from './domain/routes'
import { FormView, TableView } from './pages'

const App = () => (
    <div id="app">
        <Router>
            <SideMenu routes={APP_ROUTES}>
                <Routes>
                    <Route path={APP_ROUTES.FORM} element={<FormView />} />
                    <Route path={APP_ROUTES.TABLE} element={<TableView />} />
                </Routes>
            </SideMenu>
        </Router>
    </div>
)

export default App
