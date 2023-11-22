import { StatusBar } from 'expo-status-bar';

import HomePage from './src/pages/Home'
import LoginPage from './src/pages/Login'
import UserPage from './src/pages/User'


export default function App(){
  return(
    <>
      <StatusBar style='auto'/>
      <UserPage />
    </>
  )
}