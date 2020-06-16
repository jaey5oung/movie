// import React from 'react';
// import PropTypes from "prop-types";

// function Food({ name, picture, rating }) {
//   return (<div>
//     <h2>i like {name}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src={picture} alt={name} />
//   </div>
//   );
// }


// const foodLike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image: "a",
//     rating: 5.0
//   },
//   {
//     id: 2,
//     name: "ramen",
//     image: "b",
//     rating: 4.9
//   },
//   {
//     id: 3,
//     name: "gogi",
//     image: "c",
//     rating: 4.8
//   },
//   {
//     id: 4,
//     name: "solt",
//     image: "d",
//     rating: 4.7
//   }

// ];

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       {foodLike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }


// export default App;

// --------------------------------------------------------------------------------------------

// import React from 'react';
// //리액트는 자동적으로 너의 클래스 컴포넌트에 랜더 매소드를 실행한다 자동적으로
// class App extends React.Component {
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));

//   };
//   Minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));

//   };
//   componentDidMount(){
//     console.log("component rendered");

//   }
//   componentDidUpdate(){
//     console.log("goodbye, cruel world");

//   }
//   componentWillUnmount(){
//     console.log("good, cruel world");

//   }
//   render() {
//     console.log("i'm redering");

//     return (
//       <div>
//         <h1> The number is : {this.state.count}</h1>
//         <button onClick={this.add}>add</button>
//         <button onClick={this.Minus}>Minus</button>
//       </div>
//     )
//   }
// }

// export default App;



// --------------------------------------------------------------------------------------------

// import React from 'react';


// class App extends React.Component {
//   state = {
//     isLoading: true

//   };
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({isLoading : false})
//     }, 6000)

//   }
//   render() {
//     const { isLoading } = this.state;
//     return <div>{isLoading ? "Loading" : "We are ready"}</div>;

//   }
// };

// export default App;


import React from 'react';
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
        movie: []

    };
    getMovie = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        this.setState({ movies, isLoading: false });

    }
    componentDidMount() {
        this.getMovie();

    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading..." : "We are ready"}</div>;

    }
};

export default App;
