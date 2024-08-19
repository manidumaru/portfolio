import EducationSection from "./education";
import ExperienceSection from "./experience";
import MyInformationSection from "./my-info";

export default function AboutPage() {
  return (
    <div className="md:pt-20">
      <MyInformationSection />
      {/* <ExperienceSection />
      <EducationSection /> */}
    </div>
  );
}
