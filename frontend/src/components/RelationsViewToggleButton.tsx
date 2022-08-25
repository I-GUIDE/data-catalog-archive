import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, { Dispatch, SetStateAction } from 'react';

export enum View {
    Graph = "Graph",
    Accordion = "Accordion"
}

export interface Props {
    selected: View
    setSelected: Dispatch<SetStateAction<View>>
}

export const RelationsViewToggleButton = ({ selected, setSelected }: Props) => {

    const handleChange = (event: React.MouseEvent<HTMLElement, MouseEvent>, value: View) => {
        setSelected(value)
    }

    return <ToggleButtonGroup
        color="primary"
        value={selected}
        exclusive
        onChange={handleChange}
        aria-label="relations view style"
    >
        <ToggleButton value={View.Graph}>{View.Graph}</ToggleButton>
        <ToggleButton value={View.Accordion}>{View.Accordion}</ToggleButton>
    </ToggleButtonGroup>
}

export default RelationsViewToggleButton
