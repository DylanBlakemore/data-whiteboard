import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Icon({ icon, style = 'far', widget, onDragStart, size = 'md' }) {
  return <div
    draggable
    data-widget={ widget }
    onDragStart={ onDragStart }
    className={ 'icon' }
  >
    <FontAwesomeIcon
      icon={ [style, icon] }
      size={ size }
    />
  </div>
}
