import React from 'react';
import Blog from '../core/components/Blog/Blog';

export default class BlogPage extends React.Component {

  handleMenuClick(e: any){

  }


  render() {
    return (
        <div className='page-blog'>
            <Blog/>
        </div>
    )
  }
}