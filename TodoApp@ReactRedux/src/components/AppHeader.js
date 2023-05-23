import React from 'react';
import { MenuItem } from '@mui/material';

import Button from "./RenderButton";
import { SelectButton } from "./RenderButton";
import AppContent from "./AppContent";
import TodoModal from "./TodoModal";
function AppHeader() {
    return (
        <div>
            <h2>Header</h2>
            <Button>
                Add Task
            </Button>
             <SelectButton id="status">
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
            <TodoModal/>
        </div>
    )
}

export default AppHeader;
