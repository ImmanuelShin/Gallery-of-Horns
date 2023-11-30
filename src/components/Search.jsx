import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Search(props) {
  const [search, setSearch] = useState('');
  const [selectedHorns, setSelectedHorns] = useState('Any Horns');

  const handleInput = (e) => {
    const input = e.target.value;
    console.log('Search input:' + input);
    setSearch(input);
    
    props.onSearch(input, selectedHorns);
  }
  
  const handleSelect = (e) => {
    const selection = e.target.value;
    setSelectedHorns(selection);
    console.log(selection);
    props.onSearch(search, selection);
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
        <Form.Select 
          aria-label='Horn Quantity selection' 
          value={selectedHorns} 
          onChange={handleSelect}
        >
          <option value='Any Horns'>Choose number of horns</option>
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