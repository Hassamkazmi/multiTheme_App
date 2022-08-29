import React,{useState} from 'react'
import { PhotoshopPicker } from "react-color";

const Theme = () => {
    const [color1, setColor1] = useState("#ff0000");
    const [fontColor, setFont] = useState("#ffffff")
    const [box, setBox] = useState("#ffffff")
    localStorage.setItem('color', color1);
    localStorage.setItem('font', fontColor);
    localStorage.setItem('box', box);

    
  return (
    <div>
    <div>
      <div className='flx'>
        <span>BackGround Theme</span>
      <PhotoshopPicker
        color={color1}
        onChangeComplete={color => {
          setColor1(color.hex);
        }}
      />
      <span>Font Color</span>
      <PhotoshopPicker
        color={fontColor}
        onChangeComplete={color => {
          setFont(color.hex);
        }}
      />
      <span>Box Color</span>
      <PhotoshopPicker
        color={fontColor}
        onChangeComplete={color => {
            setBox(color.hex);
        }}
      />
      </div>
      <div
        style={{
          backgroundColor: color1,
          height: "300px",
          transition: "ease all 500ms"
        }}
      >
        <h1
        style={{
            color:fontColor
        }}
        >Theme Changed</h1>
        <div className='box' 
        style={{
            backgroundColor: box,
        }}
        >

        </div>
      </div>
    </div>
    </div>
  )
}

export default Theme
