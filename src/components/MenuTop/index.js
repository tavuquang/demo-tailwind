import { useState, useEffect } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Index = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    const openModal = () => {
        setIsOpen(true);
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }  

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <nav className='items-center'>
                    <ul className='w-72 items-center'>
                        <li className="hover:bg-slate-700 hover:text-white py-2 w-full rounded cursor-pointer text-center">Home</li>
                        <li className="hover:bg-slate-700 hover:text-white py-2 w-full rounded cursor-pointer text-center">Product</li>
                        <li className="hover:bg-slate-700 hover:text-white py-2 w-full rounded cursor-pointer text-center">Blog</li>
                        <li className="hover:bg-slate-700 hover:text-white py-2 w-full rounded cursor-pointer text-center">About</li>
                        <li className="hover:bg-slate-700 hover:text-white py-2 w-full rounded cursor-pointer text-center">Contact</li>
                        <li className="hover:bg-slate-700 hover:text-white py-2 w-full rounded cursor-pointer text-center">Feedback</li>
                    </ul>
                </nav>
            </Modal>

            <div className="flex justify-between bg-black dark:bg-white text-white items-center fixed w-screen">
                <h4 className="tracking-widest uppercase font-bold text-white dark:text-black py-4 text-center ml-24">Demo</h4>
                <button className='lg:hidden mr-10'>
                    <AiOutlineMenu size='1.875rem' onClick={openModal}/>
                </button>
                <nav className="max-lg:hidden justify-around">
                    <ul className="lg:flex justify-around">
                        <li className="hover:bg-slate-700 dark:text-black py-2 w-28 dark:hover:text-white rounded cursor-pointer text-center">Home</li>
                        <li className="hover:bg-slate-700 dark:text-black py-2 w-28 dark:hover:text-white rounded cursor-pointer text-center">Product</li>
                        <li className="hover:bg-slate-700 dark:text-black py-2 w-28 dark:hover:text-white rounded cursor-pointer text-center">Blog</li>
                        <li className="hover:bg-slate-700 dark:text-black py-2 w-28 dark:hover:text-white rounded cursor-pointer text-center">About</li>
                        <li className="hover:bg-slate-700 dark:text-black py-2 w-28 dark:hover:text-white rounded cursor-pointer text-center">Contact</li>
                        <li className="hover:bg-slate-700 dark:text-black py-2 w-28 dark:hover:text-white rounded cursor-pointer text-center">Feedback</li>
                    </ul>
                </nav>
                <button className='mr-20 bg-white text-black rounded py-1 px-2 text-center hover:bg-gray-600 hover:text-white' onClick={handleThemeSwitch}>Dark Mode</button>
            </div>
        </>
    );
}

export default Index;