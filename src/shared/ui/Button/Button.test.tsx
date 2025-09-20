import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";
import React from "react";


describe("Button", () => {
    test("Test render", () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Button</Button>);
        expect(screen.getByText("Button")).toBeInTheDocument();
    });

    test("theme", () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
        expect(screen.getByText("Button")).toHaveClass("clear");
        screen.debug()
    })
})