import React from "react";

interface ModalPros {
  isOpen?: boolean;
  onClose: () => void;
  onSumbit: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}
const Modal = () => {
  return <div></div>;
};

export default Modal;
