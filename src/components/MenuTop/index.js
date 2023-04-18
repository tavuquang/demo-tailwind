const Index = () => {
    return (
        <div className="grid grid-cols-5 bg-black text-white justify-between items-center">
            <h4 className="tracking-widest uppercase font-bold text-white py-4 col-span-2 text-center">Demo</h4>
            <ul className="flex justify-around col-span-3">
                <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Home</li>
                <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Product</li>
                <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Blog</li>
                <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">About</li>
                <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Contact</li>
                <li className="hover:bg-slate-700 py-2 w-28 rounded cursor-pointer text-center">Feedback</li>
            </ul>
        </div>
    );
}

export default Index;