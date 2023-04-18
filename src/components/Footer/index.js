import {BsFacebook, BsTwitter, BsGoogle, BsLinkedin} from 'react-icons/bs';
import {TfiYoutube} from 'react-icons/tfi';

const Index = () => {
    return (
        <div className="bg-black h-auto col-span-5 ">
            <h3 className="text-center text-white mb-8 pt-8">Foolish Developer</h3>
            <p className="text-white text-center w-1/3 m-auto">Foolish Developer is a blog website where you will find great tutorials on web design and development. 
                Here each tutorial is beautifully described step by step width the requied source code.</p>
            <div className='flex justify-center items-center'>
                <div className='flex py-6 items-center w-44 justify-between'>
                    <button>
                        <BsFacebook size='1.3rem' color='white'/>
                    </button>
                    <button>
                        <BsTwitter size='1.3rem' color='white'/>
                    </button>
                    <button>
                        <BsGoogle size='1.3rem' color='white'/>
                    </button>
                    <button>
                        <TfiYoutube size='1.3rem' color='white'/>
                    </button>
                    <button>
                        <BsLinkedin size='1.3rem' color='white'/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Index;