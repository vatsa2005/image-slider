import React from "react";
import "./styles/imageSlider.css";
import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ImageSlider({height, width, images, text, fontSize, textColor, wantAnimation, arrowSize}) {
    const[imageArray, setImageArray] = useState(images);
    const[textArray, setTextArray] = useState(text ? text : null);
    const[currentImg, setCurrentImg] = useState(0);
    const[clsName, setClsName] = useState("");

    function handleForward() {
        setCurrentImg((prev) => prev + 1);
        if(currentImg === (imageArray.length - 1)) {
            setCurrentImg(0);
        }
        setClsName("animation")
        setTimeout(() => {
            setClsName("");
        }, 900);
    }

    function handleBackward() {
        setCurrentImg((prev) => {
            return prev -= 1;
        });
        if(currentImg === 0) {
            setCurrentImg((prev) => {
                return prev = (imageArray.length - 1);
            });
        }
        setClsName("animation")
        setTimeout(() => {
            setClsName("");
        }, 900);
    }

    return(
        <div className="image_slider" style={{height: height, width: width}}>
            <div className="image_slider__prev_img">
                <div className="image_slider__prev_img__clickable arrow" onClick={handleBackward}>
                    <ArrowBackIosNewIcon sx={{height: arrowSize, width: arrowSize}} />
                </div>  
            </div>
            <div className="image_slider__img">
                {imageArray.map((val, ind) => {
                    if(ind === currentImg) {
                        return(
                            <img src={val} alt="An Image" className={(clsName && wantAnimation) ? clsName : null}/>
                        );
                    }
                })}
                {textArray && ( textArray.map((val, ind) => {
                    if(ind === currentImg && val) {
                        return(
                            <div className="text">
                                <p className={(clsName && wantAnimation) ? clsName : null} style={{fontSize: fontSize, color: textColor}}>{val}</p>
                            </div>
                        );
                    }
                }) )}
            </div>
            <div className="image_slider__next_img">
                <div className="image_slider__next_img__clickable arrow" onClick={handleForward}>
                    <ArrowForwardIosIcon sx={{height: arrowSize, width: arrowSize}} />
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;

