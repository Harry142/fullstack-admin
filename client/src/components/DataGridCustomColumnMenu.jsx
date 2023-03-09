import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem } from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
    const { hideMenu, currentColumn, open} = props;
    return (
        <GridColumnMenuContainer
        hideMenu={hideMenu}
        open={open}
        >
            <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
            <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
        </GridColumnMenuContainer>
        
    )
}

export default CustomColumnMenu;