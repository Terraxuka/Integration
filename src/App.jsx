import './App.css'
import React, { useState, useEffect } from 'react';
import MainText from './MainText';
import DebugDiv from './DebugDiv';

function App() {
    const [clickCount, setClickCount] = useState(0);
    const [text, setText] = useState('No WEB here');
    const [textHandler, setTextHandler] = useState('');
    const [shaking, setShaking] = useState(false);
    const [clickCountUpdated, setClickCountUpdated] = useState(false);

    const [isOnPage, setIsOnPage] = useState(document.hidden);
    const [stateAllowed, setStateAllowed] = useState(true)
    const [stateChanged, setStateChanged] = useState(false)
    const [timeoutID, setTimeoutID] = useState(null);

    const valueChecker = (value) => {
        setClickCount(parseInt(value));
    };

    const setContent = (content) => {
        setText(content)
        setTextHandler(content)
    }

    const launchTetris = () => {
        
    }

    const handleClick = () => {
        if (stateAllowed){
            if(stateChanged){
                setText(textHandler)
                setStateChanged(false)
            }
            else{
                setClickCount(() => clickCount + 1); 
                setClickCountUpdated(true);
            }
            console.log(text, textHandler, stateChanged)
        }
    };

    useEffect(() => {
        const handleIsUserOnPage = () => {
            clearTimeout(timeoutID)
            setIsOnPage(() => !isOnPage);
            if (!isOnPage){
                // if (!stateChanged){
                //     // console.log(!stateChanged, text)
                //     // setTextHandler(text)
                // }
                setStateChanged(true)
                setText('Finally peace here ^^');
                setStateAllowed(false);
            }
            else {
                setTimeoutID(
                    setTimeout(() => {
                        setText('Oh, you are again here...');
                        setStateAllowed(true);
                    }, 2000)
                )
            }
        }

        document.addEventListener('visibilitychange', handleIsUserOnPage);

        return () => {
            document.removeEventListener('visibilitychange', handleIsUserOnPage);
        }
    }, [isOnPage, stateChanged]);
    

    useEffect(() => {

      if (clickCountUpdated){
        if (clickCount <= 9) { 
          setText('No WEB here');
          setShaking(true);
          setTimeout(() => setShaking(false), 500);          
        } else if (clickCount == 10) {
            setContent('Hey you!');
        } else if (clickCount == 11) {
            setContent('You there!');
        } else if (clickCount == 12) {
            setContent('Stop right now!');
        } else if (clickCount == 13) {
            setContent('Why you keep clicking?');
        } else if (clickCount == 14) {
            setContent('Wait!');
        } else if (clickCount == 15) {
            setContent('Stop!');
        } else if (clickCount == 16) {
            setContent('Its not even funny...');
        } else if (clickCount == 17) {
            setContent('Ok!');
        } else if (clickCount == 18) {
            setContent('As you wish!');
        } else if (clickCount == 19) {
            setContent('Im done with explaining...');
        } else if (clickCount == 30) {
            setContent('...');
        } else if (clickCount == 31) {
            setContent('Maybe you want me to count for you?');
        } else if (clickCount >= 32 && clickCount <= 37) {
            setContent(`You clicked: ${clickCount} times!`);
        } else if (clickCount == 38) {
            setContent('Congrats! You won NO prize!');
        } else if (clickCount == 39) {
            setContent("Aren't you happy now?");
        } else if (clickCount == 40) {
            setContent('You want more?');
        } else if (clickCount == 41) {
            setContent('Ok... Go play Tetris');
        } else if (clickCount == 42) {
            launchTetris();
        }


        setClickCountUpdated(false);
      }
    }, [clickCount]);

    return (
        <div>
            <DebugDiv value={clickCount} onChange={valueChecker} />
            <MainText shake={shaking} onClick={handleClick} text={text} />
        </div>
    );
}

export default App;