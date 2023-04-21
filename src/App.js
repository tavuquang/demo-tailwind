import './App.css';
import AuthButtons from './components/AuthButtons';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuTop from './components/MenuTop';

export default function App() {
  return (
    <>
      <MenuTop />
      <div className="h-screen dark:bg-black">
        <main className='px-12 py-6'>
          <div className='mt-2.5'>
            <Header />
            <AuthButtons />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}