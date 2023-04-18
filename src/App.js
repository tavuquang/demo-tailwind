import './App.css';
// import Nav from './components/Nav';
import AuthButtons from './components/AuthButtons';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuTop from './components/MenuTop';

export default function App() {
  return (
    <>
      <MenuTop />
      <div className="h-screen">
        {/* <Nav /> */}
        <main className='px-12 py-6'>
          <AuthButtons />
          <Header />
        </main>
      </div>
      <Footer />
    </>
  )
}