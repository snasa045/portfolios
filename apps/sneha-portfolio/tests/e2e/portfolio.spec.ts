import { expect, test, type APIRequestContext, type Page } from '@playwright/test';
import { supportingProjects } from '../../src/data/projects';

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

test('About links to the colour system without adding it to primary navigation', async ({ page }) => {
  await page.goto(basePath);
  await expect(
    page.locator('#primary-nav').getByRole('link', { name: /(?:design|colour) system/i }),
  ).toHaveCount(0);
  await page
    .locator('#about')
    .getByRole('link', { name: 'View the portfolio colour system', exact: true })
    .click();

  await expect(page).toHaveURL(new RegExp(`${basePath}colour-palette/?$`));
  await expect(page.getByRole('heading', { name: 'Warm editorial' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Portfolio shell' })).toBeVisible();
  await expect(page.locator('.palette-swatch')).toHaveCount(8);
  await expect(page.locator('.palette-pairing')).toHaveCount(6);
  await expect(page.getByRole('link', { name: 'Back to portfolio' })).toBeVisible();
});

test('colour system documents accurate project names and accessible colour roles', async ({
  page,
}) => {
  await page.goto(`${basePath}colour-palette`);

  await expect(page.getByText('Rafiki / PHICA', { exact: true })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'PHICA', exact: true })).toHaveCount(2);
  await expect(page.getByRole('heading', { name: 'Accessible colour roles' })).toBeVisible();
  await expect(page.locator('.palette-role-card')).toHaveCount(3);
  await expect(page.getByText('#d8ff43 · 1.14:1 · Decorative only', { exact: true })).toBeVisible();
  await expect(page.getByText('#4d5a18 · 7.45:1 · AAA', { exact: true })).toBeVisible();
  await expect(
    page.locator('.palette-pairing').filter({
      hasText: 'Case-study chapter navigation, active and hover',
    }),
  ).toBeVisible();
  await expect(
    page.locator('.palette-swatch').filter({
      hasText: 'Gradient tint at 12–20% in hero and contact artwork',
    }),
  ).toBeVisible();
});

test('markerless semantic lists retain explicit list roles', async ({ page }) => {
  await page.goto(basePath);

  for (const selector of ['.supporting', '.capabilities ul', '.timeline', '.about-side .plain']) {
    await expect(page.locator(selector).first()).toHaveAttribute('role', 'list');
  }

  await page.getByRole('button', { name: 'Figo Friend — read the full story' }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.locator('.supporting-archive-index ol')).toHaveAttribute('role', 'list');
  await expect(dialog.locator('.supporting-dialog-outcomes ul')).toHaveAttribute('role', 'list');
  await dialog.getByRole('button', { name: 'Close Figo Friend' }).click();

  await page.goto(`${basePath}project/moodofy`);
  await expect(page.locator('.case-chapter-nav ol')).toHaveAttribute('role', 'list');

  await page.goto(`${basePath}colour-palette`);
  await expect(page.locator('.palette-archive-spine ol')).toHaveAttribute('role', 'list');
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

  const palette = await responseHtml(request, 'colour-palette');
  expect(palette.response.status()).toBe(200);
  expect(palette.html).toContain('<title>Colour system — Sneha Jadhav</title>');
  expect(palette.html).toContain('Warm editorial');
  expect(palette.html).toContain(
    `<link rel="canonical" href="${siteOrigin}${basePath}colour-palette" />`,
  );
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

test('earlier work opens in the distinctive archive desk structure', async ({ page }) => {
  const project = supportingProjects[0];
  await page.goto(basePath);
  await page.getByRole('button', { name: `${project.title} — read the full story` }).click();

  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('.supporting-archive-spine')).toBeVisible();
  await expect(dialog.locator('.supporting-archive-desk')).toBeVisible();
  await expect(dialog.locator('.supporting-evidence-sheet')).toHaveCount(
    project.sections.length + 2,
  );
  await expect(dialog.getByRole('heading', { name: 'Project contents' })).toBeAttached();
  await expect(dialog.getByRole('navigation', { name: `${project.title} contents` })).toHaveCount(0);
  await expect(dialog.locator('.case-hero')).toHaveCount(0);
  await expect(dialog.locator('.case-chapter-nav')).toHaveCount(0);
});

test('archive desk preserves every supporting project detail and image', async ({ page }) => {
  await page.goto(basePath);

  for (const project of supportingProjects) {
    await page.getByRole('button', { name: `${project.title} — read the full story` }).click();
    const dialog = page.getByRole('dialog');

    await expect(dialog.getByRole('heading', { name: project.title })).toBeVisible();
    await expect(dialog.getByText(project.context, { exact: true })).toBeVisible();
    await expect(dialog.getByText(project.role, { exact: true })).toBeVisible();
    await expect(dialog.getByText(project.timeframe, { exact: true })).toBeVisible();
    await expect(dialog.getByRole('img', { name: project.cover.alt })).toBeVisible();
    if (project.cover.caption) {
      await expect(dialog.getByText(project.cover.caption, { exact: true })).toBeVisible();
    }

    for (const section of project.sections) {
      if (section.heading) {
        await expect(dialog.getByRole('heading', { name: section.heading })).toBeVisible();
      }
      if (section.kind === 'text') {
        for (const paragraph of section.body) {
          await expect(dialog.getByText(paragraph, { exact: true })).toBeVisible();
        }
      } else if (section.kind === 'figure') {
        await expect(dialog.getByRole('img', { name: section.figure.alt })).toBeVisible();
        if (section.figure.caption) {
          await expect(dialog.getByText(section.figure.caption, { exact: true })).toBeVisible();
        }
      }
    }

    for (const outcome of project.outcomes) {
      const item = dialog.locator('.supporting-dialog-outcomes li').filter({ hasText: outcome.label });
      await expect(item).toHaveCount(1);
      if (outcome.value) await expect(item).toContainText(outcome.value);
      if (outcome.kind !== 'result') await expect(item).toContainText(`(${outcome.kind})`);
    }

    await dialog.getByRole('button', { name: `Close ${project.title}` }).click();
    await expect(dialog).toBeHidden();
  }
});

test('archive imagery keeps its intrinsic aspect ratio at constrained heights', async ({ page }) => {
  await page.goto(basePath);
  await page.getByRole('button', { name: 'Figo Friend — read the full story' }).click();

  for (const width of [760, 1280]) {
    await page.setViewportSize({ width, height: 720 });
    for (const [name, expectedRatio] of [
      ['figo-cover', 2443 / 1691],
      ['figo-testing', 1560 / 1970],
    ] as const) {
      const renderedRatio = await page.locator(`[data-media="${name}"] img`).evaluate((image) => {
        const bounds = image.getBoundingClientRect();
        return bounds.width / bounds.height;
      });
      expect(renderedRatio).toBeCloseTo(expectedRatio, 2);
    }
  }
});

test('archive close control has a visible WCAG focus indicator', async ({ page }) => {
  await page.goto(basePath);
  await page.getByRole('button', { name: 'Figo Friend — read the full story' }).click();
  const close = page.getByRole('button', { name: 'Close Figo Friend' });
  await page.keyboard.press('Tab');
  await expect(close).toBeFocused();

  const colors = await close.evaluate((button) => ({
    indicator: getComputedStyle(button).outlineColor,
    adjacent: getComputedStyle(button.closest('.supporting-archive-spine')!).backgroundColor,
  }));

  expect(contrastRatio(colors.indicator, colors.adjacent)).toBeGreaterThanOrEqual(3);
});

test('mobile archive close control stays reachable after scrolling to the end', async ({ page }) => {
  for (const viewport of [
    { width: 320, height: 568 },
    { width: 390, height: 844 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto(basePath);
    await page.getByRole('button', { name: 'Figo Friend — read the full story' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).not.toHaveClass(/is-animating/);
    await dialog.hover();
    await page.mouse.wheel(0, 100_000);
    await expect.poll(() => dialog.evaluate((element) => element.scrollTop)).toBeGreaterThan(0);

    const bounds = await page.getByRole('button', { name: 'Close Figo Friend' }).evaluate((close) => {
      const rect = close.getBoundingClientRect();
      return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
      };
    });

    expect(bounds.top).toBeGreaterThanOrEqual(0);
    expect(bounds.right).toBeLessThanOrEqual(viewport.width);
    expect(bounds.bottom).toBeLessThanOrEqual(viewport.height);
    expect(bounds.width).toBeGreaterThanOrEqual(44);
    expect(bounds.height).toBeGreaterThanOrEqual(44);

    await page.getByRole('button', { name: 'Close Figo Friend' }).click();
    await expect(page.getByRole('dialog')).toBeHidden();
  }
});

test('archive spine fills the full dialog viewport on tall screens', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 950 });
  await page.goto(basePath);
  await page.getByRole('button', { name: 'Figo Friend — read the full story' }).click();
  await expect(page.getByRole('dialog')).not.toHaveClass(/is-animating/);

  const bounds = await page.getByRole('dialog').evaluate((dialog) => {
    const panel = dialog.getBoundingClientRect();
    const spine = dialog.querySelector('.supporting-archive-spine')!.getBoundingClientRect();
    return { panelTop: panel.top, panelBottom: panel.bottom, spineTop: spine.top, spineBottom: spine.bottom };
  });

  expect(Math.abs(bounds.spineTop - bounds.panelTop)).toBeLessThanOrEqual(1);
  expect(Math.abs(bounds.spineBottom - bounds.panelBottom)).toBeLessThanOrEqual(1);
});

test('archive chapters share one continuous paper surface', async ({ page }) => {
  await page.goto(basePath);

  for (const project of supportingProjects) {
    await page.getByRole('button', { name: `${project.title} — read the full story` }).click();

    const paper = page.locator('.supporting-archive-paper');
    await expect(paper).toHaveCount(1);
    await expect(paper.locator('.supporting-evidence-sheet')).toHaveCount(
      project.sections.length + 2,
    );
    await expect(paper).toHaveCSS('border-radius', '14px');

    const surfaces = await paper.locator('.supporting-evidence-sheet').evaluateAll((sheets) =>
      sheets.map((sheet) => {
        const style = getComputedStyle(sheet);
        return {
          background: style.backgroundColor,
          radius: style.borderRadius,
          shadow: style.boxShadow,
        };
      }),
    );

    expect(surfaces).toEqual(
      surfaces.map(() => ({ background: 'rgba(0, 0, 0, 0)', radius: '0px', shadow: 'none' })),
    );

    await page.getByRole('button', { name: `Close ${project.title}` }).click();
    await expect(page.getByRole('dialog')).toBeHidden();
  }
});

test('archive card overlaps the rounded title tab and meets WCAG AA contrast', async ({
  page,
}) => {
  await page.goto(basePath);
  await page.getByRole('button', { name: 'Figo Friend — read the full story' }).click();

  const geometry = await page.locator('.supporting-archive-desk').evaluate((desk) => {
    const tabElement = desk.querySelector('.supporting-archive-tab')!;
    const cardElement = desk.querySelector('.supporting-archive-paper')!;
    const tab = getComputedStyle(tabElement);
    const extension = getComputedStyle(tabElement, '::after');
    const card = getComputedStyle(cardElement);
    const tabBounds = tabElement.getBoundingClientRect();
    const cardBounds = cardElement.getBoundingClientRect();
    return {
      tabCurve: tab.borderBottomLeftRadius,
      cardCurve: card.borderTopLeftRadius,
      extensionContent: extension.content,
      overlap: tabBounds.bottom - cardBounds.top,
      background: tab.backgroundColor,
      foreground: tab.color,
    };
  });

  expect(geometry.tabCurve).toBe(geometry.cardCurve);
  expect(geometry.extensionContent).toBe('none');
  expect(geometry.overlap).toBe(28);
  expect(contrastRatio(geometry.background, geometry.foreground)).toBeGreaterThanOrEqual(4.5);
});

test('archive spine uses the accessible ink palette', async ({ page }) => {
  await page.goto(basePath);
  await page.getByRole('button', { name: 'Figo Friend — read the full story' }).click();

  const dialog = page.getByRole('dialog');
  const spine = dialog.locator('.supporting-archive-spine');
  await expect(spine).toHaveCSS('background-color', 'rgb(28, 25, 23)');
  await expect(spine).toHaveCSS('color', 'rgb(250, 247, 242)');
  await expect(dialog.locator('.supporting-archive-file')).toHaveCSS(
    'color',
    'rgb(233, 163, 142)',
  );
});

test('long archive titles stay inside the project-file spine', async ({ page }) => {
  await page.goto(basePath);

  for (const width of [390, 760, 761, 1280]) {
    await page.setViewportSize({ width, height: 720 });
    for (const title of ['PatientsFirst', '[24]7.ai conversation design']) {
      await page.getByRole('button', { name: `${title} — read the full story` }).click();
      const bounds = await page.locator('.supporting-archive-spine').evaluate((spine) => {
        const heading = spine.querySelector('h2')!.getBoundingClientRect();
        const container = spine.getBoundingClientRect();
        return { headingRight: heading.right, containerRight: container.right };
      });

      expect(bounds.headingRight).toBeLessThanOrEqual(bounds.containerRight);
      await page.getByRole('button', { name: `Close ${title}` }).click();
      await expect(page.getByRole('dialog')).toBeHidden();
    }
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

test('featured case-study text meets WCAG AA contrast', async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: 'reduce',
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  const selectors = [
    '.case-hero-kicker span',
    '.case-facts dt',
    '.case-chapter-nav a',
    '.case-chapter-nav a span',
    '.case-chapter header > span',
    '.case-decision-number',
    '.case-section-label',
    '.case-closing em',
  ].join(', ');

  for (const project of projects) {
    await page.goto(`http://127.0.0.1:4179${basePath}project/${project.slug}`);
    const samples = await page.locator(selectors).evaluateAll((elements) => {
      const channels = (value: string) =>
        value.match(/[\d.]+/g)!.slice(0, 4).map(Number) as [number, number, number, number?];
      const backgroundFor = (element: Element) => {
        let current: Element | null = element;
        while (current) {
          const background = getComputedStyle(current).backgroundColor;
          const values = channels(background);
          if ((values[3] ?? 1) > 0) return values;
          current = current.parentElement;
        }
        return [255, 255, 255, 1] as [number, number, number, number];
      };

      return elements.map((element) => {
        const style = getComputedStyle(element);
        const foreground = channels(style.color);
        const background = backgroundFor(element);
        const opacity = Number(style.opacity) * (foreground[3] ?? 1);
        const effectiveForeground = foreground
          .slice(0, 3)
          .map((channel, index) => channel * opacity + background[index] * (1 - opacity));
        const fontSize = Number.parseFloat(style.fontSize);
        const fontWeight = Number.parseInt(style.fontWeight, 10) || 400;
        const largeText = fontSize >= 24 || (fontSize >= 18.66 && fontWeight >= 700);

        return {
          label: `${element.className || element.tagName} “${element.textContent?.trim()}”`,
          background: `rgb(${background.slice(0, 3).join(', ')})`,
          foreground: `rgb(${effectiveForeground.join(', ')})`,
          required: largeText ? 3 : 4.5,
        };
      });
    });

    for (const sample of samples) {
      expect.soft(
        contrastRatio(sample.background, sample.foreground),
        `${project.slug}: ${sample.label}`,
      ).toBeGreaterThanOrEqual(sample.required);
    }
  }

  await context.close();
});

test('case-study chapter focus indicators meet WCAG non-text contrast', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  for (const project of projects) {
    await page.goto(`${basePath}project/${project.slug}`);
    const firstChapter = page.locator('.case-chapter-nav a').first();

    for (let index = 0; index < 10; index += 1) {
      if (await firstChapter.evaluate((link) => link === document.activeElement)) break;
      await page.keyboard.press('Tab');
    }
    await expect(firstChapter).toBeFocused();

    const colors = await firstChapter.evaluate((link) => ({
      indicator: getComputedStyle(link).outlineColor,
      adjacent: getComputedStyle(link.closest('.case-chapter-nav')!).backgroundColor,
    }));
    expect(
      contrastRatio(colors.indicator, colors.adjacent),
      `${project.slug}: chapter focus outline`,
    ).toBeGreaterThanOrEqual(3);
  }
});

test('desktop hero motion finishes within five seconds', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(basePath);

  const motion = await page.locator('.hero-artwork-card').first().evaluate((card) => {
    const style = getComputedStyle(card);
    return {
      duration: Number.parseFloat(style.animationDuration) * 1000,
      iterations: style.animationIterationCount,
    };
  });

  expect(motion.duration).toBeLessThanOrEqual(5000);
  expect(motion.iterations).toBe('1');
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

for (const width of [320, 360, 390, 768, 1440]) {
  for (const route of [
    '',
    'colour-palette',
    ...projects.map((project) => `project/${project.slug}`),
    'missing-page',
  ]) {
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
