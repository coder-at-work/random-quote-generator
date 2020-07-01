import React from 'react';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { facebook } from 'react-icons-kit/fa/facebook';
import { quoteLeft } from 'react-icons-kit/fa/quoteLeft'

const QuoteGenerator = props => {
    const { quoteData, color, newQuote } = props;
    const { quote, author } = quoteData;
    return (
        <div className='container' id='quote-box' style={{ color: color }}>
            <div className='quoteSection'>
                <div className='quote' id='text'><Icon icon={quoteLeft} size={30} />  {quote}</div>
            </div>
            <div className='authorSection' id='author'>
                - {author}
            </div>
            <div className='btnSection'>
                <div className='left'>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + ' - ' + author)}`} target='_blank' rel="noopener noreferrer"><button class='socialBtn' id='tweet-quote' style={{ backgroundColor: color, color: '#FFF' }}><Icon icon={twitter} size={26} /></button></a>
                    <a><button class='socialBtn' style={{ backgroundColor: color, color: '#FFF' }}><Icon icon={facebook} size={26} /></button></a>
                </div>
                <div className='right'>
                    <button class='changeBtn' id='new-quote' style={{ backgroundColor: color, color: '#FFF' }} onClick={() => newQuote()}>New Quote</button>
                </div>
            </div>
        </div>
    )
}

export default QuoteGenerator;