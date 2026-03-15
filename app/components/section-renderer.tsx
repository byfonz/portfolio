import { PostType } from "@/types/proposal";
import { Section, SectionType } from "@/types/section";
import { DefaultSection } from "./default-section";
import { ComponentType } from "react";
import { HeroSection } from "./sections/hero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  section: Section;
  post: PostType;
}

const sectionRegistry: Record<string, ComponentType<Props>> = {
  hero: HeroSection,
};

export function SectionRenderer({ section, post }: Props) {
  const Component = sectionRegistry[section.type] || DefaultSection;
  const title = section.title ?? section.type;
  const tab = section.type

  return (
   <Tabs className="w-full">
      <TabsList>
        <TabsTrigger value={title}>
          {title}
        </TabsTrigger>
      </TabsList>

      <TabsContent value={tab}>
        <Card>
          <CardContent>
            <Component section={section} post={post} />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
