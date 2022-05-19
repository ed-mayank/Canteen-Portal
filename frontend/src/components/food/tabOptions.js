import React from 'react';
import './style.css';

const tabs = [
  {
    id: "1",
    name: "Drinks",
    active_img: "https://b.zmtcdn.com/data/pictures/5/19602755/e387d2cee8990114cf8b6b39984ac294.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    backdrop: "FCEEC0",
  },
  {
    id: "2",
    name: "Noodles",
    active_img: "https://b.zmtcdn.com/data/dish_photos/a45/08f6c438418379635a8eb4bab5fd1a45.jpg?output-format=webp",
    backdrop: "FCEEC0",
  },
  {
    id: "3",
    name: "Sweets",
    active_img: "https://b.zmtcdn.com/data/pictures/chains/9/2400299/06228e7b2c16c8612b1383d795580b3a_o2_featured_v2.jpg?output-format=webp",
    backdrop: "FCEEC0",
  },
  {
    id: "4",
    name: "Other",
    active_img: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
    backdrop: "FCEEC0",
  },
]

const tabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className='tabOptions'>
      <div className='max-width options-wrapper'>
        {tabs.map((tab) => {
          return (<div onClick={() => setActiveTab(tab.name)}
            className={`tab-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}>
              <div className='tab-image-container absolute-center'
              style={{
                backgroundColor: `${
                  activeTab === tab.name ? tab.backdrop : ""
                }`,
              }}
              >
                <img
                src={tab.active_img}
                className="tab-image"
                alt={tab.name}
                title={tab.name}
              />
                </div>
            </div>
          )
        })
        }
      </div>
    </div>

  )
};

export default tabOptions;
