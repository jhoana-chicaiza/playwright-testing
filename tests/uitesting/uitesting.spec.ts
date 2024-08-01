import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  //await page.goto('about:blank');
  await page.goto('http://uitestingplayground.com/');
  await page.locator('#title');
  await page.locator('.alert');
  await page.locator('a.navbar-brand').click();

  await page.getByText('Aristotle').click();
  await page.getByRole('link', { name: 'Resources' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Click' }).click();
  await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
});