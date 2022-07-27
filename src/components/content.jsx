import React from "react";
import Card from "./card";
import '../styles/content.css'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Content = () => {
    return (
        <div id="content">
            <Card />
            <BsFillArrowLeftCircleFill className="left"/>
            <BsFillArrowRightCircleFill className="right"/>
        </div>
    )
}

export default Content