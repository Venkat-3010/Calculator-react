import React, {useState} from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator = () =>{
    const [displayValue, setDisplayValue] = useState('0');

    const handleButtonClick = (value) =>{
        if(value === 'C'){
            setDisplayValue('0');
        }else if(value === 'CE'){
            setDisplayValue((preValue) => {
                if(preValue.length === 1 || preValue === "Error"){
                    return '0';
                }else{
                    return preValue.slice(0, -1);
                }
            });
        }else if(value === "="){
            try{
                const result = eval(displayValue);
                if(result === undefined || isNaN(result)){
                    setDisplayValue("Error");
                }else{
                    setDisplayValue(result.toString());
                }
            }catch(error){
                setDisplayValue('Error');
            }
        }else{
            if(displayValue === '0' || displayValue === 'Error'){
                setDisplayValue(value);
            }else{
                setDisplayValue((preValue) => preValue + value); 
            }
        }
    };

    return(
        <div id="calculator">
            <Display value={displayValue}/>
            <div className="buttons">
                <Button id="clear" value="C" className="button clear" onClick={handleButtonClick}/>
                <Button id="clear" value="CE" className="button clear" onClick={handleButtonClick}/>
                <Button id="divide" value="/" className="button operator" onClick={handleButtonClick}/>
                <Button id="multiply" value="*" className="button operator" onClick={handleButtonClick}/>
                <Button id="seven" value="7" className="button number" onClick={handleButtonClick}/>
                <Button id="eight" value="8" className="button number" onClick={handleButtonClick}/>
                <Button id="nine" value="9" className="button number" onClick={handleButtonClick}/>
                <Button id="minus" value="-" className="button operator" onClick={handleButtonClick}/>
                <Button id="four" value="4" className="button number" onClick={handleButtonClick}/>
                <Button id="five" value="5" className="button number" onClick={handleButtonClick}/>
                <Button id="six" value="6" className="button number" onClick={handleButtonClick}/>
                <Button id="plus" value="+" className="button operator" onClick={handleButtonClick}/>
                <Button id="one" value="1" className="button number" onClick={handleButtonClick}/>
                <Button id="two" value="2" className="button number" onClick={handleButtonClick}/>
                <Button id="three" value="3" className="button number" onClick={handleButtonClick}/>
                <Button id="modulous" value="%" className="button operator" onClick={handleButtonClick}/>
                <Button id="decimal" value="." className="button number" onClick={handleButtonClick}/>
                <Button id="zero" value="0" className="button number" onClick={handleButtonClick}/>
                <Button id="double-zero" value="00" className="button number" onClick={handleButtonClick}/>
                <Button id="equals" value="=" className="button equals" onClick={handleButtonClick}/>
            </div>
        </div>
    );
};

export default Calculator;
