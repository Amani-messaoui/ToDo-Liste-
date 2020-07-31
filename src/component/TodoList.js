import React from 'react';
import TodoiItem from './TodiItem';
const TodoList = props => {
    const{todos,handleDelete,handleEdit}=props;
    return (
        
          <ul className="list-group col-md-5">
          <h3 className="text-capitalize text-center">Write your List ...</h3>

        {todos 
             ? todos.map(tod=>{ 
            return(
               
                <TodoiItem 
                key={tod.id}
                title={tod.title}
                id= {tod.id}
                handleDelete={()=>handleDelete(tod.id)}
                handleEdit={()=>handleEdit(tod.id)}
            />
    
            )
           
        } )
        : "Loding..."
    }
        </ul>
        
    );
};


export default TodoList;
