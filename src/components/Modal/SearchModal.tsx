import { useContext, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router";

// context
import { SearchContext } from "../../context/SearchContext";

export default function SearchModal() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState("anime");
  const [query, setQuery] = useState("");
  const { toggleCloseSearchModal } = useContext<any>(SearchContext);

  const handleSearch = async () => {
    navigate(`/${selectedType}?search=${query}`);
    toggleCloseSearchModal();
  };

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto overflow-x-hidden">
        <div className="relative mx-auto my-40 w-auto max-w-3xl px-4">
          <div className="flex w-[250px] justify-center font-bold sm:w-[400px] md:w-[600px]">
            <select
              defaultValue={selectedType}
              className="text-color-blue rounded-l-lg p-2"
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value="anime" className="font-semibold">
                Anime
              </option>
              <option value="manga" className="font-semibold">
                Manga
              </option>
            </select>
            <input
              type="text"
              className="w-full px-4 py-2"
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button
              type="button"
              className="background-color-blue rounded-r-lg p-3 text-xl text-soft-peach"
              onClick={() => handleSearch()}
            >
              <GoSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-slate-600 opacity-50" />
    </>
  );
}
