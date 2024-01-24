import React from 'react'

const AddToDo = () => {
  return (
    <div>
      <div class="row kg-row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Task here" />
          </div>
          <div class="col-4">
            <input type="date" name="" id="" />
          </div>
          <div class="col-2">
            <button type="button " class="btn btn-success kg-button">
              ADD
            </button>
          </div>
        </div>
    </div>
  )
}

export default AddToDo
