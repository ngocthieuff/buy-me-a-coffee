import videoBg from '../assets/video/ethereum.mp4';
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { ColoredLine } from './UtilComponents';
import styled from 'styled-components';

const Button = styled.button({
    backgroundColor:'#a099ff',  
    backgroundImage: 
    'radial-gradient(at 93% 70%, rgb(152, 231, 156) 0, transparent 100%)'
  });

const Welcome = () => {
    
    return (
        <div >
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <p className="welcomeText">W E L C O M E &nbsp;&nbsp;&nbsp;T O&nbsp;&nbsp;&nbsp;C R Y P T O O F</p>
                
                <ColoredLine color="" width={400} />

                <br/>

                <p style={{fontSize: 18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p style={{fontSize: 18}}>Lorem ipsum dolor sit amet ut labore et dolore magna aliqua.</p>

                <Link
                   to='explore'
                >
                    <Button
                     type="button"
                     onClick={() => {}}
                     className="flex flex-row justify-self-start items-start my-5 p-3 rounded-full cursor-pointer eth-card"
                     >
                        <AiFillPlayCircle className="text-white mr-2 ml-2 mt-1 text-lg" />
                        <p className="text-white text-base font-semibold mr-3 text-lg">
                            Trade now
                        </p>
                    </Button>

                </Link>
            </div>
        </div>
      );
}

export default Welcome;