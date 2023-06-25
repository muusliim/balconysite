// import { bind } from "core-js/core/function";
function closeModalByTime(selector, time){
    setTimeout(() => {
        document.querySelector(selector).style.display = 'none'; 
        document.body.style.overflow = '';
    }, time);
}

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        trigger.forEach (item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display='none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.addClass('modal-open');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display='none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;

            // document.body.removeClass('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display='none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                // document.body.removeClass('modal-open');
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'; 
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }, time);
    }

    function calcScroll() {
        let divScroll = document.createElement('div');
        divScroll.style.cssText = "width: 50px; overflow-y: scroll; visibility: hidden;";
        document.body.append(divScroll);
        let scrollWidth = divScroll.offsetWidth - divScroll.clientWidth;
        divScroll.remove();

        console.log(scrollWidth);
        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
};

export {closeModalByTime};
export default modals;