import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

interface Props {
  movieName: string;
  movieKey: string;
  isOpen: boolean;
  onModalClose: () => void;
}

const TrailerModal = ({ movieName, movieKey, isOpen, onModalClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={() => onModalClose()} size='xl' isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{movieName}</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={0}>
          <iframe
            src={`https://www.youtube.com/embed/${movieKey}`}
            width='100%'
            height='400px'
            allowFullScreen
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default TrailerModal;
