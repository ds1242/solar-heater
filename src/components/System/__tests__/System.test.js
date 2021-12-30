import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import System from '../System';

afterAll(cleanup);

describe('System component', () => {
    it('renders', () => {
        render(<System />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<System />);

        expect(asFragment()).toMatchSnapshot();
    });
});