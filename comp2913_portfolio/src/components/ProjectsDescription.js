import React, { Component } from 'react'; 
class ProjectsDescription extends Component {
  render() {
    return (
      <div id="accordion" style={{marginTop: '20px'}}>
        
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Todo app project description
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
            This app displays a text input for the user, where they will be able to write a task.
          A button is displayed beside the input. When clicked, this button adds the user’s input to a list of to do items
          Blank items are not added to the list. This can happen if the user presses the “Add” button without writing down a task. The list could potentially have 0 to multiple items.
          Each list item displays a checkbox, and the task that the user wrote.
          When checking off the checkbox, the list item is removed from the list.
          </div>
          </div>
        </div>
        
        <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Stopwatch app project description
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
          This app renders a timer that starts automatically when the View loads.
          “Stop” button pauses the timer.
          “Reset” button resets the timer to 0.
          When the timer is 0, the “Stop” button is re-labeled as “Start”.
          </div>
        </div>
      </div>
      
      <div class="card">
      <div class="card-header" id="headingThree">
        <h5 class="mb-0">
          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Weather app project description
          </button>
        </h5>
      </div>
      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
        This app displays weather information for a select few cities in a table.
        Axios is used to fetch the data from Yahoo weahter api.
        Icons corresponding to each weather type is shown.
        </div>
      </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingFour">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Rock-Paper-Scissor project description
            </button>
          </h5>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
          <div class="card-body">
            This app simulates the Rock-Paper-Scissor game.
            At each round, user can click one of the images to pick his or her choice.
            The winning score is 5.
          </div>
        </div>
      </div>



      </div>
    );
  }
} export default ProjectsDescription;