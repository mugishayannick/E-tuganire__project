import React from 'react'
import { BlackSearchIcon } from '../../resources/icons/search-black'
import './Searchinput.css';

function Searchinput() {
  return (
    <form classname="search-form">
      <input classname="search-input" type="text" name="search" />
      <button classname="search-button">
          <BlackSearchIcon />

      </button>
    </form>
  )
}

export default Searchinput
