const contact=()=>{
    return(
        <>
            <div className="flex items-center max-w-7xl mx-auto mb-10 px-16 mt-32" id="contact">
                <div className="mx-auto mt-10">
                    <h1 className="text-xl md:text-4xl font-thinFont font-medium text-gray-200 text-center">Contact</h1>
                    <p className="text-gray-200 font-thinFont text-xl text-center my-5">Get in touch with me</p>
                    <form action="https://formspree.io/f/xeqwngdz" method="POST">
                        <div className="mt-10">
                            <input type="text" placeholder="Your name" name="name"
                            className="p-2 w-80 rounded-md border-2 focus:outline-none bg-transparent text-white "
                            required
                            />
                        </div>
                        <div className="my-5">
                            <input type="email" placeholder="Your email or Phone number" name="email" 
                            className="text-white w-80 p-2 border-2 bg-transparent rounded-md focus:outline-none "
                            required
                            />
                        </div>
                        <div>
                            <textarea rows={8} name="teramessage" placeholder="Enter message . . ." required
                            className="p-2 w-80 bg-transparent text-white focus:outline-none border-2 rounded-md"
                            />
                        </div>
                        <button type="submit" className="mx-auto block px-5 py-2 font-thinFont font-semibold rounded-md bg-gradient-to-b from-gray-300 to-gray-600 text-black">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default contact;