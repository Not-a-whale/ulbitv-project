import {fireEvent, screen} from "@testing-library/react";
import {Counter} from "./Counter";
import {componentRender} from "../../../shared/lib/tests/componentRender/componentRender";

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter/>, {
            initialState: {counter: {value: 10}}
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    })

    test('test increment', () => {
        componentRender(<Counter />);
        const incrementBtn = screen.getByTestId('increment-btn');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('test decrement', () => {
        componentRender(<Counter/>);
        const decrementBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(decrementBtn);
        expect(screen
            .getByTestId('value-title')).toHaveTextContent('-1');
    })
})