import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Card(props) {

    console.log('button changed');
    function leftClickHandler(e) {
        props.shift(1, props.card.id - 1);
    }
    function rightClickHandler(e) {
        props.shift(2, props.card.id - 1);
    }
    function surpriseClickHandler(e) {
        props.shift(3, props.card.id - 1);
    }
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.card.image} alt='Profile-Picture' />
                <div className="imageBackground"></div>
            </div>
                    <p className='name'>{props.card.name}</p>
                    <p>{props.card.job}</p>

                <ImQuotesLeft className='font'/>
                <p>{props.card.text}</p>
                <ImQuotesRight className='font'/>
                <div className='button-container'>
                    <button onClick={leftClickHandler}> <AiOutlineLeft /></button>
                    <button onClick={rightClickHandler}> <AiOutlineRight /></button>
                </div>
                <button className='surprise-button' 
                onClick={surpriseClickHandler}>
                SURPRISE ME
                </button>
        </div>
    );
}

export default Card;