// import { Component } from "react";






// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       textVisibility: false
//     };
//   }

//   textVisibilityToggles = () => {
//     this.setState((previousState) => ({
//       textVisibility: !previousState.textVisibility
//     }));
//   }

//   render() {
//     return (
//       <div style={{ textAlign: 'center', marginTop: '50px' }}>
//         <button onClick={this.textVisibilityToggles} 
//           style={{ 
//             backgroundColor: 'purple', 
//             color: 'white', 
//             padding: '15px 25px', 
//             border: 'none', 
//             borderRadius: '10px', 
//             cursor: 'pointer', 
//             fontSize: '18px' 
//           }}
//         >
//           {this.state.textVisibility ? 'Hide Text' : 'Show Text'}
//         </button>
//         {this.state.textVisibility && (
//           <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
//             This is the toggled text!
//           </p>
//         )}
//       </div>
//     );
//   }
// }

// export default App;






// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
       
//     }
//   }
  
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default App




// function UserGreeting(props) {
//   return (
//     <div>
//       <p>Salam, {props.name}!</p>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <UserGreeting name="Nurlan" />
//     </div>
//   );
// }




// import { useEffect } from "react";

// export default function App(){
//   useEffect(()=>{
//     console.log("Salam");
    
//   }, [])
//   return(
//     <div>
//       <h1>Salam</h1>
//     </div>
//   )
// }

// import { useState } from "react";

// function Counter() {
//   const [say, setSay] = useState(0);

//   return (
//     <div className="container">
//       <p>Counter: {say}</p>
//       <div className="buttons">
//         <button className="button1" onClick={() => setSay(say + 1)}>Increment</button>
//         <button className="button2" onClick={() => setSay(0)}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default Counter;


// import React from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// const Home = () => {
//   return <h2>Salammmmmmmm</h2>;
// };

// const About = () => {
//   return <h2>Kod işləyirsə toxunma </h2>;
// };

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;



// import React from "react";

// function App() {
//   const ClickMe = () => {
//     console.log("Salammmmmmmmm!");
//   };

//   return (
//     <div>
//       <button onClick={ClickMe}>Tıkla</button>
//     </div>
//   );
// }

// export default App;






import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return <h2>Welcome to the Home Page</h2>;
};

const About = () => {
  return <h2>Learn more about us! </h2>;
};

const Contact = () => {
    return <h2>Contact us for more information!</h2>;
  };

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;