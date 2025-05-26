import {PropsWithChildren, useState} from "react";
import ReactDOM from "react-dom";
import MainButton from "../button/index";
import "@/styles/modal.css"
import MainLoader from "../loaders/MainLoader";


interface ICancellationSubscription {
    active: boolean;
    title: string;
    info?: boolean;
    onSubmitName?: string;
    onSubmit: () => void;
    onClose: () => void;
}

const Modal = ({
    active,
    info = false,
    title,
    onSubmit,
    onSubmitName = 'Confirm',
    onClose,
    children
}: PropsWithChildren<ICancellationSubscription>) => {
    const [isLoading] = useState<boolean>(false);
    if(!active) {
        return null
    }
    const portalElement = document.getElementById("root");
    if (portalElement){
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__content w-1/4" onClick={(event) => event.stopPropagation()}>
                <div className="modal__header">
                    <div className="modal__title">{title}</div>
                </div>
                <div className="modal__body">{children}</div>
                {!info ? (
                    <div className="modal__footer">
                        <MainButton
                            title={
                                !isLoading ? (
                                    `${onSubmitName}`
                                ) : (
                                    <div className=" w-full h-full flex justify-center items-center">
                                        <MainLoader
                                            additionalStyles={" w-8 h-8 "}
                                            insideStyles={"bg-primary-500 w-6 h-6"}
                                        />
                                    </div>
                                )
                            }
                            handleClick={onSubmit}
                            value={""}
                            additionalStyles={
                                "bg-white-700  text-black-500 m-3 hover:bg-white-400 transition-all duration-300 max-w-[500px]"
                            }
                        />
                        <MainButton
                            title={"Cancel"}
                            handleClick={onClose}
                            value={""}
                            additionalStyles={
                                "bg-white-700  text-black-500 m-3 hover:bg-white-400 transition-all duration-300 max-w-[500px]"
                            }
                        />
                    </div>
                ) : (
                    <div className="modal__footer">
                        <MainButton
                            title={"Close"}
                            handleClick={onClose}
                            value={""}
                            additionalStyles={
                                "bg-white-700  text-black-500 m-3 hover:bg-white-400 transition-all duration-300 max-w-[500px]"
                            }
                        />
                    </div>
                )}
            </div>
        </div>,
        portalElement
        )
    }
};

export default Modal;