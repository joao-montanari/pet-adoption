import { Outlet } from 'react-router-dom';

import './style.sass';

const Default = () => {
    return (
        <div className="master-container-default-layout">
            <Outlet/>
        </div>
    )
}

export default Default;