import "./appicons.css";
import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
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

function SettingsModalButton(props) {
    const[bgColor, setBgColor] = useState(window.getComputedStyle(document.body, "").backgroundColor);
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
            <div onClick={toggleModal} className="icon-link">
                <AiOutlineSetting className="icon" />
                <small className="icon-label" style={{ "fontSize": "1.25em" }}>
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
                <AiFillHome className="icon-disabled" />
                <small className="icon-label">
                    {props.label}
                </small>
            </> :
            <div onClick={() => {
                setIsClicked(prevState => !prevState, handleButton());
            }}>
                <AiFillHome className={ isClicked ? "icon-clicked" : "icon" } />
                <small className="icon-label">
                    {props.label}
                </small>
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
                    <AiOutlineUnorderedList className="icon-disabled" />
                    <small className="icon-label">
                        {props.label}
                    </small>
                </> :
                <div onClick={() => {
                    setIsClicked(prevState => !prevState, handleButton());
                }}>
                    <AiOutlineUnorderedList className={ isClicked ? "icon-clicked" : "icon"} />
                    <small className="icon-label">
                        {props.label}
                    </small>
                </div>
            }
        </>
    )
}

export const InfoIcon = (props) => {
    return (
        <Link className="icon-link" to="/about">
           <AiOutlineInfoCircle className="icon" />
            <small className="icon-label">
                {props.label}
            </small>
        </Link>
    )
}

export const SearchExecIcon = (props) => {
    return (
        <div>
           <AiOutlineSearch className="icon" />
            <small className="icon-label">
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
            <AiOutlineSearch className={ isClicked ? "icon-clicked" : "icon" } />
            <small className="icon-label">{props.label}</small>
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


export const ArrowLeftIcon = (props) => {
    const isDisabled = props.disabled;
    let iconColor = "";
    if (isDisabled) {
        iconColor = "#bdbbbb";
    }
    return <AiOutlineLeft className="arrow-icon"
        style={{ color: iconColor }}
    />
}

export const ArrowRightIcon = (props) => {
    const isDisabled = props.disabled;
    let iconColor = "";
    if (isDisabled) {
        iconColor = "#bdbbbb";
    }
    return <AiOutlineRight className="arrow-icon"
        style={{ color: iconColor }}
    />
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
                <AiOutlineFile className={ isClicked ? "icon-clicked" : "icon" } />
                <small className="icon-label">
                       {props.label}
                </small>
            </div>
    )
}

export const EditIcon = (props) => {
    const isDisabled = props.disabled;
    let iconColor = "";
    if (isDisabled) {
        iconColor = "#bdbbbb";
    }
    return <FaRegEdit className="icon"
        style={{ color: iconColor }}
    />
}

export const BookmarkIcon = (props) => {
    const isDisabled = props.disabled;
    let iconColor = "";
    if (isDisabled) {
        iconColor = "#bdbbbb";
    }
    return <FaRegBookmark className="icon"
        style={{ color: iconColor, cursor: "pointer" }}
    />
}

export const ChevronRightIcon = (props) => {
    const isDisabled = props.disabled;
    let iconColor = "";
    if (isDisabled) {
        iconColor = "#bdbbbb";
    }
    return <FaChevronRight className="icon"
        style={{ color: iconColor }}
    />
}

export const DeleteIcon = (props) => {
    const isDisabled = props.disabled;
    let iconColor = "red";
    if (isDisabled) {
        iconColor = "#bdbbbb";
    }
    return <AiFillDelete className="icon"
        style={{ color: iconColor, cursor: "pointer" }}
    />
}


export const CloseIcon = (props) => {
    const navigate = useNavigate();
    const { closeAndGoTo } = props;
    return (
        <div onClick={ () =>  {
            if (closeAndGoTo !== null ){
                navigate(closeAndGoTo);
            } else {
                navigate("/toc");
            }
        } }>
            <AiOutlineClose className="close-icon" />
        </div>
    )
}
