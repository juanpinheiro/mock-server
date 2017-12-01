import React from 'react';
import { ListItem, Avatar, IconMenu, MenuItem, IconButton } from 'material-ui';
import { grey400 } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FileFolder from 'material-ui/svg-icons/file/folder';

const iconButtonElement = (
    <IconButton
        touch={true}
    >
        <MoreVertIcon color={ grey400 } />
    </IconButton>
);

const EndPoint = ({ endPoint, onClick, onDelete }) => (
    <ListItem
        leftAvatar={<Avatar icon={ <FileFolder /> } />}
        rightIconButton={
            <IconMenu iconButtonElement={ iconButtonElement }>
                <MenuItem onClick={ onDelete }>Delete</MenuItem>
            </IconMenu>
        }
        primaryText={ endPoint.route }
        onClick={ onClick }
    />
);

export default EndPoint;
