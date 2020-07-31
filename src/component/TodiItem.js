import React from 'react';

const TodoiItem = props => {
    const {title,handleDelete,handleEdit, id}=props;
    return (
      
<li className="list-group-item text-capitalize d-flex justify-content-between my-4">
    <h6>{title}</h6>
<div className="todo-icon">
    <span className="mx-2 text-success" onClick={()=>handleEdit(id)}>
<i className="fa fa-pencil"/>
</span>
<span className="mx-2 text-danger" onClick={handleDelete}>
<i className="fa fa-trash"/>
</span>

</div>
</li>
 
    );
};



export default TodoiItem;
