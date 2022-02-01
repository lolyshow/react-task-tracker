import propTypes from 'prop-types';
//              destructure props and get put color and text
const Button = ({color, text, onClick}) => {
    return (<button className="btn" onClick ={onClick} style ={{backgroundColor:color}}>{text}</button>)
  }

  Button.protoTypes ={
      text: propTypes.string,
      color:propTypes.string,
      onClick:propTypes.func,
  }
export default Button;