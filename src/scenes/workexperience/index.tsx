import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const WorkExperience = ({ setSelectedPage }: Props) => {
  return (
    <section id="workexperience" className="mx-auto min-h-full w-5/6">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.WorkExperience)}
      >
        <div className="mx-auto grid grid-cols-1 gap-8 text-xs md:text-sm">
          <div className="flex flex-col justify-start gap-2">
            <p className="text-xl md:text-2xl">
              Amazon - Software Development Manager
            </p>
            <p className="text-lg italic md:text-xl">October 2022 – May 2024</p>
            <ul className="list-disc">
              <li>
                Oversaw the production planning and execution technology
                solutions (25+ services) for 500+ Whole Foods/40+ Amazon Fresh
                stores
              </li>
              <li>
                Managed a team of 5-9 SDEs day-to-day including promotion and
                underperformance evaluations/documentation
              </li>
              <li>
                Provided routine communication with Amazon and Whole Foods
                leadership and stakeholders detailing project timelines, success
                metrics, and gather business feedback
              </li>
              <li>
                Set Whole Foods-wide standards for cost optimization within AWS
                production and development accounts, templatized reports and
                status updates, and held office hours for SDMs to attend to
                learn about “credit score”, an Amazon-wide term used to measure
                efficiency of technology teams’ resources
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <p className="text-xl md:text-2xl">
              Amazon - Software Development Engineer (I-II)
            </p>
            <p className="text-lg italic md:text-xl">May 2018 – October 2022</p>
            <ul className="list-disc">
              <li>
                Designed, implemented, and delivered an anonymous
                texting/calling system enabling Amazon drivers to contact
                customers for delivery questions
              </li>
              <li>
                Led development of a kiosk solution found in Whole Foods and
                Amazon Go stores nationwide including full development of the
                React application used by customers
              </li>
              <li>
                Utilized CI/CD procedures including unit/integration testing,
                pre-prod staging, and scaling stress tests to ensure solutions
                continued to support Amazon customers beyond launch
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
