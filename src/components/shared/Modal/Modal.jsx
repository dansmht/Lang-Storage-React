import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Modal.module.scss';

const modalRootNode = document.getElementById('modal-root');

const Modal = ({ isOpen, confirm, close, cancelBtnText, confirmBtnText, closableBackdrop, children }) => {

  const modalRef = useRef();

  const topTabTrap = useRef();
  const bottomTabTrap = useRef();

  useEffect(() => {
    if (isOpen) {

      const focusableElementsString = 'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], area[href], iframe, object, embed, [tabindex="0"], [contenteditable]';

      const focusableElements = Array.from(modalRef.current.querySelectorAll(focusableElementsString));
      const firstFocusableElement = focusableElements[1];
      const lastFocusableElement = focusableElements[focusableElements.length - 2];

      if (focusableElements.length > 4) {
        firstFocusableElement.focus();
      } else {
        lastFocusableElement.focus();
      }

      document.body.classList.add('overflow');

      document.addEventListener('focusin', trapFocus);

      return () => {
        document.removeEventListener('focusin', trapFocus);

        document.body.classList.remove('overflow');
      };

      // eslint-disable-next-line no-inner-declarations
      function trapFocus(event) {
        if (event.target === topTabTrap.current) {
          lastFocusableElement.focus();
        }

        if (event.target === bottomTabTrap.current) {
          firstFocusableElement.focus();
        }
      }
    }
  }, [isOpen]);

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const onConfirm = () => {
    confirm();
    close();
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className={classNames(classes.Modal, 'modal')}
      ref={modalRef}
      onClick={stopPropagation}
    >
      <div ref={topTabTrap} tabIndex={0} />
      <div
        className={classes.ModalBackDrop}
        onClick={closableBackdrop ? close : null}
      />
      <div className={classes.ModalContent}>
        { children }
        <div className={classes.ActionButtons}>
          <button
            className={classes.CancelButton}
            onClick={close}
          >
            { cancelBtnText }
          </button>
          <button
            className={classes.ConfirmButton}
            onClick={onConfirm}
          >
            { confirmBtnText }
          </button>
        </div>
      </div>
      <div ref={bottomTabTrap} tabIndex={0} />
    </div>,
    modalRootNode);
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  cancelBtnText: PropTypes.string,
  confirmBtnText: PropTypes.string,
  closableBackdrop: PropTypes.bool,
};

Modal.defaultProps = {
  cancelBtnText: 'Cancel',
  confirmBtnText: 'Yes',
  closableBackdrop: true,
};

export default Modal;
