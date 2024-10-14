import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => alert("THIS WAS CLICKED")}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
