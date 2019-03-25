import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';


const FeedItem = ({ main_image, text, title, uuid, onListItemClick, expand }) => {
  const toExpand = (expand) ? true : false;
  return (
    <div>
      <li className="list-group-item" onClick={(evt) => onListItemClick(evt, uuid)}>
        <Grid>
          <Row className="show-grid">
            <Col xs={4} md={2}><img src={main_image} alt="No Image"/></Col>
            <Col xs={14} md={10}>
              <div className="content" id="content-id">
                <div className="content-title">
                  {title}
                </div>
                <br />
                <div className="content-text">
                  {text}
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </li>
      <Panel collapsible expanded={toExpand} className="list-item-panel">
        {text}
      </Panel>
    </div>
  );
};


class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIdToExpand: null
    };
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(evt, id) {
    console.log(`Clicked:`, id);
    if (this.state.itemIdToExpand === id) {
      this.setState({ itemIdToExpand: null });  // Collapse
    } else {
      this.setState({ itemIdToExpand: id }); // Expand
    }
  }

  render() {
    const { posts } = this.props;
    if (!posts) {
      return <div></div>;
    }
    return (
      <ul className="col-md-12 list-group">
        {/* {console.log(posts)} */}
        {
          posts.map(post => {
            if (post.uuid === this.state.itemIdToExpand) {
              console.log(`To expand: ${post.uuid}`);
              return (
                <FeedItem
                  key={post.uuid}
                  expand
                  {...post}
                  onListItemClick={this.handleListItemClick}
                />
              );
            } else {
              return (
                <FeedItem
                  key={post.uuid}
                  {...post}
                  onListItemClick={this.handleListItemClick}
                />
              );
            }
          })
        }
      </ul>
    );
  }
}


export default FeedList;
