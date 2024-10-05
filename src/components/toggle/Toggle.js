import { useEffect, useState } from 'react';
import { setTheme } from '../../Themes.js';

import { ToggleContainer } from './styles.js';

export default function Toggle() {
    const [togClass, setTogClass] = useState('light');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light');
        } else {
            setTheme('theme-dark');
            setTogClass('dark');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark');
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light');
        }
    }, [theme])

    return (
        <ToggleContainer>
            <label class="switch">
                <input type="checkbox" onClick={handleOnClick} />
                <span class="slider"></span>
            </label>
        </ToggleContainer>
    )
}