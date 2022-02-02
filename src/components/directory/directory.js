import React from 'react'

import MenuItem from '../menu-item/menu-item'

import './directory.scss'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/zPWRRX9/hats.jpg',
        id: 1,
        linkUrl: 'hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/5h37dJD/jackets.jpg',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/Lpb874Q/sneaker.jpg',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/dpw4Cth/women.jpg',
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/M5yNT2r/men.jpg',
        size: 'large',
        id: 5,
        linkUrl: ''
      }]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (<MenuItem key={id} {...otherSectionProps} />))}
      </div>
    )
  }
}

export default Directory