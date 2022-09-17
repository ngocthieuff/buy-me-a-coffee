import videoBg from '../assets/video/ethereum.mp4';
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { ColoredLine } from './UtilComponents';


const Welcome = () => {
    
    return (
        <div >
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <p className="welcomeText">W E L C O M E &nbsp;&nbsp;T O&nbsp;&nbsp;B O O K&nbsp;&nbsp;M E D I A</p>
                
                <ColoredLine color="" width={400} />

                <br/>

                <p style={{fontSize: 18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p style={{fontSize: 18}}>Lorem ipsum dolor sit amet ut labore et dolore magna aliqua.</p>

                <Link
                   to='explore'
                >
                    <button
                     type="button"
                     onClick={() => {}}
                     className="flex flex-row justify-self-start items-start my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                     >
                        <AiFillPlayCircle className="text-white mr-2" />
                        <p className="text-white text-base font-semibold">
                            Into the verse
                        </p>
                    </button>

                </Link>
            </div>
        </div>
      );
}

export default Welcome;