import React from 'react';


class Nav extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse">
            <span class="text-danger mr-auto h5">
              Acechool.in
                      </span>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <small class="nav-link" href="#">Home</small>
              </li>
              <li class="nav-item active">
                <small class="nav-link" href="#">Contact us</small>
              </li>
              <li class="nav-item active bg-danger signin">
                <small class="nav-link text-light" href="#">Sign in</small>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Nav;