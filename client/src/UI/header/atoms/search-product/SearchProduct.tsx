import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { Component, useContext } from 'react';
import Select from 'react-select';
import "./searchProduct.css";
import { Context } from '../../../..';


const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
	<label style={{ marginRight: '1em' }}>
	  <input type="checkbox" {...props} />
	  {children}
	</label>
  );
  const options = [
	{value: 'All Categories', label: 'All Categories'},
	{value: 'Phones', label: 'Phones'},
	{value: 'Computers', label: 'Computers'},
  ]
  
  interface State {
	readonly isSearchable: boolean;
  }
  

  export default class SingleSelect extends Component<{}, State> {
	state: State = {
	  isSearchable: true,
	};

	toggleSearchable = () =>
    this.setState((state) => ({ isSearchable: !state.isSearchable }));


  render() {
    const {
      toggleSearchable,
    } = this;

    const { isSearchable } =
      this.state;

  
	  return (
		<div className='select-row'>
			<Select
				classNamePrefix="custom-select__control"
				isSearchable={false}
				options={options}
				placeholder='All Categories'
			/>
			<input
				className='select-row__input'
				type="text"
				placeholder='Search Products, categories ...'
			/>
			<FontAwesomeIcon
				icon={faMagnifyingGlass} 
				className='select-row__icon-search'
				/>
		</div>
	  );
	}
  }