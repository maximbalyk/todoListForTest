/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface SearchTaskProps {
  query: string | any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchTask: React.FC<SearchTaskProps> = ({
  query,
  handleChange,
}) => {
  return (
    <>
      <label htmlFor="exampleInputEmail2" className="form-label">Search task</label>
      <input
        style={{ width: '100%' }}
        type="text"
        placeholder="Enter key word"
        name="item"
        value={query}
        onChange={(event) => (
          handleChange(event)
        )}
        className="form-control mb-2"
        id="exampleInputEmail2"
      />
    </>
  );
};

export default SearchTask;
