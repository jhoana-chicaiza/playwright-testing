import { test, expect } from '@playwright/test';

test('playing with assertion', async ({ page }) => {

    await page.goto('http://uitestingplayground.com/textinput');

    //make sure input is visible
    await expect(page.locator('#newButtonName')).toBeVisible();
    //select input and fill the input your text
    await page.locator('#newButtonName').fill('jude');
    await page.pause();
    // click in button
    await page.locator('#updatingButton').click();
    //verify button text updated 
    await expect(page.locator('#updatingButton')).toContainText('jude');

});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('joana_chicaiza96@hotmail.com');
  await page.getByTestId('royal_email').press('Tab');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('yadejadejoderporfavor');
  await page.getByTestId('royal_login_button').click();
});