import React from 'react'
import NavMenu from './NavMenu';
import LibraryMenu from './LibraryMenu';
import Playlist from './Playlist';

const SideNav = () => {
    return (
        <div>
            <NavMenu />
            <LibraryMenu />
            <Playlist />
        </div>
    )
}

export default SideNav
