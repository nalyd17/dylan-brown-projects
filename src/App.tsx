import Navbar from "@/scenes/navbar";
import Profile from "@/scenes/profile";
import WorkExperience from "@/scenes/workexperience";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Profile,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Profile);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app max-w-[1400px] bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="flex flex-col gap-16 py-28">
        <Profile setSelectedPage={setSelectedPage} />
        <WorkExperience setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
