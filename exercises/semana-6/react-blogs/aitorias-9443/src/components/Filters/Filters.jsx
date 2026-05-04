import { useState } from 'react'
import { Button } from '../Button/Button'
import './Filters.css'

export function Filters({filterButtons, onFilterChange}) {

  const [activeButton, setActiveButton] = useState('all');

  const handleClick = (button) => {
    setActiveButton(button.id);
    onFilterChange(button.value); // Modificar aquí para usar button.value en lugar de button.dataFilter
  };

  return (
    <div className="filters">
        {filterButtons?.map((button) => (
          <Button
            key={button.id}
            type="button"
            classes="button filter-button"
            isActive={activeButton === button.id}
            id={button.id}
            value={button.value}
            dataFilter={button.dataFilter}
            disabled={false}
            onClick={() => handleClick(button)}
          >
            {button.text}
          </Button>
        ))}
    </div>
  )
}