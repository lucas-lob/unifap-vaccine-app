import { Play } from "lucide-react-native";

import Button from "@/components/atoms/Button";
import { DisclosureLayout } from "@/components/molecules/DisclosureLayout";
import { DisclosureContent } from "@/components/molecules/DisclosureLayout/DisclosureContent";
import { DisclosureTrigger } from "@/components/molecules/DisclosureLayout/DisclosureTrigger";
import { StylizedTextContainer } from "@/components/molecules/StylizedTextContainer";
import { TabItem } from "@/components/molecules/TabItem";

import type { LucideProps } from 'lucide-react-native'
import type { ComponentType } from "react";

type StoryTabProps = {
  title: string,
  symptomsTitle: string
  diseaseDescription: string
  description?: string,
  Icon?: ComponentType<LucideProps>
  iconColor?: ThemeColorsEnum
  symptomsTitleColor?: ThemeColorsEnum
  diseaseDescriptionColor?: ThemeColorsEnum
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
    <DisclosureLayout showArrowIcon={true}>
      <DisclosureTrigger>
        <TabItem
          title={title}
          description={description}
          Icon={Icon}
          iconColor={iconColor}
        />
      </DisclosureTrigger>

      <DisclosureContent>
        <StylizedTextContainer
          title={SYMPTOMS_TITLE}
          description={symptomsTitle}
          color={symptomsTitleColor}
          showBorder={true}
          isHighlightedBorder={true}
          isTitleColored={true}
          icon='warning'
        />

        <StylizedTextContainer
          title={DISEASE_TITLE}
          description={diseaseDescription}
          color={diseaseDescriptionColor}
          isTitleColored={true}
        />

        <Button
          label="Ver vídeo educativo"
          Icon={Play}
        />
      </DisclosureContent>
    </DisclosureLayout>
  )
}