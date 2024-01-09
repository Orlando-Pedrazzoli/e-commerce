import React from 'react';
import './DescriptionBox.css';

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil aut
          eaque qui? Nesciunt similique adipisci doloremque beatae velit, odit
          voluptatum. Deleniti dolor accusantium maiores omnis provident
          obcaecati hic architecto sit.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aut
          pariatur non numquam cum reiciendis, suscipit eius dicta maxime harum
          repellendus mollitia aperiam expedita eaque at labore aliquam ipsa
          asperiores?
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
