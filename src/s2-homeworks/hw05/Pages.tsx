import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {

    /* const navigate = useNavigate();

    useEffect(() => {
        navigate("/pre-junior");
      }, []); */
  
    
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

        <Route path='/' element={<Navigate to={'pre-junior'} />}/>
        <Route path="pre-junior" element={<PreJunior />} />
        <Route path="junior" element={<Junior />}/>
        <Route path="junior-plus" element={<JuniorPlus />} />
        <Route path="*" element={<Error404 />} />
      
 
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route ...*/}

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                {/*<Route ...*/}
                {/*<Route ...*/}
                {/*<Route ...*/}

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                {/*<Route ...*/}
            </Routes>
        </div>
    )
}

export default Pages
