import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 bottom-0 py-6 flex flex-col-reverse md:flex-row gap-4 justify-between items-center`}
    >
      <span className="flex items-center gap-1">
        <FontAwesomeIcon className="text-lg" icon={faCopyright} />
        Aditya Rastogi. All rights are reserved.
      </span>
      <div className="flex gap-5">
        <a href="https://github.com/AdityaRastogi18" target="_blank">
          <FontAwesomeIcon
            className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300"
            icon={faGithub}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-rastogi880/"
          target="_blank"
        >
          <FontAwesomeIcon
            className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300"
            icon={faLinkedin}
          />
        </a>
        <a href="https://www.instagram.com/adi__880/" target="_blank">
          <FontAwesomeIcon
            className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300"
            icon={faInstagram}
          />
        </a>
        <a href="https://x.com/adityarastogi88" target="_blank">
          <FontAwesomeIcon
            className="text-xl md:text-2xl hover:text-slate-500 dark:hover:text-teal-300"
            icon={faXTwitter}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
