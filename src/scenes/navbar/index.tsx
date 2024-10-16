import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between text-nowrap";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full max-w-[1400px] py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full`}>
            <h6 className="w-full text-2xl font-bold">Dylan Brown Projects</h6>
            {isAboveMediumScreens ? (
              <div className="flex w-full items-center justify-end gap-8">
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Profile"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Work Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Education"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Links"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <button
                    className="rounded-md bg-secondary-500 px-6 py-2 hover:bg-primary-500 hover:text-white"
                    onClick={() => alert("TODO: Download Functionality")}
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 text-2xl">
            <Link
              page="Profile"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Work Experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Education"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Links"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="flex justify-center py-4">
            <button
              className="rounded-md bg-secondary-500 px-6 py-2 hover:bg-primary-500 hover:text-white"
              onClick={() => alert("TODO: Download Functionality")}
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
