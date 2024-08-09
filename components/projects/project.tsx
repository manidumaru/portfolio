import { Tabs } from "../ui/tabs";

import { PROJECT_DATA } from "./project-data";
import EachProject from "./eachProject";

export function Projects() {
  const tabs = [
    {
      title: "Shopify",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-900">
          <EachProject project={PROJECT_DATA.Shopify} />
        </div>
      ),
    },
    {
      title: "Zoovies",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-900">
          <EachProject project={PROJECT_DATA.Zoovies} />
        </div>
      ),
    },
    {
      title: "Bookverse",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-900">
          <EachProject project={PROJECT_DATA.Bookverse} />
        </div>
      ),
    },
    {
      title: "De-Vote",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-900">
          <EachProject project={PROJECT_DATA.DeVote} />
        </div>
      ),
    },
    {
      title: "Baghchal.ai",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-600 to-gray-900">
          <EachProject project={PROJECT_DATA.Baghchal} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto px-4 w-full  items-start justify-start pt-10">
      <Tabs tabs={tabs} contentClassName="my-10 h-auto" tabClassName="text-xs md:text-lg px-0 md:px-2 mx-2 md:mx-0 overflow-x-hidden" />
    </div>
  );
}

