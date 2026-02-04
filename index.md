---
layout: home
title: Home
---

<section class="hero">
  <div class="container">
      <div class="hero-content">
      <h1 class="hero-title">AI + Earth observation to measure what changes lives—and why.</h1>
      <p class="hero-subtitle">We fuse satellite imagery with modern AI to map poverty, conflict, and sustainability from 1984 to today. Then we move beyond prediction to planetary-scale causal inference—identifying what drives change, and what works.</p>
      <div class="btn-group btn-group-center">
        <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">Explore Research</a>
        <a href="{{ '/work-with-us/' | relative_url }}" class="btn btn-secondary">Join Us</a>
        <a href="{{ site.main_site.url }}" class="btn btn-ghost" target="_blank" rel="noopener">Main Site</a>
      </div>
    </div>
  </div>
</section>

<section class="section themes-section">
  <div class="container">
    <h2 class="section-title text-center animate-on-scroll">Research Themes</h2>
    <div class="grid grid-3 animate-stagger">
      <div class="card card-elevated theme-card animate-on-scroll">
        <div class="theme-icon">🗺️</div>
        <h3>Poverty Mapping</h3>
        <p>High-resolution poverty estimates from satellite imagery. We track economic wellbeing across regions and decades where surveys cannot reach.</p>
      </div>
      <div class="card card-elevated theme-card animate-on-scroll">
        <div class="theme-icon">📊</div>
        <h3>Conflict Analysis</h3>
        <p>Automated building damage assessment and conflict monitoring. We quantify humanitarian impacts using satellite data and machine learning.</p>
      </div>
      <div class="card card-elevated theme-card animate-on-scroll">
        <div class="theme-icon">🌍</div>
        <h3>Sustainability</h3>
        <p>Environmental change detection and climate impact measurement. We connect Earth observation data to sustainable development outcomes.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray case-studies-section">
  <div class="container">
    <h2 class="section-title text-center animate-on-scroll case-studies-title">Visual Case Studies</h2>
    <p class="text-center text-muted animate-on-scroll">Figure-first summaries from our papers. Click any tile to zoom.</p>

    {% assign case_studies = site.data.gallery_batteries %}

    <div class="case-studies-grid mt-6 animate-stagger">
      {% for battery in case_studies %}
        {% assign lead_panel = battery.panels | first %}
        <article class="case-study card card-glass animate-on-scroll">
          <header class="case-study__header">
            <h3 class="case-study__title">{{ battery.title }}</h3>
            <div class="case-study__links">
              <a class="tag" href="{{ battery.href }}" target="_blank" rel="noopener">Paper</a>
              <a class="tag" href="{{ '/gallery/' | relative_url }}#{{ battery.id }}">Gallery</a>
            </div>
          </header>

          {% assign caption = battery.caption | default: lead_panel.alt %}
          {% if caption %}
            <p class="case-study__caption">{{ caption | strip_newlines }}</p>
          {% endif %}

          <div class="case-study__grid" aria-label="Case study panels: {{ battery.title }}">
            {% for panel in battery.panels | slice: 0, 4 %}
              <button class="figure-tile" type="button" data-lightbox aria-label="Open full-size image: {{ battery.title }} — {{ panel.label }}">
                <picture class="figure-tile__media">
                  {% if panel.dark %}
                    <source srcset="{{ panel.dark | relative_url }}" media="(prefers-color-scheme: dark)">
                  {% endif %}
                  <img
                    src="{{ panel.light | relative_url }}"
                    alt="{{ panel.alt }}"
                    class="figure-tile__img{% if panel.invert_dark %} figure-tile__img--invert-dark{% endif %}"
                    loading="lazy" />
                </picture>
                <span class="figure-tile__label">{{ panel.label }}</span>
              </button>
            {% endfor %}
          </div>
        </article>
      {% endfor %}
    </div>

    <div class="mt-6 text-center animate-on-scroll">
      <a href="{{ '/gallery/' | relative_url }}" class="link-arrow">Browse all figure batteries</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="section-title animate-on-scroll">Lab Sites</h2>
    <div class="site-locations animate-stagger">
      <div class="site animate-on-scroll">
        <p class="site-name">UT Austin</p>
        <p class="site-institution">Department of Government</p>
      </div>
      <div class="site animate-on-scroll">
        <p class="site-name">Linköping / Chalmers</p>
        <p class="site-institution">Institute for Analytical Sociology</p>
      </div>
      <div class="site animate-on-scroll">
        <p class="site-name">Harvard</p>
        <p class="site-institution">Department of Statistics</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <h2 class="section-title animate-on-scroll">Recent Publications</h2>
    <div class="featured-publications animate-stagger">
      {% assign featured_2026 = site.data.publications[2026] | where: "featured", true %}
      {% assign featured_2025 = site.data.publications[2025] | where: "featured", true %}
      {% assign featured_2024 = site.data.publications[2024] | where: "featured", true %}
      {% assign recent_pubs = featured_2026 | concat: featured_2025 | concat: featured_2024 | slice: 0, 4 %}
      {% for pub in recent_pubs %}
        <div class="animate-on-scroll">
          {% include publication-card.html pub=pub %}
        </div>
      {% endfor %}
    </div>
    <div class="mt-6 text-center animate-on-scroll">
      <a href="{{ '/research/' | relative_url }}" class="link-arrow">View all publications</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="section-title text-center animate-on-scroll">More on aidevlab.org</h2>
    <p class="text-center text-muted animate-on-scroll">Our main lab hub hosts datasets, rankings, visualizations, and more.</p>

    <div class="grid grid-3 mt-6 animate-stagger">
      <a class="card card-link animate-on-scroll" href="{{ site.main_site.links.research }}" target="_blank" rel="noopener">
        <h3 class="card-title">Research Archive</h3>
        <p class="card-description">Full project pages and BibTeX downloads.</p>
        <span class="link-arrow mt-3">Explore</span>
      </a>

      <a class="card card-link animate-on-scroll" href="{{ site.main_site.links.data }}" target="_blank" rel="noopener">
        <h3 class="card-title">Data</h3>
        <p class="card-description">Datasets, access notes, and documentation.</p>
        <span class="link-arrow mt-3">Explore</span>
      </a>

      <a class="card card-link animate-on-scroll" href="{{ site.main_site.links.code }}" target="_blank" rel="noopener">
        <h3 class="card-title">Code</h3>
        <p class="card-description">Software, tools, and repositories.</p>
        <span class="link-arrow mt-3">Explore</span>
      </a>

      <a class="card card-link animate-on-scroll" href="{{ site.main_site.links.rankings }}" target="_blank" rel="noopener">
        <h3 class="card-title">Rankings</h3>
        <p class="card-description">Indices and rankings built from EO + surveys.</p>
        <span class="link-arrow mt-3">Explore</span>
      </a>

      <a class="card card-link animate-on-scroll" href="{{ site.main_site.links.visualizations }}" target="_blank" rel="noopener">
        <h3 class="card-title">Visualizations</h3>
        <p class="card-description">Interactive maps and figures.</p>
        <span class="link-arrow mt-3">Explore</span>
      </a>

      <a class="card card-link animate-on-scroll" href="{{ site.main_site.links.positions }}" target="_blank" rel="noopener">
        <h3 class="card-title">Positions</h3>
        <p class="card-description">Openings and opportunities to work with us.</p>
        <span class="link-arrow mt-3">Explore</span>
      </a>
    </div>

    <div class="mt-6 text-center animate-on-scroll">
      <a class="link-arrow" href="{{ site.main_site.links.videos }}" target="_blank" rel="noopener">Watch lab talks</a>
    </div>
  </div>
</section>
