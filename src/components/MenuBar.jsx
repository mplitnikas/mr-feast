import React, {Component} from 'react';

class TopBar extends Component {
  render() {
    return (
      <div className="container-fluid top-bar p-3">
        <div class="row">
          <div class="col-sm-2">
            <button class="btn">Browse Recipes</button>
          </div>
          <div className="col-sm-2">
            <button class="btn">Add Recipe</button>
          </div>
        </div>
      </div>
    )
  }
};

export default TopBar;