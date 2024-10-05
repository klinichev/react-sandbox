import Toggle from '../toggle/Toggle.js';

import { Nav, Title } from './styles.js';

export default function Header() {
    const headerLine = "Здрасьте, а я тут сайт делаю";
    
    return (
        <>
            <Nav>
                <Title>{headerLine}</Title>
                <Toggle></Toggle>
            </Nav>
        </>
    );
}