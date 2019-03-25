import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './search_bar';
import FeedList from './feed_list';
import PagerWidget from './pager';
import Paginate from './paginate';
import DropDownMenu from './dropdown_menu';
import Navbar from './nav_bar';

const API_KEY = '716dc291-7fb2-43ed-82eb-d421ed02e319';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      searchInProgress: false,
      searchTerm: ''
    };
    this.currentPage = 1;
    this.hasNoSearchDone = true;
    this.updateState = this.updateState.bind(this);
    this.navigatePage = this.navigatePage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  componentDidMount() {
    // this.handleSearch('Donald Trump');
  }

  handleSearch(searchTerm) {
    this.currentPage = 1;
    this.hasNoSearchDone = false;
    let url = `https://webhose.io/search?token=${API_KEY}&format=json&q=%22${searchTerm}%22%20language%3A(english)&sort=relevancy&ts=1479217733969&size=10`;
    axios.get(url)
        .then(this.updateState);
    this.setState({ searchTerm, searchInProgress: true });
  }

  updateState(response) {
    console.log(response);
    this.moreResultsAvailable = response.data.moreResultsAvailable;
    this.nextData = response.data.next;
    const initialPosts = response.data.posts.map(post => {
      const { title, text, uuid, thread: { main_image } } = post;
      return { uuid, title, text, main_image };
    });
    const posts = (this.currentPage === 1) ? {} : this.state.posts;
    posts[this.currentPage] = initialPosts;
    console.log(posts);
    this.setState({ posts, searchInProgress: false });
  }

  navigatePage(change) {
    const page = Object.keys(this.state.posts).find(key => String(this.currentPage)===key);
    if (!page) {
      axios.get(`https://webhose.io${this.nextData}`)
      .then(this.updateState);
      this.setState({ searchInProgress: true });
    } else {
      if (change === "inc") this.moreResultsAvailable -= this.state.posts[this.currentPage].length;
      else if (change === "dec") this.moreResultsAvailable += this.state.posts[this.currentPage+1].length;
      this.setState({ searchInProgress: false });
    }
  }

  handlePageChange(e) {
    e.preventDefault();
    if(e.target.innerText === "Next") {
      this.currentPage++;
      this.navigatePage("inc");
    } else if(e.target.innerText === "Previous") {
      this.currentPage--;
      this.navigatePage("dec");
    }
  }

  handleCategoryClick(e) {
    e.preventDefault();
    this.handleSearch(e.target.innerText);
  }

  showSpinner() {
    return (
      <div className="spinner">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  showContent() {
    return (
      <div className="content">
        <FeedList posts={this.state.posts[this.currentPage]}/>
        <PagerWidget onPagerClick={this.handlePageChange} currentPage={this.currentPage} moreResults={this.moreResultsAvailable}/>
      </div>
    );
  }

  renderBody() {
    if (this.state.searchInProgress) {
      return this.showSpinner();
    } else if (!this.hasNoSearchDone) {
      return this.showContent();
    }
  }

  render() {
    console.log(this.currentPage, this.moreResultsAvailable);
    return (
      <div>
        <Navbar onClickItem={this.handleCategoryClick}/>
        <SearchBar onNewSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
        {this.renderBody()}
        {/* <DropDownMenu /> */}
        {/* <Paginate onPageChange={this.handlePageChange}/> */}
      </div>
    );
  }
}


export default App;
