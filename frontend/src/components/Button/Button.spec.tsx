import { render } from '@testing-library/react';
import '@testing-library/dom';

import Button from '.';

describe('Button component', () => {
    beforeEach(() => {
        render(
            <Button label='Click me' onClick={() => {}}/>
        );
    });

    it('Render Button', () => {
        render(
            <Button label='Click me' onClick={() => {}}/>
        )
    });
});