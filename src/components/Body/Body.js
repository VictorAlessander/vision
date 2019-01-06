import React from 'react';

const Body = (props) => {
  return (
    <div id="wrapper" className={props.toggled ? 'sidebar-toggled' : null}>

    { props.children.filter((comp) => {
      return comp.key === 'Sidebar';
    }) }

      <div id="content-wrapper">
        <div className="container-fluid">

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Overview</li>
          </ol>

          { props.children.filter((comp) => {
            return comp.key === 'Cards';
          }) }

          { props.children.filter((comp) => {
            return comp.key === 'Chart';
          }) }

          { props.children.filter((comp) => {
            return comp.key === 'Table';
          }) }

        </div>
      </div>
    </div>
  );
}

export default Body;