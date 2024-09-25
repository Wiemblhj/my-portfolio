const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/wiem-belhaj-boubaker-a936311a1/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Wiemblhj"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/github.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/wiem.belhaj.547/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://join.skype.com/invite/NW010gSCrTA2"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/skype.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
