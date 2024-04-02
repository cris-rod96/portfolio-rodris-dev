import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeaderSection } from "@/components/sections/HeaderSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
