import {Theme} from "app/providers/ThemeProvider";
import {StoryFn} from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn)=> {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
}