import React, { useCallback, useState } from 'react';

function Debounce() {
  const [searchVal, setSearchVal] = useState('');

  // Pure debounce function (kept outside render)
  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  };

  const handleSearch = (val) => {
    console.log("Debounced:", val);
  };

  // Create debounced function only once
  const debounceSearch = useCallback(debounce(handleSearch, 500), []);

  const onChangeHandler = (e) => {
    setSearchVal(e.target.value);
    debounceSearch(e.target.value);
  };

  return (
    <div className='ml-2'>
      <input
        className='border'
        value={searchVal}
        onChange={onChangeHandler}
        type="text"
        placeholder='search here'
      />
    </div>
  );
}

export default Debounce;
