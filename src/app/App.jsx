import './App.scss';
import { useState, useEffect } from 'react';
import * as TodoAPIServices from '../services/todoServices'
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { TodoContent } from '../components/Todo/TodoContent';

function App() {
    return (
        <div className='container'>
            <Header />
            <SideBar  />
            <TodoContent />
        </div>
    );
}

export default App;
