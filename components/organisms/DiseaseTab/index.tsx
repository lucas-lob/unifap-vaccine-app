import { View } from "react-native";

import { CollapseItem } from "@/components/molecules/CollapseItem";
import { TextContainer } from "@/components/molecules/TextContainer";

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react-native";

type ColorsEnum = 'blue' | 'red' | 'orange' | 'green' | 'purple'

type StoryTabProps = {
  title: string,
  symptomsTitle: string
  diseaseDescription: string
  description?: string,
  Icon?: ComponentType<LucideProps>
  iconColor?: ColorsEnum
  symptomsTitleColor?: ColorsEnum
  diseaseDescriptionColor?: ColorsEnum
}

const SYMPTOMS_TITLE = 'Sintomas e Impactos'
const DISEASE_TITLE = 'Doenças que previne'

export function DiseaseTab(props: StoryTabProps) {
  const {
    title,
    description,
    symptomsTitle,
    symptomsTitleColor = 'orange',
    diseaseDescription,
    diseaseDescriptionColor = 'blue',
    Icon,
    iconColor
  } = props

  return (
    <CollapseItem
      title={title}
      description={description}
      Icon={Icon}
      iconColor={iconColor}
      CollapseContent={
        <View>
          <TextContainer
            title={SYMPTOMS_TITLE}
            description={symptomsTitle}
            color={symptomsTitleColor}
          />

          <TextContainer
            title={DISEASE_TITLE}
            description={diseaseDescription}
            color={diseaseDescriptionColor}
          />
        </View>
      }
    />
  )
}