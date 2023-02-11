import { Story } from '@storybook/react';
// import '@/app/styles/index.scss';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line musovvir-dev/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
