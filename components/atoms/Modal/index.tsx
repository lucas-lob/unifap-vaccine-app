import { useCallback, useMemo } from "react"
import { Pressable, Modal as NativeModal, Text, View } from "react-native"
import { X } from "lucide-react-native"

import { centerAlignmentStyles, endAlignmentStyles, generalStyles } from "./styles"

type AlignmentEnum = 'center' | 'end'

export type ModalOptions = {
  title?: string
  showCloseIcon?: boolean,
  alignment?: AlignmentEnum
}

type ModalProps = {
  visible: boolean
  setVisible: (visible: boolean) => void
  children: React.ReactNode
  onClose?: () => void
}

export function Modal(props: ModalProps & ModalOptions) {
  const {
    visible,
    setVisible,
    title,
    onClose = () => { },
    showCloseIcon = true,
    alignment = 'end',
    children
  } = props
  const {showHeader, styles} = useMemo(() => {
    const showHeader = !!title || showCloseIcon

    const alignmentStyles = alignment === 'center'
      ? centerAlignmentStyles
      : endAlignmentStyles

    const styles = {...generalStyles, ...alignmentStyles}

    return {showHeader, styles}
  }, [title, showCloseIcon, alignment])

  const handleClose = useCallback(() => {
    onClose()
    setVisible(false)
  }, [onClose, setVisible])

  if (!visible) return null

  return (
    <NativeModal visible={visible} transparent={true} animationType="fade">
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
    </NativeModal>
  )
}