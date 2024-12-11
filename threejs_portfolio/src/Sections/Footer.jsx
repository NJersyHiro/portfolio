const Footer = () => {
    return (
        <footer
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="flex gap-5 items-center">
                <a
                    href="https://github.com/NJersyHiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon flex items-center justify-center w-10 h-10 bg-black rounded-full"
                >
                    <img src="/assets/github.svg" alt="github" className="w-5 h-5"/>
                </a>
                <a
                    href="https://x.com/minerngamer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon flex items-center justify-center w-10 h-10 bg-black rounded-full"
                >
                    <img src="/assets/twitter.svg" alt="twitter" className="w-5 h-5"/>
                </a>
                <a
                    href="https://www.instagram.com/yakinikueux/profilecard/?igsh=MThyNDQ5d2dpcGpweQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon flex items-center justify-center w-10 h-10 bg-black rounded-full"
                >
                    <img src="/assets/instagram.svg" alt="instagram" className="w-5 h-5"/>
                </a>
            </div>


            <p className="text-white-500">© 2025 Hiromithi Yamamoto. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
