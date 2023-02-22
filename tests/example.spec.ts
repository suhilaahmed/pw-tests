import { test, expect } from '@playwright/test'

test('Simple basic test', async ({ page }) => {
  //steps
  await page.goto('https://developer.backbase.com/')
  await page.type('locator', 'data')
  await page.click('#login-button')
})
test.skip('Simple basic tessssst', async ({ page }) => {
  await page.goto('https://www.lieferando.de/en')
  await page.type(
    'input[data-qa="location-panel-search-input-address-element"]',
    'Watzmannstraße 4, 81541 München'
  )
  await page.click('//div[contains(text(),"Watzmannstraße 4, 81541 München")]')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})
test.skip('Clicking on element', async ({ page }) => {
  await page.goto('https://developer.backbase.com/')
  await page.click('#ember27')
  await page.click('#login-button')

  const errorMessage = await page.locator('#modal-alert')
  await expect(errorMessage).toContainText(
    'Please enter your email or username, and password.'
  )
})
