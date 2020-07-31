import React from 'react';

const TodoInput = props => {
    const{handleChange,addTask , useTask}=props;
    return (
    <div className="card card-body col-md-5 ">
      <form onSubmit={(e) => {
          e.preventDefault()
          addTask()
      }} >
       
        <div  className="input-group">
        <div   className="input-group-prepend">
        <div className="input-group-text bg-primary text-white">
        <i className="fa fa-book"/>
        </div>
    </div>

<input 
onChange={e => handleChange(e.target.value)}
value={useTask}
 type="text" 
 class="form-control" 
 placeholder="Add A ToDo Item" 
 aria-label="Recipient's username"
 aria-describedby="button-addon2"/>
<button className="btn btn-outline-secondary" type="submit" id="button-addon2" >Add</button>
</div>
     
</form>
      
</div>       
    );
};


export default TodoInput;