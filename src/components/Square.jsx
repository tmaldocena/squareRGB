import React, { useState } from 'react';




const Square = () => {

    const [color, setColor] = useState('#000000');
    const [random, setRandom] = useState(0);

    const randomNumber = () => {
        return Math.floor(Math.random()*256);
    }

    const rgbColor = () => ({
        r: randomNumber(),
        g: randomNumber(),
        b: randomNumber(),
    });

    function hexColor(color){
        var hex = color.toString(16)
        return hex;
    }
    
    function hexRGB(r,g,b){
        return ('#' + hexColor(r) + hexColor(g) + hexColor(b));
    }
    

    const changeColor = () => {
        setRandom(setInterval(() => {
            const rgb = rgbColor();
            setColor(hexRGB(rgb.r, rgb.g, rgb.b));
        }, 350));
    }

    const stopChange = () => {
        clearInterval(random);
    }

    const clickStop = () => {
        console.log("Doble Click");
        clearInterval(random);
    }

    return (
        <div
        onMouseOver={changeColor}
        onMouseLeave={stopChange}
        onDoubleClick={clickStop}
        style={{width: '255px', height:'255px', margin: 'auto' ,backgroundColor: color}}>
            
        </div>
    );
}

export default Square;
