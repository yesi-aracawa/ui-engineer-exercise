import React from 'react';

function ActivityInfo() {
  return (
    <div class='central-panel-container'>
      <nav>
        <ul>
          <li>Activity</li>
          <li>Traking</li>
          <li>Reminders</li>
        </ul>
      </nav>
      <div class='activity-tab'>
        <div class='activity-detail-buttons'>
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
              Person
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">x</a></li>
              <li><a href="#">x</a></li>
              <li><a href="#">x</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
              Activity
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">x</a></li>
              <li><a href="#">x</a></li>
              <li><a href="#">x</a></li>
            </ul>
          </div>
          <a class='log-call-btn'>
            <span></span>
          </a>
          <a class='add-note-btn'>
            <span></span>
          </a>
        </div>
        <h2>Upcoming Activities</h2>
        <p></p>
        <h2>Past Activities</h2>
        <div></div>
      </div>
    </div>
  );

}

export default ActivityInfo;