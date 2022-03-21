import React from 'react';
import yearData from '../utils/yearData';
import styled from 'styled-components';

const FilterComponent = (props) => {
  return (
    <>
      <Select onChange={(e) => props.handleYearChange(e.target.value)}>
        <option value='Year'>Year</option>
        {yearData.map((item) => (
          <option key={item.id} value={item.year}>
            {item.year}
          </option>
        ))}
      </Select>
    </>
  );
};

const Select = styled.select`
  width: 70px;
  height: 30px;
  border: 1.8px solid lightgray;
  padding-left: 0.5em;
  margin-left: 1rem;
  border-radius: 10px;
  color: #555;
  font-size: 0.6em;
  font-weight: 500;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export default FilterComponent;
