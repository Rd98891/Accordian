import { useState } from "react";
import PropTypes from 'prop-types';
const Accordion = ({data}) => {

    const [selected, setSelected] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const displayContent = (getSelectedId) => {
        setSelected(getSelectedId===selected ? null : getSelectedId);
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {data?.map(({id, query, answer}) => (
                <div key={id} className="font-semibold m-5 p-3 h-16">
                    <div className="flex flex-row justify-between p-2 items-center cursor-pointer " onClick={() => displayContent(id)}>
                        <h3 className="font-2xl text-cyan-500">{query}</h3>
                        <span className="material-symbols-outlined">{isOpen ? 'unfold_less': 'unfold_more'}</span>
                    </div>
                    {
                        selected === id ? <div className="font-small p-1 m-1">{answer}</div>: null
                    }
                </div>
            ))}

        </div>
    )
}

Accordion.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        query: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
      })
    ).isRequired,
  };


export default Accordion;