// import { bind } from "core-js/core/function";

const modals = () => {
    function bindModal(trigger, modal, close) {
        
    }


    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
          modalEngineer = document.querySelector('.popup_engineer'),
          modalEngineerClose = document.querySelector('.popup_engineer .popup_close');

    bindModal(callEngineerBtn, modalEngineer, modalEngineerClose);


};




export default modals;