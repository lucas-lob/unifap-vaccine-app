import { View } from "react-native";

import { CollapseItem } from "@/components/molecules/CollapseItem";
import { TextContainer } from "@/components/molecules/TextContainer";

import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react-native";

type ColorsEnum = 'blue' | 'orange' | 'green'

type StoryTabProps = {
  title: string,
  creationDescription: string
  diseaseDescription: string
  description?: string,
  Icon?: ComponentType<LucideProps>
  creationDescriptionColor?: ColorsEnum
  diseaseDescriptionColor?: ColorsEnum
}

const CREATION_TITLE = 'Como foi criada?'
const DISEASE_TITLE = 'Doenças que previne'

export function StoryTab(props: StoryTabProps) {
  const {
    title,
    description,
    creationDescription,
    creationDescriptionColor = 'blue',
    diseaseDescription,
    diseaseDescriptionColor = 'green',
    Icon
  } = props

  return (
    <CollapseItem
      title={title}
      description={description}
      Icon={Icon}
      CollapseContent={
        <View>
          <TextContainer
            title={CREATION_TITLE}
            description={creationDescription}
            color={creationDescriptionColor}
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