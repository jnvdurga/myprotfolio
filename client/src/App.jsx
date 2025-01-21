import Home from "./pages/Home/index"
import './App.css'
import {BrowserRouter,Routes , Route} from 'react-router-dom'
import { useEffect, useState } from "react"
import Loader from "./components/Loader"
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { formControlClasses } from "@mui/material"
import { HideLoading, setPortfoliData, ShowLoading ,ReloadData} from "./redux/rootSlice"
import Admin from "./pages/Admin/Index"
function App() {
  const {loading , portfolioData,reloadData} = useSelector(state=>state.root)
  
  const dispatch = useDispatch()

      const getportfolioData = async()=>{
        try {
           dispatch(ShowLoading())
          const responce = await axios.get(`/api/portfolio/my-web-portfolio`);
          
          dispatch(setPortfoliData(responce.data)) ;
          dispatch(ReloadData(false))
          dispatch(HideLoading())

          
          
        } catch (error) {
          console.log(error)
        }
      }

    useEffect(()=>{
     if (!portfolioData){
        getportfolioData()
      }
       
    },[portfolioData])


    useEffect(()=>{
         if(reloadData){
          getportfolioData()
         }
    },[reloadData])

    return (
      <BrowserRouter>
        {loading ?  <Loader /> : null}
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
         </Routes>
      </BrowserRouter>
  )
}

export default App
