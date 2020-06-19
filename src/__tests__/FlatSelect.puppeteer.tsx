import * as puppeteer from "puppeteer";

it("FlatSelect", async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("http://localhost:3000");
	const screenshot = await page.screenshot();
	browser.close();

	expect(screenshot).toMatchImageSnapshot();
});
