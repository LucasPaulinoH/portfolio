import styled from "styled-components";
import { WHITE } from "../../theme/palette";
import { IoClose } from "react-icons/io5";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface ModalProps {
  content?: ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: ModalProps) => {
  const { showModal, setShowModal } = props;

  return (
    <>
      {showModal ? (
        <Background onClick={() => setShowModal(false)}>
          <ModalWrapper>
            <CloseButton onClick={() => setShowModal(false)}>
              <IoClose fill={WHITE} />
            </CloseButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: var(--terciary);
  color: rgb(0, 0, 0);
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
