"use client"
import { useState } from "react"

const useNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [iconClicked, setIconClicked] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    const handleIconClick = () => {
        setIconClicked(true);
        setTimeout(() => {
            setIconClicked(false);
            toggle();
        }, 200); // Duration of the animation
    };

    return { toggle, isOpen, handleIconClick, iconClicked }
}

export default useNavbar