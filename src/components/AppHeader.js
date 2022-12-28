import React from "react";

import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";
import { useAppHeaderHook } from "../hooks/useAppHeaderHook";

function AppHeader() {
  const [modalOpen, setModalOpen, filterStatus, setFilterStatus, updateFilter] =
    useAppHeaderHook();
  return (
    <div className="appHeader">
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
