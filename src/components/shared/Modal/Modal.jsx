import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ESC_KEY } from '../../../utils/constants';

import classes from './Modal.module.scss';

const modalRootNode = document.getElementById('modal-root');

const Modal = ({ isOpen, confirm, close, cancelBtnText, confirmBtnText, closableBackdrop, children }) => {

  const modalRef = useRef();

  const topTabTrap = useRef();
  const bottomTabTrap = useRef();

  useEffect(() => {
    if (isOpen) {
      const trapFocus = (event) => {
        if (event.target === topTabTrap.current) {
          lastFocusableElement.focus();
        }

        if (event.target === bottomTabTrap.current) {
          firstFocusableElement.focus();
        }
      };

      const handleKeyDownListener = (event) => {
        if (event.keyCode === ESC_KEY) {
          close();
        }
      };

      document.body.classList.add('overflow');

      const focusedElementBeforeModal = document.activeElement;

      const focusableElementsString = 'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], area[href], iframe, object, embed, [tabindex="0"], [contenteditable]';

      const focusableElements = Array.from(modalRef.current.querySelectorAll(focusableElementsString));
      const firstFocusableElement = focusableElements[1];
      const lastFocusableElement = focusableElements[focusableElements.length - 2];

      if (focusableElements.length > 4) {
        firstFocusableElement.focus();
      } else {
        lastFocusableElement.focus();
      }

      document.addEventListener('focusin', trapFocus);

      document.addEventListener('keydown', handleKeyDownListener);

      return () => {
        document.body.classList.remove('overflow');

        document.removeEventListener('focusin', trapFocus);

        document.removeEventListener('keydown', handleKeyDownListener);

        focusedElementBeforeModal.focus();
      };
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
