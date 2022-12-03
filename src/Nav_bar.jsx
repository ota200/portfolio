import './App.css';

function NavBar(props) {
  return (
    <div className="pad">

      <div className='nav'>

        <h2>O.T.A</h2>

        <div className='bg_button'>
            <button className='home' onClick={props.home}><svg className="home_icon" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16.997C0 15.4777 0.690785 14.0408 1.87735 13.092L16.3774 1.49703C18.2031 0.0370402 20.7969 0.0370405 22.6226 1.49703L37.1227 13.092C38.3092 14.0408 39 15.4777 39 16.997V40C39 42.7614 36.7614 45 34 45H5C2.23858 45 0 42.7614 0 40L0 16.997Z" fill="#FEFCFB"/></svg></button>
            <button onClick={props.about}>about</button>
            <button onClick={props.projects}>projects</button>
            <button onClick={props.home}>dark mode</button>
        </div>

      </div>

    </div>
  );
}

export default NavBar;