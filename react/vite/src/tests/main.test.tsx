import '@testing-library/jest-dom';
import {
    describe,
    expect,
    test,
} from 'vitest';
import {
    render,
    screen,
} from '@testing-library/react';

import Home from '../pages/Home';

describe('Describe', () => {
    test('Test', () => {
        render(<Home />);
        expect(document.body).toBeInTheDocument();
        screen.debug();
    });
});
