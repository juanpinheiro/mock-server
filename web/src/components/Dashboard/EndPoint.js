import React from 'react';
import { ListItem, Avatar } from 'material-ui';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import FileFolder from 'material-ui/svg-icons/file/folder';

const EndPoint = ({ endPoint, onClick }) => (
    <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionDelete />}
        primaryText={endPoint.route}
        onClick={onClick}
    />
);

export default EndPoint;
