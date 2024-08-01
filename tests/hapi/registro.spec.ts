import { test, expect } from '@playwright/test';

test('should register a new user up to the email', async ({ page }) => {
  await page.goto('https://app.gethapi.app/signin');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('button', { name: 'Select your country of residence' }).click();
  await page.getByRole('button', { name: 'Ecuador' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#homePhoneNumber').click();
  await page.locator('#homePhoneNumber').fill('993765371');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('hilda.chicaiza96@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
});