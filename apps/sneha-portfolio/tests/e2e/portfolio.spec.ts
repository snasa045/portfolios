import { expect, test, type APIRequestContext, type Page } from '@playwright/test';

const basePath = '/portfolios/sneha/';
const siteOrigin = 'https://snasa045.github.io';

const projects = [
  {
    slug: 'moodofy',
    title: 'Moodofy — Sneha Jadhav',
    description:
      'Moodofy — a mobile app concept supporting international students through low moods. Research, task flows, and UI by Sneha Jadhav.',
    preview: 'moodofy-cover-1600.webp',
  },
  {
    slug: 'adidas-hackathon',
    title: 'Adidas — bringing the store to you — Sneha Jadhav',
    description:
      'Adidas 24-hour hackathon virtual-store concept by Sneha Jadhav — winning entry at BrainStation × Adidas Canada.',
    preview: 'adidas-1-1600.webp',
  },
  {
    slug: 'rafiki-phica',
    title: 'PHICA — a consultancy site for businesses in trouble — Sneha Jadhav',
    description:
      'PHICA — persona-led marketing site design for a Paris consultancy serving small businesses, by Sneha Jadhav.',
    preview: 'rafiki-persona-1600.webp',
  },
] as const;

async function expectMeta(
  page: Page,
  expected: { title: string; description: string; path?: string; preview: string },
) {
  await expect(page).toHaveTitle(expected.title);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    expected.description,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', expected.title);
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    'content',
    expected.description,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    new RegExp(`${expected.preview.replace('.', '\\.')}$`),
  );
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    'content',
    new RegExp(`${expected.preview.replace('.', '\\.')}$`),
  );

  if (expected.path) {
    const canonical = `${siteOrigin}${basePath}${expected.path}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', canonical);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', canonical);
  }
}

async function responseHtml(request: APIRequestContext, path: string) {
  const response = await request.get(`${basePath}${path}`);
  return { response, html: await response.text() };
}

test('project navigation resets scroll and focuses main', async ({ page }) => {
  await page.goto(basePath);
  await page.locator('#work').scrollIntoViewIfNeeded();
  await page.locator('.project-link').first().click();

  await expect(page).toHaveURL(new RegExp(`${basePath}project/moodofy/?$`));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator('#main')).toBeFocused();
});

test('Back to work returns to the selected work heading', async ({ page }) => {
  await page.goto(`${basePath}project/rafiki-phica`);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.getByRole('link', { name: 'Back to work' }).click();

  await expect(page).toHaveURL(new RegExp(`${basePath}(?:#.*)?$`));
  await expect
    .poll(() =>
      page.evaluate(() => {
        const sectionElement = document.querySelector('#work');
        const navElement = document.querySelector('.nav');
        if (!sectionElement || !navElement) return false;
        const section = sectionElement.getBoundingClientRect();
        const nav = navElement.getBoundingClientRect();
        return section.top >= nav.bottom - 2 && section.top < nav.bottom + 100;
      }),
    )
    .toBe(true);
});

test('mobile navigation measures the section after the menu closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(basePath);
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('link', { name: 'Work', exact: true }).click();

  await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500);
  await page.waitForTimeout(500);
  const position = await page.evaluate(() => {
    const heading = document.querySelector('#work h2')!.getBoundingClientRect();
    return { headingTop: heading.top };
  });
  expect(position.headingTop).toBeGreaterThanOrEqual(0);
  expect(position.headingTop).toBeLessThan(200);
});

test('skip link moves keyboard focus to main', async ({ page }) => {
  await page.goto(basePath);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main')).toBeFocused();
});

test('metadata follows every client-side project navigation', async ({ page }) => {
  for (let index = 0; index < projects.length; index += 1) {
    const project = projects[index];
    await page.goto(basePath);
    await page.locator('.project-link').nth(index).click();
    await expectMeta(page, { ...project, path: `project/${project.slug}` });
  }
});

test('client-side 404 metadata removes canonical route fields', async ({ page }) => {
  await page.goto(basePath);
  await page.evaluate(() => {
    history.pushState({}, '', 'missing-page');
    dispatchEvent(new PopStateEvent('popstate'));
  });

  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
  await expect(page).toHaveTitle('Page not found — Sneha Jadhav');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  await expect(page.locator('meta[property="og:url"]')).toHaveCount(0);
});

test('built HTML metadata matches each public destination', async ({ request }) => {
  for (const project of projects) {
    const { response, html } = await responseHtml(request, `project/${project.slug}`);
    expect(response.status()).toBe(200);
    expect(html).toContain(`<title>${project.title}</title>`);
    expect(html).toContain(`<meta name="description" content="${project.description}" />`);
    expect(html).toContain(
      `<link rel="canonical" href="${siteOrigin}${basePath}project/${project.slug}" />`,
    );
    expect(html).toContain(`<meta property="og:title" content="${project.title}" />`);
    expect(html).toContain(project.preview);
  }

  const { response, html } = await responseHtml(request, 'missing-page');
  expect(response.status()).toBe(404);
  expect(html).not.toContain('rel="canonical"');
  expect(html).not.toContain('property="og:url"');
});

test('direction C exposes a three-panel expressive hero and reveal state', async ({ page }) => {
  await page.goto(basePath);
  await expect(page.locator('html')).toHaveAttribute('data-motion-style', 'expressive');
  await expect(page.locator('.hero-artwork')).toBeVisible();
  await expect(page.locator('.hero-artwork-panel')).toHaveCount(3);
  await expect(page.locator('.reveal').first()).toHaveClass(/is-visible/);
});

test('case studies use one immersive shell with project-specific themes', async ({ page }) => {
  const themes = {
    moodofy: 'calm',
    'adidas-hackathon': 'graphic',
    'rafiki-phica': 'editorial',
  } as const;

  for (const [slug, theme] of Object.entries(themes)) {
    await page.goto(`${basePath}project/${slug}`);
    await expect(page.locator('.case-world')).toHaveAttribute('data-case-theme', theme);
    await expect(page.locator('.case-hero')).toBeVisible();
    await expect(page.locator('.case-chapter-nav')).toBeVisible();
    await expect(page.locator('.case-decision')).toBeVisible();
    await expect(page.locator('.case-closing')).toBeVisible();
    await expect(page.locator('.next-case')).toBeVisible();
  }
});

test('case chapter navigation targets and identifies the active chapter', async ({ page }) => {
  await page.goto(`${basePath}project/moodofy`);
  const researchLink = page.getByRole('link', { name: /Research and strategy/ });

  await researchLink.click();

  await expect(page).toHaveURL(/#chapter-2$/);
  await expect(researchLink).toHaveAttribute('aria-current', 'true');
  await expect
    .poll(() =>
      page.locator('#chapter-2').evaluate((element) => {
        const nav = document.querySelector('.case-chapter-nav');
        if (!nav) return false;
        const sectionTop = element.getBoundingClientRect().top;
        return sectionTop >= nav.getBoundingClientRect().bottom - 4 && sectionTop < 180;
      }),
    )
    .toBe(true);
});

test('Adidas narrative columns stay separated at desktop width', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${basePath}project/adidas-hackathon`);
  await page.getByRole('link', { name: /Understanding the brand first/ }).click();

  const spacing = await page.locator('#chapter-2').evaluate((section) => {
    const heading = section.querySelector('header')!.getBoundingClientRect();
    const copy = section.querySelector('.case-chapter-copy')!.getBoundingClientRect();
    return copy.left - heading.right;
  });

  expect(spacing).toBeGreaterThanOrEqual(40);
});

test('Adidas decision and closing surfaces meet WCAG AA contrast', async ({ page }) => {
  await page.goto(`${basePath}project/adidas-hackathon`);

  for (const selector of ['.case-decision', '.case-closing']) {
    const colors = await page.locator(selector).evaluate((section) => {
      const text = section.querySelector('h2')!;
      return {
        background: getComputedStyle(section).backgroundColor,
        foreground: getComputedStyle(text).color,
      };
    });
    expect(contrastRatio(colors.background, colors.foreground)).toBeGreaterThanOrEqual(4.5);
  }
});

test('reduced motion keeps content visible and disables motion transforms', async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:4179${basePath}`);

  await expect(page.locator('html')).not.toHaveClass(/motion-ready/);
  const revealState = await page.locator('.reveal').evaluateAll((elements) =>
    elements.every((element) => {
      const style = getComputedStyle(element);
      return style.opacity === '1' && style.transform === 'none';
    }),
  );
  expect(revealState).toBe(true);
  await expect(page.locator('.hero-artwork-panel').first()).toHaveCSS('animation-name', 'none');
  await page.locator('.project-link').first().hover();
  await expect(page.locator('.project-link').first()).toHaveCSS('transform', 'none');
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await context.close();
});

for (const width of [360, 390, 768, 1440]) {
  for (const route of ['', ...projects.map((project) => `project/${project.slug}`), 'missing-page']) {
    test(`no horizontal overflow at ${width}px on /${route || 'home'}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${basePath}${route}`);
      const overflow = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(overflow.content).toBeLessThanOrEqual(overflow.viewport);
    });
  }
}

test('mobile and 200 percent reflow use the compact horizontal artwork', async ({ page }) => {
  for (const width of [390, 720]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(basePath);
    await expect(page.locator('.hero-artwork')).toHaveCSS('grid-auto-flow', 'column');
  }
});

test('Moodofy screenshots use iPhone proportions with section-specific scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${basePath}project/moodofy`);
  const phones = page.locator('.case-media-stage .media-tall .media-frame');
  await expect(phones).toHaveCount(2);

  const staticScreen = page.locator('[data-media="moodofy-flows"] .media-screen');
  await expect(staticScreen).toHaveCSS('overflow-y', 'hidden');
  await expect(staticScreen).not.toHaveAttribute('tabindex');
  const staticPresentation = await staticScreen.evaluate((screen) => {
    const mock = screen.querySelector('img')!.getBoundingClientRect();
    const bounds = screen.getBoundingClientRect();
    const phone = screen.parentElement!.getBoundingClientRect();
    return {
      phoneRatio: phone.width / phone.height,
      mockRatio: mock.width / mock.height,
      leftInset: mock.left - bounds.left,
      topInset: mock.top - bounds.top,
      rightCoverage: mock.right - bounds.right,
      bottomGap: bounds.bottom - mock.bottom,
    };
  });
  expect(staticPresentation.phoneRatio).toBeCloseTo(393 / 852, 2);
  expect(staticPresentation.mockRatio).toBeCloseTo(1242 / 2688, 2);
  expect(Math.abs(staticPresentation.leftInset)).toBeLessThanOrEqual(1);
  expect(Math.abs(staticPresentation.topInset)).toBeLessThanOrEqual(1);
  expect(staticPresentation.rightCoverage).toBeGreaterThanOrEqual(-1);
  expect(staticPresentation.bottomGap).toBeGreaterThanOrEqual(0);
  expect(staticPresentation.bottomGap).toBeLessThanOrEqual(40);
  const staticArtifacts = await staticScreen.evaluate((screen) => ({
    imageShadow: getComputedStyle(screen.querySelector('img')!).boxShadow,
    frameAfter: getComputedStyle(screen.parentElement!, '::after').content,
  }));
  expect(staticArtifacts.imageShadow).toBe('none');
  expect(staticArtifacts.frameAfter).toBe('none');

  const scrollingScreen = page.locator('[data-media="moodofy-homepage"] .media-screen');
  await expect(scrollingScreen).toHaveCSS('overflow-y', 'auto');
  await expect(scrollingScreen).toHaveAttribute('tabindex', '0');
  expect(await scrollingScreen.evaluate((screen) => {
    const phone = screen.parentElement!.getBoundingClientRect();
    return phone.width / phone.height;
  })).toBeCloseTo(393 / 852, 2);
  expect(
    await scrollingScreen.evaluate((screen) => screen.scrollHeight > screen.clientHeight),
  ).toBe(true);
});

test('fast scrolling never leaves passed sections hidden', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${basePath}project/adidas-hackathon`);
  await expect(page.locator('.case-hero')).toHaveClass(/is-visible/);
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, document.documentElement.scrollHeight);
  });

  await expect
    .poll(() => page.locator('.reveal:not(.is-visible)').count())
    .toBe(0);
});

function contrastRatio(background: string, foreground: string) {
  const luminance = (color: string) => {
    const channels = color.match(/[\d.]+/g)!.slice(0, 3).map(Number).map((channel) => channel / 255);
    const linear = channels.map((channel) =>
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
    );
    return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
  };
  const values = [luminance(background), luminance(foreground)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}
