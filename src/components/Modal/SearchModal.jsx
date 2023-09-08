import React, { useContext, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router';

// context
import { SearchContext } from '../../context/SearchContext';

const SearchModal = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('anime');
  const [query, setQuery] = useState('');
  const { toggleCloseSearchModal } = useContext(SearchContext);

  const handleSearch = async () => {
    navigate(`/${selectedType}?search=${query}`);
    toggleCloseSearchModal();
  };

  return (
    <>
      <div className='fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto overflow-x-hidden'>
        <div className='relative mx-auto my-40 w-auto max-w-3xl px-4'>
          <div className='flex w-[250px] sm:w-[400px] md:w-[600px] justify-center font-bold'>
            <select
              defaultValue={selectedType}
              className='p-2 text-color-blue rounded-l-lg'
              onChange={(event) => setSelectedType(event.target.value)}
            >
              <option value='anime' className='font-semibold'>
                Anime
              </option>
              <option value='manga' className='font-semibold'>
                Manga
              </option>
            </select>
            <input
              type='text'
              className='w-full px-4 py-2'
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={(event) => {
                if (event.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
            <button
              type='button'
              className='text-soft-peach background-color-blue p-3 text-xl rounded-r-lg'
              onClick={() => handleSearch()}
            >
              <GoSearch />
            </button>
          </div>
        </div>
      </div>
      <div className='fixed inset-0 z-40 bg-slate-600 opacity-50' />
    </>
  );
};

export default SearchModal;
