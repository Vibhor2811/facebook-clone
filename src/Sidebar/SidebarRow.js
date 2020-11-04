import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';
import './pexels-photo-1251171.jpeg';

const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{ title }</p>
        </div>
    )
}

export default SidebarRow
