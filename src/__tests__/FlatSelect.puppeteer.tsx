import puppeteer from "puppeteer";

describe("FlatSelect", () => {
	let browser: puppeteer.Browser;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			args: ["--no-sandbox"]
		});
	});

	it("FlatSelect Open", async () => {
		const page = await browser.newPage();
		await page.goto("http://localhost:6060/#!/FlatSelect");
		const image = await page.screenshot();

		expect(image).toMatchImageSnapshot();
	});

	afterAll(async () => {
		await browser.close();
	});
});
