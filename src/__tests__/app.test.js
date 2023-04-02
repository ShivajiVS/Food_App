import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import ReservationHomeScreen from './../screens/reservation/home';

test('Components Rendered Correctly', () => {
    render(<ReservationHomeScreen />);
});

test('Snapshot Testing Correctly ', () => {
    let component = render(<ReservationHomeScreen />).toJSON();
    expect(component).toMatchSnapshot();
});

test('Query Testing Correctly ', () => {
    let component = render(<ReservationHomeScreen />)
    const { getAllByText } = component
    expect(getAllByText('reserve your table').length).toBe(1)
});
