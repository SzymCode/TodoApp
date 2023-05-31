import React from 'react';
import { MenuItem } from '@mui/material';

import { SelectButton } from "./RenderButton";
import AppContent from "./AppContent";
import TodoModal from "./TodoModal";
function AppHeader() {
    return (
        <div>
            <h2>Header</h2>
            <TodoModal/>
            <SelectButton id="status" defaultValue="all">
              <MenuItem value="all">
                All
              </MenuItem>
              <MenuItem value="incomplete">
                Incomplete
              </MenuItem>
              <MenuItem value="complete">
                Completed
              </MenuItem>
            </SelectButton>
            <AppContent/>
        </div>
    )
}

export default AppHeader;
