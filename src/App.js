import React from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
      	<Headline header="Posts" desc="Click the button to render the posts!"/>
      </section>
    </div>
  );
}

export default App;
