import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByTestId('SearchInput').click();
  await page.getByTestId('SearchInput').fill('Побег');
  await page.getByTestId('SuggestItem').first().click();
  await page.getByTestId('film-info-name').isVisible()
  await expect(page.getByTestId('film-info-name')).toContainText('Побег');
});
