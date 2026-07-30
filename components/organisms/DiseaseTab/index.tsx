import { CircleAlert, Play } from "lucide-react-native";

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
  statiscsDescription: string
  description?: string,
  videoUrl?: string
  Icon?: ComponentType<LucideProps>
  iconColor?: ThemeColorsEnum
  symptomsTitleColor?: ThemeColorsEnum
  diseaseDescriptionColor?: ThemeColorsEnum
}

const SYMPTOMS_TITLE = 'Sintomas e Impactos'
const STATISCS_TITLE = 'Estatísticas'

export function DiseaseTab(props: StoryTabProps) {
  const {
    title,
    description,
    symptomsTitle,
    symptomsTitleColor = 'orange',
    statiscsDescription,
    diseaseDescriptionColor = 'blue',
    videoUrl,
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
          Icon={CircleAlert}
        />

        <StylizedTextContainer
          title={STATISCS_TITLE}
          description={statiscsDescription}
          color={diseaseDescriptionColor}
          isTitleColored={true}
        />

        {!!videoUrl &&
          <Button
            label="Ver vídeo educativo"
            Icon={Play}
          />
        }
      </DisclosureContent>
    </DisclosureLayout>
  )
}