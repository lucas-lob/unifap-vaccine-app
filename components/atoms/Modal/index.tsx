import { Pressable, Modal as ReactModal, Text, View } from "react-native"
import { X } from "lucide-react-native"

import { centerAlignmentStyles, endAlignmentStyles, generalStyles } from "./styles"

type AlignmentEnum = 'center' | 'end'

type ModalProps = {
  visible: boolean
  setVisible: (visible: boolean) => void
  children: React.ReactNode
  onClose?: () => void
  title?: string
  showCloseIcon?: boolean,
  alignment?: AlignmentEnum
}

export function Modal(props: ModalProps) {
  const {
    visible,
    setVisible,
    title,
    onClose = () => { },
    showCloseIcon = true,
    alignment = 'end',
    children
  } = props

  if (!visible) return null

  const showHeader = !!title || showCloseIcon

  const alignmentStyles = alignment === 'center'
    ? centerAlignmentStyles
    : endAlignmentStyles
  const styles = { ...generalStyles, ...alignmentStyles }

  const handleClose = () => {
    onClose()
    setVisible(false)
  }

  return (
    <ReactModal visible={visible} transparent={true} animationType="fade">
      <View style={[styles.container, styles.containerAlignment]}>
        <Pressable style={styles.overlayContainer} onPress={handleClose} />

        <View style={[styles.contentContainer, styles.contentContainerAlignment]}>
          <View style={[styles.contentWrapper, styles.contentWrapperAlignment]}>
            {showHeader && (
              <View style={styles.headerContainer}>
                {!!title && <Text style={styles.headerTitle}>{title}</Text>}

                {showCloseIcon && <X size={24} onPress={handleClose} />}
              </View>
            )}

            <View>
              {children}
            </View>
          </View>
        </View>
      </View>
    </ReactModal>
  )
}