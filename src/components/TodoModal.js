import React from "react";

import { MdOutlineClose } from "react-icons/md";

import { AnimatePresence, motion } from "framer-motion";

import Button from "./Button";
import { useTodoModalHook } from "../hooks/useTodoModalHook";

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const [dropIn, title, setTitle, status, setStatus, handleSubmit] =
    useTodoModalHook({ type, modalOpen, setModalOpen, todo });

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className="wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="container-form"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="closeButton"
              onKeyDown={() => setModalOpen(false)}
              onClick={() => setModalOpen(false)}
              role="button"
              tabIndex={0}
              // animation
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
            >
              <MdOutlineClose />
            </motion.div>

            <form className="form bg-color" onSubmit={(e) => handleSubmit(e)}>
              <h1 className="formTitle">
                {type === "add" ? "Add" : "Update"} TODO
              </h1>
              <div className="d-flex justify-content-between">
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    className="ml-6 w-90"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
                <label htmlFor="type">
                  Status
                  <select
                    id="type"
                    className="mr-5 w-80"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Completed</option>
                  </select>
                </label>
              </div>
              <div className="buttonContainer  d-flex justify-content-between">
                <Button type="submit" variant="primary">
                  {type === "add" ? "Add Task" : "Update Task"}
                </Button>
                <Button variant="secondary" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TodoModal;
