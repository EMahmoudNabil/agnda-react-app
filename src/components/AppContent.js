import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useAppContentHook } from "../hooks/useAppContentHook";
import TodoItem from "./TodoItem";

function AppContent({ personData }) {
  const [container, child, filteredTodoList] = useAppContentHook({
    personData,
  });

  return (
    <motion.div
      className="content__wrapper"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            <motion.div key={todo.id} variants={child}>
              <TodoItem key={todo.id} todo={todo} />
            </motion.div>
          ))
        ) : (
          <motion.p variants={child} className={"emptyText"}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;
