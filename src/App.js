import React from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import './app.scss';

const tempArr = [{
	fName: 'Joe',
	lName: 'Bloggs',
	email: 'joe@gmail.com',
	age: 24,
	onlineStatus: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
      	<Headline header="Posts" desc="Click the button to render the posts!" tempArr={tempArr}/>
      </section>
    </div>
  );
}

export default App;
