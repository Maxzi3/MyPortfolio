import BackToTheTop from "./BackToTheTop";
const Footer = () => {
  return (
    <div className="bg-bgcolor py-3 px-4 text-textcolor1 flex flex-row items-center">
      <p className="mt-2 text-sm w-full ">&copy; 2024 Coded by Maxwell.</p>
      <BackToTheTop />
    </div>
  );
};

export default Footer;
