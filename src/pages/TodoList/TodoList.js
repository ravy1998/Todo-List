import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Modal from "../../components/Modal";
import { useTodo } from "./component/Todo-hooks";
import {selectCategory} from "../../store/screens/todo";
import { useDispatch, useSelector } from "react-redux";
// import "./assets/css/style.css";

const TodoList = () => {
  const {
    handleKeyDown,
    handleRemove,
    handleUpdate,
    categoryList,
    list,
    newTodo,
    setNewTodo,
    handleClickCategory, 
    categorySelected
  } = useTodo();
  const category = useSelector((state) => state.todo);

  return (
    <div className="container-fluid">
      <div className="row mainRow">
        <div className="col-md-3 side text-center">
          <div className="mt-4">
            <Modal />
          </div>
          <ul className="sc">
            {categoryList &&
              categoryList.map((item, index) => {
                  return (
                      <li key={index} className="categoryList mt-4" onClick={()=>handleClickCategory(item)}>
                        {item}
                      </li>
                    )
                })}
          </ul>
        </div>
        <div className="col-md-9 text-center">
          <div className=" main">
            {(categorySelected) ? <input
              type="text"
              className="inputField"
              placeholder="Write a new task..."
              value={newTodo || ""}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyDown}
            /> : <h4>Please Select Category</h4>
            }
            {/* <button type="submit" onClick={() => handleSubmit()}>
              Add
            </button> */}
          </div>
          <ul className="list">
            {list.todo.todos.length > 0 &&
              list.todo.todos.filter(function (item) {
                return categorySelected === item.category;
              }).map((item) => {
                return (
                  <li key={item.id} className="listItem">
                    <span>{item.item} </span>
                    <div className="listIcon">
                      <span onClick={() => handleRemove(item.id)}>
                        <AiFillDelete className="listIcon1" />
                      </span>
                      <span
                         onClick={() => handleUpdate(item.id)}
                      >
                        <AiFillEdit   className="listIcon2" />
                      </span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

// <div className="container">
//   <div className="row">
//     <div className="col-md-9">
//       <div>
//         <input
//           type="text"
//           placeholder="Write a new task..."
//           value={newTodo || ""}
//           onChange={(e) => setNewTodo(e.target.value)}
//         />
//         <button type="submit" onClick={() => handleSubmit()}>
//           Add
//         </button>
//       </div>

//       {list.todo.todos.length > 0 &&
//         list.todo.todos.map((item) => {
//           return (
//             <div key={item.id}>
//               <p>{item.item} </p>
//               <span
//                 onClick={() => handleRemove(item.id)}
//                 style={{ color: "red" }}
//               >
//                 <AiFillDelete />
//               </span>
//               <span
//                 onClick={() => handleUpdate(item.id)}
//                 style={{ color: "green" }}
//               >
//                 <AiFillEdit />
//               </span>
//             </div>
//           );
//         })}
//     </div>
//   </div>
// </div>
