import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'yellow', label: 'Желтый' },
  { value: 'red', label: 'Красный' },
  { value: 'green', label: 'Зеленый' },
];

class SelectColor extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder="Цвет"
      />
    );
  }
}

export default SelectColor;