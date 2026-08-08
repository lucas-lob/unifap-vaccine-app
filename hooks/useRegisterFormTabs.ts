import { useState } from "react"
import { useRouter } from "expo-router"

const REGISTER_FORM_TABS = [
  'birthday',
  'personal',
  'login'
] as const

export type TRegisterFormTabs = typeof REGISTER_FORM_TABS[number]

export function useRegisterFormTabs() {
  const router = useRouter()
  const [tabIndex, setTabIndex] = useState<number>(0)

  const maxIndex = REGISTER_FORM_TABS.length - 1

  const handleBackTab = () => {
    const newIndex = tabIndex - 1

    if (newIndex < 0) router.replace('/(auth)')

    setTabIndex(newIndex)
  }

  const handleNextTab = () => {
    setTabIndex(prev => Math.min(prev + 1, maxIndex))
  }

  return {
    tab: REGISTER_FORM_TABS[tabIndex],
    isLastTab: tabIndex === maxIndex,
    handleBackTab,
    handleNextTab
  }
}