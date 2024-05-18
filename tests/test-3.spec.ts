import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByTestId('LogInBtn').click();
  await page.getByTestId('LogInInput').click();
  await page.getByTestId('LogInInput').fill('seunsteam@mail.ru');
  await page.getByTestId('PassInput').click();
  await page.getByTestId('PassInput').fill('123456');
  await page.getByTestId('authBtn').click();
  await page.waitForTimeout(2000);
  await page.getByTestId('SearchInput').click();
  await page.getByTestId('SearchInput').fill('Унесенная');
  await page.getByText('Унесённые призраками').first().click();
  await page.getByTestId('like-btn-off').click();
  await page.getByRole('link', { name: 'Favorites' }).click();
  await expect(page.getByTitle('Унесённые призраками')).toBeVisible();
  await page.locator('div').filter({ hasText: /^8\.5$/ }).getByRole('button').click();
  await page.waitForTimeout(2000);
  await expect(page.getByTitle('Унесённые призраками')).toHaveCount(0);
});