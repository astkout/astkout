const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="c-space pt-7 pb-3 border-t border-black-300 flex items-center justify-center flex-wrap gap-5">
  <p className="text-white-500">
    © {currentYear} Asterios Koutoulidis. All rights reserved.
  </p>
</footer>

  );
};

export default Footer;
