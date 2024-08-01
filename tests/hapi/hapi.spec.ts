import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.gethapi.app/signin');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('veni13@yopmail.com');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('aB12345678.');
  await page.getByPlaceholder('Password').press('Enter');
});