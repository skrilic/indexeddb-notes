import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import SettingPanel from "./SettingPanel";

import Modal, { ModalProvider } from "styled-react-modal";
import FocusLock from "react-focus-lock";


const StyledModal = Modal.styled`
    width: 85%;
    height: 53%;
    margin-top: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.background};
    opacity: ${(props) => props.theme.opacity};
    transition : all 0.3s ease-in-out;`;

const iconLink = "flex justify-between";
const iconLabel = "text-gray-700 inline-block align-middle";
const iconNeutral = "text-gray-200 cursor-pointer w-7 h-8 inline-block align-middle";
const iconClicked = "text-gray-300 cursor-pointer w-7 h-8 inline-block bg-red-800 align-middle rounded-lg";
const iconDisabled = "text-gray-100 w-7 h-8 cursor-pointer inline-block align-middle";

function SettingsModalButton(props) {
    const [bgColor, setBgColor] = useState(window.getComputedStyle(document.body, "").backgroundColor);
    const [isOpen, setIsOpen] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const toggleModal = (e) => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
       return () => {
            setBgColor(window.getComputedStyle(document.body, "").backgroundColor);
        };
    }, [bgColor, isUpdated])

    const triggerBackground = () => {
        setIsUpdated(!isUpdated);
    }

    
    return (
        <>
            <div onClick={toggleModal} className={iconLink}>
                <AiOutlineSetting className={iconNeutral} />
                <small className={iconLabel} style={{ "fontSize": "1.25em" }}>
                    {props.label}
                </small>
            </div>
            <StyledModal
                isOpen={isOpen}
                onEscapeKeydown={toggleModal}
                onBackgroundClick={toggleModal}
                // afterClose={updateModalBackground}
                allowScroll={true}
                role="dialog"
                aria-modal={true}
                aria-labelledby="modal-label"
                theme={ 
                    {
                        background: bgColor,
                        opacity: 1.0
                    } 
                }
            >
                <FocusLock>
                    <SettingPanel triggerBackground={triggerBackground} />
                </FocusLock>
            </StyledModal>
        </>
    );
}


export const HomeIcon = (props) => {
    const isDisabled = props.disabled;
    const navigate = useNavigate();
    const backPosition = sessionStorage.getItem("lastPosition");
    const [ isClicked, setIsClicked ] = useState(props.isOpened);

    const handleButton = () => {
        if (isClicked) {
            if (backPosition !== null) {
                navigate(backPosition);
            } else {
                navigate("/toc");
            }
        } else {
            navigate("/");
        }
    }
    return (
        <>
            { 
            isDisabled ? 
            <>
                <AiFillHome className={iconDisabled} />
                <small className={iconLabel}>
                    {props.label}
                </small>
            </> :
            <div onClick={() => {
                setIsClicked(prevState => !prevState, handleButton());
            }}>
                {isClicked ?
                    <>
                        <AiFillHome className={iconClicked} />
                        <small className={iconLabel}>
                            {props.label}
                        </small> 
                    </>:
                    <>
                        <AiFillHome className={iconNeutral} />
                        <small className={iconLabel}>
                            {props.label}
                        </small> 
                    </>
                }   
            </div>
            }
        </>      
    )
}

export const TocIcon = (props) => {
    const isDisabled = props.disabled;
    const navigate = useNavigate();
    const backPosition = sessionStorage.getItem("lastPosition");
    const [ isClicked, setIsClicked ] = useState(props.isOpened);

    const handleButton = () => {
        if (isClicked) {
            if (backPosition !== null) {
                navigate(backPosition);
            } else {
                navigate("/toc");
            }
        } else {
            navigate("/toc");
        }
    }

    return (
        <>
            { 
                isDisabled ? 
                <>
                    <AiOutlineUnorderedList className={iconDisabled} />
                    <small className={iconLabel}>
                        {props.label}
                    </small>
                </> :
                <div onClick={() => {
                    setIsClicked(prevState => !prevState, handleButton());
                }}>
                    {
                        isClicked ?
                        <>
                            <AiOutlineUnorderedList className={iconClicked} />
                            <small className={iconLabel}>
                                {props.label}
                            </small>
                        </>:
                        <>
                            <AiOutlineUnorderedList className={iconNeutral} />
                            <small className={iconLabel}>
                                {props.label}
                            </small>
                        </>
                    }
                    
                </div>
            }
        </>
    )
}

export const InfoIcon = (props) => {
    return (
        <Link className={iconLink} to="/about">
           <AiOutlineInfoCircle className={iconNeutral} />
            <small className={iconLabel}>
                {props.label}
            </small>
        </Link>
    )
}

export const SearchExecIcon = (props) => {
    return (
        <div>
           <AiOutlineSearch className={iconNeutral} />
            <small className={iconLabel}>
                {props.label}
            </small>
        </div>
    )
}

export const SearchIcon = (props) => {
    const navigate = useNavigate();
    const backPosition = sessionStorage.getItem("lastPosition");
    const [ isClicked, setIsClicked ] = useState(props.isOpened);

    const handleButton = () => {
        if (isClicked) {
            if (backPosition !== null) {
                navigate(backPosition);
            } else {
                navigate("/toc");
            }
        } else {
            navigate("/search");
        }
    }

    return (
        <div onClick={() => {
                setIsClicked(prevState => !prevState, handleButton());
            }}>
                {
                    isClicked ?
                    <>
                        <AiOutlineSearch className={iconClicked} />
                        <small className={iconLabel}>{props.label}</small>
                    </> :
                    <>
                        <AiOutlineSearch className={iconNeutral} />
                        <small className={iconLabel}>{props.label}</small>
                    </>
                }
            
        </div>
    )
}

export const SettingsIcon = (props) => {
    return (
        <ModalProvider>
            <SettingsModalButton disabled={props.disabled} label={props.label} />
        </ModalProvider>
    )
}


export const BookmarkListIcon = (props) => {
    const navigate = useNavigate();
    const backPosition = sessionStorage.getItem("lastPosition");
    const [ isClicked, setIsClicked ] = useState(props.isOpened);

    const handleButton = () => {
        if (isClicked) {
            if (backPosition !== null) {
                navigate(backPosition);
            } else {
                navigate("/toc");
            }
        } else {
            navigate("/bookmarks");
        }
    }

    return (
        <div onClick={() => {
            setIsClicked(prevState => !prevState, handleButton());
        }}>
            {
                isClicked ?
                <>
                    <AiOutlineFile className={iconClicked} />
                    <small className={iconLabel}>
                        {props.label}
                    </small>
                </> :
                <>
                    <AiOutlineFile className={iconNeutral} />
                    <small className={iconLabel}>
                        {props.label}
                    </small>
                </>
            }
            </div>
    )
}
