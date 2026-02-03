---
layout: home
title: Home
---

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">AI + Earth observation to measure what changes lives—and why.</h1>
      <p class="hero-subtitle">We fuse satellite imagery with modern AI to map poverty, conflict, and sustainability from 1984 to today. Then we move beyond prediction to planetary-scale causal inference—identifying what drives change, and what works.</p>
      <div class="btn-group" style="justify-content: center;">
        <a href="{{ '/research/' | relative_url }}" class="btn btn-primary">Explore Research</a>
        <a href="{{ '/work-with-us/' | relative_url }}" class="btn btn-secondary">Join Us</a>
      </div>
    </div>
  </div>
</section>

<section class="section themes-section">
  <div class="container">
    <h2 class="section-title text-center">Research Themes</h2>
    <div class="grid grid-3">
      <div class="theme-card">
        <div class="theme-icon">🗺️</div>
        <h3>Poverty Mapping</h3>
        <p>High-resolution poverty estimates from satellite imagery. We track economic wellbeing across regions and decades where surveys cannot reach.</p>
      </div>
      <div class="theme-card">
        <div class="theme-icon">📊</div>
        <h3>Conflict Analysis</h3>
        <p>Automated building damage assessment and conflict monitoring. We quantify humanitarian impacts using satellite data and machine learning.</p>
      </div>
      <div class="theme-card">
        <div class="theme-icon">🌍</div>
        <h3>Sustainability</h3>
        <p>Environmental change detection and climate impact measurement. We connect Earth observation data to sustainable development outcomes.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2 class="section-title">Lab Sites</h2>
    <div class="site-locations">
      <div class="site">
        <p class="site-name">UT Austin</p>
        <p class="site-institution">Department of Government</p>
      </div>
      <div class="site">
        <p class="site-name">Linköping / Chalmers</p>
        <p class="site-institution">Institute for Analytical Sociology</p>
      </div>
      <div class="site">
        <p class="site-name">Harvard</p>
        <p class="site-institution">Department of Statistics</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <h2 class="section-title">Recent Publications</h2>
    <div class="featured-publications">
      {% assign recent_pubs = site.data.publications[2025] | concat: site.data.publications[2024] | slice: 0, 4 %}
      {% for pub in recent_pubs %}
        {% include publication-card.html pub=pub %}
      {% endfor %}
    </div>
    <div class="mt-6 text-center">
      <a href="{{ '/research/' | relative_url }}" class="link-arrow">View all publications</a>
    </div>
  </div>
</section>
