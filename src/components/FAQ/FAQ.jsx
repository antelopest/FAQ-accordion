import React, {useState, useEffect} from 'react';
import './FAQ.css';

import SvgIcon from "@/components/SvgIcon/SvgIcon.jsx";

import {getQuestions} from '@services/QuestionsService/QuestionsService.js'

export default function FAQ() {

  const [questions, setQuestions] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const data = getQuestions();
    setQuestions(data);
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
      <section className="faq">
        <header className="faq__header">
          <SvgIcon name="icon-star" width={24} height={24}/>
          <h1 className="faq__title">FAQs</h1>
        </header>

        {questions.map((item, index) => (
            <div key={index} className="faq__item">
              <button className="faq__button" onClick={() => toggle(index)}>
                <span className="faq__question">{item.question}</span>
                <SvgIcon
                    name={openIndex === index ? "icon-minus" : "icon-plus"}
                />
              </button>

              <p className={`faq__answer ${openIndex === index ? "faq__answer--open" : ""}`}>
                {item.answer}
              </p>
            </div>
        ))}
      </section>
  )
}