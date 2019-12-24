import React from "react";

import './presentation-content.css';
import Button from "../button";

const PresentationContent = () => {
  return(
      <div className="presentation__content">
          <div className="presentation__text">
              <h2 className='title title_color_white'>Available for you anytime <br/>
                  Everywhere</h2>
              <div className="presentation__description">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                      tincidunt interdum sapien.
                  </p>
                  <p>
                      Nulla malesuada fermentum purus. Nullam blandit ligula eget
                      hendrerit ultricies. Suspendisse potenti. Phasellus euismod
                      ultrices ligula, venenatis suscipit mauris tempor id.
                  </p>
              </div>
              <Button />
          </div>
      </div>
  );
};

export default PresentationContent;