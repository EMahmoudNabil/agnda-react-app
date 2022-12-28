import { format } from "date-fns";
import { motion } from "framer-motion";

import { MdDelete, MdEdit } from "react-icons/md";

import { getClasses } from "../utils/getClasses";

import TodoModal from "./TodoModal";
import CheckButton from "./CheckButton";
import { useTodoItemHook } from "../hooks/useTodoItemHook";

function TodoItem({ todo }) {
  const [
    child,
    checked,
    setChecked,
    updateModalOpen,
    setUpdateModalOpen,
    handleCheck,
    handleDelete,
    handleUpdate,
  ] = useTodoItemHook({ todo });

  return (
    <>
      <motion.div className="item" variants={child}>
        <div className="todoDetails">
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className="texts">
            <p
              className={getClasses([
                "todoText",
                todo.status === "complete" && "--completed",
              ])}
            >
              {todo.title}
            </p>
            <p className="time">
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <MdDelete />
          </div>
          <div
            className="icon"
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <MdEdit />
          </div>
        </div>
      </motion.div>
      <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
