import { afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import { render, cleanup } from '@testing-library/svelte';
import Contact from './Contact.svelte';
import Email from '$lib/types/Email';

describe("Contact", async () => {
    beforeEach(() => {
      vi.useFakeTimers();
    })

    afterEach(() => {
      cleanup()
    })

    it('Should rotate displayed email addresses', async () => {
      const testEmails = [
        new Email("foo", "test.com"),
        new Email("bar", "test.com")
      ]
      const { getByText } = render(Contact, { messageOptions: testEmails });
      expect(getByText(testEmails[0].full)).toBeTruthy();
      await vi.advanceTimersToNextTimerAsync();
      expect(getByText(testEmails[1].full)).toBeTruthy();
    })

    it('Should still work with one email', async () => {
      const testEmails = [
        new Email("foo", "test.com"),
      ]
      const { getByText } = render(Contact, { messageOptions: testEmails });
      expect(getByText(testEmails[0].full)).toBeTruthy();
      await vi.advanceTimersToNextTimerAsync();
      expect(getByText(testEmails[0].full)).toBeTruthy();
    })

    it('Should open an email when clicked', async () => {
      const testEmails = [
        new Email("foo", "test.com"),
      ]
      const { getByTestId } = render(Contact, { messageOptions: testEmails });
      expect(getByTestId("email-address").getAttribute("href")).toEqual(`mailto:${testEmails[0].full}`);
    })
})
