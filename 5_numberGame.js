//uses font awesome to print stars
const Stars = (props) => {

  const numberOfStars =  1 + Math.floor(Math.random()*9);

  let stars = [];


  return(
    <div className="col-5">
      {_.range(numberOfStars).map(i =>   <i key={i} className="fa fa-star" />)}
    </div>
  );
}

const Button = (props) => {
  return(
    <div className="col-2">
      <button> = </button>
  </div>
);
}

const Answer = (props) => {
  return(
    <div className="col-5">
      ...
    </div>
  );
}

const Numbers = (props) => {

  //lodash library to generate this array
  //  const arrayOfNumbers = _.range(1,10);

  return(
    <div className="card text-center">
      <div>
        {
          Numbers.list.map((number, i) =>
          <span key={i}>
            {number}
          </span>
        )
      }
    </div>
  </div>
);
}

//In order to avoid this array to be generated everysingle time a Numbers
//component is rendered, we should bring it outside the component and then
//access it from the components that might use it
Numbers.list = _.range(1,10);


class Game extends React.Component{
  render (){
    return(
      <div className="container">
        <h3>
          Play nine
        </h3>
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

class App extends React.Component{
  render (){
    return(
      <div>
        <Game />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  mountNode
);
