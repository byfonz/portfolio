import { Section } from "@/types/section";
import { BlockRenderer } from "../block-renderer";
import type { PostType } from "@/types/proposal";
import { LucideCalendar } from "lucide-react";
import Image from "next/image";

interface Props {
  section: Section;
  post: PostType;
}

export function HeroSection({ section, post }: Props) {

  return (
    <section>
      <div className="flex flex-col space-y-3">
        {section.blocks?.map((block) => (
          <BlockRenderer 
            key={block._key} 
            block={block} 
          />
        ))}
      </div>
    </section>
  );
}
