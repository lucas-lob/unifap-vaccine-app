import { useCallback, useMemo } from "react"
import { Pressable, Modal as NativeModal, Text, View } from "react-native"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { X } from "lucide-react-native"

import { centerAlignmentStyles, endAlignmentStyles, generalStyles } from "./styles"
import { COLOR } from "@/style/tokens"

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
    alignment = 'center',
    children
  } = props
  const insets = useSafeAreaInsets()

  const { showHeader, styles } = useMemo(() => {
    const showHeader = !!title || showCloseIcon

    const alignmentStyles = alignment === 'center'
      ? centerAlignmentStyles
      : endAlignmentStyles

    const styles = { ...generalStyles, ...alignmentStyles }

    return { showHeader, styles }
  }, [title, showCloseIcon, alignment])

  const handleClose = useCallback(() => {
    onClose()
    setVisible(false)
  }, [onClose, setVisible])

  if (!visible) return null

  return (
    <NativeModal visible={visible} transparent={true} animationType="none" statusBarTranslucent={true}
      navigationBarTranslucent={true}>
      <SafeAreaView>
        <View style={[styles.container, styles.containerAlignment]}>
          <Pressable style={styles.overlayContainer} onPress={handleClose} />

          <View style={[
            styles.contentContainer,
            styles.contentContainerAlignment,
            alignment === 'end' && { paddingBottom: insets.bottom }
          ]}>
            <View style={[styles.contentWrapper, styles.contentWrapperAlignment]}>
              {showHeader && (
                <View style={styles.headerContainer}>
                  {!!title && <Text style={styles.headerTitle}>{title}</Text>}

                  {showCloseIcon && <X size={24} color={COLOR.GRAY_900} onPress={handleClose} />}
                </View>
              )}

              <View style={styles.childrenContainer}>
                {children}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NativeModal>
  )
}