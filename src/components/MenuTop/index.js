import { useState } from 'react';
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

    function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    

    return (
        <>
        <div>
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
        </div>
            <div className="flex justify-between bg-black text-white items-center">
            <h4 className="tracking-widest uppercase font-bold text-white py-4 text-center ml-24">Demo</h4>
            <button className='lg:hidden mr-10'>
                <AiOutlineMenu size='1.875rem' onClick={openModal}/>
            </button>
            <nav className="max-lg:hidden justify-around mr-20">
                <ul className="lg:flex justify-around">
                    <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Home</li>
                    <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Product</li>
                    <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Blog</li>
                    <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">About</li>
                    <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Contact</li>
                    <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Feedback</li>
                </ul>
            </nav>
            </div>
        </>
    );
}

export default Index;