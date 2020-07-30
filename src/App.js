import React from 'react';
import Header from './component/header/Header';
import Headline from './component/headline/Headline';
import ShareButton from './component/button/Button';
import ListItem from './component/listItem/ListItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/actions';
import './app.scss';

const tempArr = [{
	fName: 'Joe',
	lName: 'Bloggs',
	email: 'joe@gmail.com',
	age: 24,
	onlineStatus: true
}]

function App({posts, fetchPosts}) {

  const fetch = () =>{
    fetchPosts()
  }

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch
  }

  return (
    <div className="App" data-test="AppComponent">
      <Header />
      <section className="main">
      	<Headline header="Posts" desc="Click the button to render the posts!" tempArr={tempArr}/>
        <ShareButton {...configButton} />
        { posts.length > 0 &&
          <div>
            { posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return (<ListItem key={index} {...configListItem}/>)
            })

            }
          </div>
        }
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
