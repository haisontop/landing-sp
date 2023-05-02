import React from 'react'
import AccordionsCard from './AccordionsCard';

export interface accordionsType {
    id : number;
    question : string;
    answer : string;
}

const Accordions = ({content} : {content : accordionsType[]}) => {
  return (
    <div>
        {
            content.map((dt : accordionsType) => <AccordionsCard key={dt.id} id={dt.id} question={dt.question} answer={dt.answer} />)
        }
    </div>
  )
}

export default Accordions