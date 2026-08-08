import { useState } from "react"
import { useRouter } from "expo-router"

import { STEP_FIELDS } from "@/components/organisms/RegisterForm/schema"

type TRegisterFormTab = {
  name: keyof typeof STEP_FIELDS
  description: string
}

const REGISTER_FORM_TABS: readonly TRegisterFormTab[] = [
  {
    name: 'birthday',
    description: 'Preencha sua data de nascimento para começar'
  },
  {
    name: 'personal',
    description: 'Preencha seus dados pessoais'
  },
  {
    name: 'login',
    description: 'Preencha seus dados para Login'
  }
] as const;

export function useRegisterFormTabs() {
  const router = useRouter()
  const [tabIndex, setTabIndex] = useState<number>(0)

  const maxIndex = REGISTER_FORM_TABS.length - 1

  const handleBackTab = () => {
    const newIndex = tabIndex - 1

    if (newIndex < 0) {
      router.replace('/(auth)')
      return
    }

    setTabIndex(newIndex)
  }

  const handleNextTab = () => {
    setTabIndex(prev => Math.min(prev + 1, maxIndex))
  }

  return {
    tab: REGISTER_FORM_TABS[tabIndex],
    isFirstTab: tabIndex === 0,
    isLastTab: tabIndex === maxIndex,
    handleBackTab,
    handleNextTab
  }
}