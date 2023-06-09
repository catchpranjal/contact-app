import ReactDOM from "react-dom";

// Overlay is the modal card
const Overlay = (props: any) => {
  return (
    <div className="fixed z-50 h-1/2 rounded-lg w-11/12 md:w-2/5 m-auto inset-x-0 inset-y-0 p-4 bg-white shadow-md">
      {props.children}
    </div>
  );
};

// Backdrop is under the modal card to give blur overlay effect. we can close the modal clicking on the backdrop
const Backdrop = (props: any) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50"
      onClick={props.onClose}
    ></div>
  );
};

// React Portal is used because modal is overlay to whole screen. it should not be nested inside any markup
const Modal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <Overlay children={props.children} />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Modal;
