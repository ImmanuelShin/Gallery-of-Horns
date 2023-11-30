import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Search(props) {
  const [search, setSearch] = useState('');
  const [selectedHorns, setSelectedHorns] = useState('');

  const handleInput = (e) => {
    const input = e.target.value;
    setSearch(input);
    props.onSearch(input);
  }
  
  const handleSelect = (e) => {
    const selected = e.target.value;
    setSelectedHorns(selected);
    props.onSearch(search, selected);
  }

  return (
    <Form>
      <Form.Group controlId='filteredSearch'>
        <Form.Control 
          type='text'
          placeholder='Search for keywords or titles...'
          value={search}
          onChange={handleInput}
        />
        <Form.Select aria-label='Horn Quantity selection' value={selectedHorns} onChange={handleSelect}>
          <option value=''>Choose number of horns</option>
          {props.uniqueHorns.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default Search;