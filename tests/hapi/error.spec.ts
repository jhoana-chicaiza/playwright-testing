import { test, expect } from '@playwright/test';

test('debe mostrar un mensaje de error cuando el usuario introduce una contraseña incorrecta', async ({ page }) => {
  await page.goto('https://app.gethapi.app/signin');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('veni1300@yopmail.com');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByText('Error code: 0102010201').click();
});