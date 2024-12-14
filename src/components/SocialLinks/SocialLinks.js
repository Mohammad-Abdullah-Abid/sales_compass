import facebookIcon from '../../images/social/facebook.png';
import instagramIcon from '../../images/social/instagram.png';
import linkedinIcon from '../../images/social/linkedin.png';
import tiktokIcon from '../../images/social/tiktok.png';

const SocialLinks = () => (
    <ul className="flex justify-center mb-4 md:mb-0">
    <li>
      <a
        href="https://www.facebook.com/share/19hqXwL9ue/?mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-blue-900 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-500 hover:bg-white-100"
        aria-label="Facebook"
      >
        <img
          src={facebookIcon}
          alt="Facebook"
          className="w-8 h-8"
        />
      </a>
    </li>
    <li className="ml-4">
      <a
        href="https://www.instagram.com/salecompass/profilecard/?igsh=MW8zZ2twYWZmdXVjYw=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-blue-900 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-500 hover:bg-white-100"
        aria-label="Instagram"
      >
        <img
          src={instagramIcon}
          alt="Instagram"
          className="w-8 h-8"
        />
      </a>
    </li>
    <li className="ml-4">
      <a
        href="https://www.linkedin.com/in/ibrahim-hammad-723023a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-blue-900 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-500 hover:bg-white-100"
        aria-label="LinkedIn"
      >
        <img
          src={linkedinIcon}
          alt="LinkedIn"
          className="w-8 h-8"
        />
      </a>
    </li>
    <li className="ml-4">
      <a
        href="https://www.tiktok.com/@sale.compass?_t=ZS-8s5zl1uKFNv&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-blue-900 transition duration-150 ease-in-out bg-white rounded-full shadow hover:text-gray-500 hover:bg-white-100"
        aria-label="TikTok"
      >
        <img
          src={tiktokIcon}
          alt="TikTok"
          className="w-8 h-8"
        />
      </a>
    </li>
  </ul>
);

export default SocialLinks;