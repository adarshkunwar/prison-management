const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Team",
    path: "/team",
  },
  {
    label: "Features",
    path: "/features",
  },
];

const SecondTopBar = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
            {links.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondTopBar;
