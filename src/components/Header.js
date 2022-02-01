import propTypes from 'prop-types';
import Button from '../components/Button';
const Header = ({title,paragraph}) => {
  const onClick = () =>{
    console.log("clicked");
  }

  return (
    <header>
      <h1>{title}</h1>
      <Button color = "green" text = "Add" onClick = {onClick}/>
      
    </header>
  )
}

// incase of no props value, we could set default like below
// Header.defaultProps = {
//     title = "Task Tracker",
// }

Header.propTypes ={
  title:propTypes.string.isRequired,
}
//Css styling in JS
// const headingStyle = {
//   color:'red',
//   backgroundColor:"black"
// }

export default Header
