import { describe, expect, it} from 'vitest';
import { render } from '@testing-library/svelte';
import Button from './Button.svelte';

describe("Button", () => {
    it('Should contain a button', () => {
        const {getByRole} = render(Button);
        expect(() => getByRole("button")).toBeTruthy();
    })
})
