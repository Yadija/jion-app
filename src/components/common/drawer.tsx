import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const drawer = [
  {
    id: "top-1",
    name: "Top",
    path: "/top",
    content: [
      {
        id: "top-anime-1",
        name: "Top Anime",
        path: "/top/anime",
      },
      {
        id: "top-manga-1",
        name: "Top Manga",
        path: "/top/manga",
      },
    ],
  },
  {
    id: "type-1",
    name: "Type",
    content: [
      {
        id: "anime-1",
        name: "Anime",
        path: "/anime",
      },
      {
        id: "manga-1",
        name: "Manga",
        path: "/manga",
      },
    ],
  },
  {
    id: "producers-1",
    name: "Producers",
    path: "/producers",
  },
  {
    id: "favorite-1",
    name: "Favorite",
    content: [
      {
        id: "favorite-anime-1",
        name: "Anime",
        path: "/favorite/anime",
      },
      {
        id: "favorite-manga-1",
        name: "Manga",
        path: "/favorite/manga",
      },
    ],
  },
];

export default function Drawer() {
  return (
    <>
      <section className="text-center">
        <button
          onFocus={() => {
            document
              .getElementById("drawer-navigation")
              ?.classList.remove("translate-x-full");
          }}
          className="text-color-white hover:text-color-blue hover:background-color-white ml-5 rounded-full p-2 text-2xl font-medium"
          type="button"
        >
          <RxHamburgerMenu />
        </button>
      </section>
      <section
        id="drawer-navigation"
        className="fixed right-0 top-0 z-40 flex h-screen w-full translate-x-full overflow-y-auto transition-transform"
        tabIndex={-1}
      >
        <button
          className="w-full cursor-default"
          onClick={() =>
            document
              .getElementById("drawer-navigation")
              ?.classList.add("translate-x-full")
          }
        ></button>
        <section className="background-color-blue w-72 p-4 shadow-xl">
          <section>
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold uppercase"
            >
              Menu
            </h5>
            <button
              type="button"
              onFocus={() => {
                document
                  .getElementById("drawer-navigation")
                  ?.classList.add("translate-x-full");
              }}
              data-drawer-hide="drawer-navigation"
              aria-controls="drawer-navigation"
              className="hover:text-color-blue hover:background-color-white absolute right-5 top-3 inline-flex size-8 items-center justify-center rounded-full text-2xl"
            >
              <RxCross1 />
              <span className="sr-only">Close menu</span>
            </button>
          </section>
          <section className="overflow-y-auto py-4">
            <ul className="space-y-2 font-medium">
              {drawer.map((item) => (
                <li key={item.id}>
                  <section className="hover:text-color-blue hover:background-color-white flex items-center justify-between rounded-lg p-2">
                    {item.path ? (
                      <Link to={item.path}>
                        <span className="ml-3">{item.name}</span>
                      </Link>
                    ) : (
                      <span className="ml-3">{item.name}</span>
                    )}
                    {item.content && (
                      <button
                        type="button"
                        onClick={() => {
                          const dropdown = document.getElementById(
                            `dropdown-${item.id}`,
                          );

                          if (dropdown?.classList.contains("hidden")) {
                            dropdown?.classList.remove("hidden");
                          } else {
                            dropdown?.classList.add("hidden");
                          }
                        }}
                        className="hover:text-color-white hover:background-color-blue rounded-full p-2"
                      >
                        <svg
                          className="size-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                    )}
                  </section>
                  {item.content && (
                    <ul
                      id={`dropdown-${item.id}`}
                      className="background-color-white text-color-blue hidden space-y-2 rounded-lg p-2"
                    >
                      {item.content.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.path}
                            className="hover:text-color-white hover:background-color-blue flex items-center p-2 pl-6 transition duration-75"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}
