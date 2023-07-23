/* eslint-disable react/prop-types */
import { useState } from 'react';

const AccordionList = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleAccordion = (id) => {
        setActiveTab(activeTab === id ? 0 : id);
    }
    return (
      <>
        <div className=' my-5'>
          <div
            onClick={() => toggleAccordion(props.id)}
            className={
              activeTab === props.id
                ? 'w-[400px] md:w-[500px] flex items-center justify-between gap-4 mx-auto border border-slate-200 bg-slate-100 px-3 py-4 rounded-t-lg cursor-pointer'
                : 'w-[400px] md:w-[500px] flex items-center justify-between gap-4 mx-auto border border-slate-200 bg-slate-100 px-3 py-4 rounded-lg cursor-pointer'
            }
          >
            <h4 className={activeTab === props.id ? 'text-blue-600' : ''}>
              {props.title}
            </h4>

            <div className='transition duration-300'>
              {activeTab === props.id ? (
                <span className='text-base text-blue-600'>
                  <i className='fa-solid fa-chevron-down rotate-180 transition duration-500' />
                </span>
              ) : (
                <span className='text-base'>
                  <i className='fa-solid fa-chevron-down pt-2 rotate-0 transition duration-500' />
                </span>
              )}
            </div>
          </div>
          {activeTab === props.id ? (
            <div className='w-[400px] md:w-[500px] mx-auto border border-t-0 border-slate-100 rounded-b-lg px-3 py-4 '>
              <p>{props.text}</p>
            </div>
          ) : null}
        </div>
      </>
    )
};

export default AccordionList;

