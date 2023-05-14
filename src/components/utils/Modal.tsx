import ReactDOM from "react-dom";

const Overlay = (props:any) => {
    return (
        <div className="fixed z-50 h-3/4 w-1/2 m-auto inset-x-0 inset-y-0 p-4 bg-white rounded-sm shadow-md">{props.children}</div>
    );
}

const Backdrop = (props:any) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50" onClick={props.onClose}></div>
    );
}

const Modal = (props: any) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("backdrop-root")!)}
        {ReactDOM.createPortal(<Overlay children={props.children} />, document.getElementById("overlay-root")!)}
        </>
    );
}

export default Modal;