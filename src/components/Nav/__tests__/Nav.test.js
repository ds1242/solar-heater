import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../Nav';

afterAll(cleanup);

describe('About component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
});