import React from 'react'

const ToDoItem1 = () => {
    let toDotask = 'Go to college';
    let toDoDate = '04/01/2024';
  return (
    <div>
      <div class="row kg-row ">
          <div class="col-6">
            {toDotask}
          </div>
          <div class="col-4">
            {toDoDate}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
    </div>
  )
}

export default ToDoItem1
