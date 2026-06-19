
import { DisclosureLayout } from "@/components/molecules/DisclosureLayout";
import { DisclosureContent } from "@/components/molecules/DisclosureLayout/DisclosureContent";
import { DisclosureTrigger } from "@/components/molecules/DisclosureLayout/DisclosureTrigger";
import { StylizedTextContainer } from "@/components/molecules/StylizedTextContainer";
import { TabItem } from "@/components/molecules/TabItem";

import type { LucideProps } from "lucide-react-native";
import type { ComponentType } from "react";

type StoryTabProps = {
  title: string,
  creationDescription: string
  diseaseDescription: string
  description?: string,
  Icon?: ComponentType<LucideProps>
  iconColor?: ColorsEnum
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
          title={CREATION_TITLE}
          description={creationDescription}
          color={creationDescriptionColor}
        />

        <StylizedTextContainer
          title={DISEASE_TITLE}
          description={diseaseDescription}
          color={diseaseDescriptionColor}
        />
      </DisclosureContent>
    </DisclosureLayout>
  )
}