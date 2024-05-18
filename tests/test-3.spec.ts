import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'LogIn' }).click();
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('seunsteam@mail.ru');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('123456');
  await page.getByRole('button', { name: 'SignIn' }).click();
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('Унесенная');
  await page.getByText('Унесённые призраками').first().click();
  await page.getByTestId('like-btn-off').click();
  await page.getByRole('link', { name: 'Favorites' }).click();
  await expect(page.getByTitle('Унесённые призраками')).toBeVisible();
  await page.locator('div').filter({ hasText: /^8\.5$/ }).getByRole('button').click();
  await page.waitForTimeout(1000);
  await expect(page.getByTitle('Унесённые призраками')).toHaveCount(0);
});