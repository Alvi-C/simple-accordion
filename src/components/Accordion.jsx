
import faqs from '../data/faqs.js'
import AccordionList from './AccordionList.jsx';

const Accordion = () => {
    return (
      <>
        <div className='pt-10'>
          <div>
            <h3 className='text-4xl font-extrabold underline decoration-wavy decoration-cyan-400 text-center'>
              FAQ
            </h3>
            <p className=' text-lg text-center mt-2'>
              Find your questions & answers
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <AccordionList key={index} {...faq} />
            ))}
          </div>
        </div>
      </>
    )
};

export default Accordion;