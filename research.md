---
layout: default
title: Research
description: Publications from the AI & Global Development Lab spanning poverty mapping, conflict analysis, sustainability, and causal inference methodology.
---

<div class="page-header page-header-left">
  <div class="container">
    <h1>Research</h1>
    <p class="page-description">
      Our work spans poverty mapping, conflict analysis, sustainability measurement, and causal inference methodology. All publications are organized by year.
      For full project pages and BibTeX downloads, visit <a href="{{ site.main_site.links.research }}" target="_blank" rel="noopener">{{ site.main_site.name }}/research</a>.
    </p>
  </div>
</div>

<section class="section-sm">
  <div class="container">
    <div class="filter-bar" id="theme-filters">
      <button class="tag tag-active" type="button" data-filter="all">All</button>
      <button class="tag" type="button" data-filter="poverty">Poverty</button>
      <button class="tag" type="button" data-filter="conflict">Conflict</button>
      <button class="tag" type="button" data-filter="sustainability">Sustainability</button>
      <button class="tag" type="button" data-filter="methods">Methods</button>
      <button class="tag" type="button" data-filter="software">Software</button>
      <button class="tag" type="button" data-filter="text">Text Analysis</button>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div id="publications-list">
      {% assign years = "2026,2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014" | split: "," %}
      {% for year in years %}
        {% assign pubs = site.data.publications[year] %}
        {% if pubs.size > 0 %}
          <div class="year-section" data-year="{{ year }}">
            <h2 class="year-heading">{{ year }}</h2>
            {% for pub in pubs %}
              {% include publication-card.html pub=pub %}
            {% endfor %}
          </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>
