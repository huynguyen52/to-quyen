import a from '../assets/a.svg';

const socials = [
  {
    label: 'Fb',
    name: 'Facebook',
    link: 'https://facebook.com',
  },
  {
    label: 'In',
    name: 'LinkedIn',
    link: 'https://linkedin.com',
  },
  {
    label: 'Tw',
    name: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    label: 'Be',
    name: 'Behance',
    link: 'https://behance.com',
  },
];

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black/40">
      <div className="navbar container mx-auto pl-0">
        <div className="flex-1">
          <ul className="menu menu-horizontal pl-0">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="tooltip hover:bg-transparent hover:text-[#4242CE]"
                  data-tip={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none">
          <div className="flex items-center gap-2">
            <img src={a} alt="a" />
            <a className="text-xs">Queentessa, 2023</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
