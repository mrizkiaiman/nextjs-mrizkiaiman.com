import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  Button,
  Text,
} from '@chakra-ui/react'
import { ButtonMotion } from '@app/components/containers/animations/ButtonMotion'
import { useColors } from '@app/utils/hooks/useColors'

interface ModalContactUsProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}
;[]
export const ModalContactUs: React.FC<ModalContactUsProps> = ({ isOpen, onClose, onOpen }) => {
  const { activeAndHoverColor } = useColors()
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>asd</Text>
          </ModalBody>
          <ModalFooter>
            <ButtonMotion>
              <Button
                _hover={{ bg: activeAndHoverColor, color: useColorModeValue('white', 'black') }}
                bg={useColorModeValue('black', 'white')}
                variant="solid"
                color={useColorModeValue('white', 'black')}>
                Submit
              </Button>
            </ButtonMotion>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
