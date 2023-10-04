import { describe, expect, it, vi} from 'vitest';
import { fireEvent, render } from '@testing-library/svelte';
import Button from './Button.svelte';

describe("Button", () => {
    const {component, getByRole} = render(Button);
    const button = getByRole("button");
    it('Should contain a button', () => {
        expect(button).toBeTruthy();
    })
    it('Should output a click event', async () => {
        const handleClick = vi.fn();
        component.$on("click", handleClick);
        await fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    })
})
