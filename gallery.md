---
layout: default
title: Gallery
description: Visual showcase of research outputs from the AI & Global Development Lab.
---

<div class="page-header">
  <div class="container">
    <h1>Gallery</h1>
    <p class="page-description">
      Satellite imagery, data visualizations, and research outputs from our work on global development.
      For interactive visualizations, visit <a href="{{ site.main_site.links.visualizations }}" target="_blank" rel="noopener">{{ site.main_site.name }}/visualizations</a>.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <h2 class="section-title animate-on-scroll">Figure Batteries</h2>
    <p class="text-muted animate-on-scroll">Dense figure arrays grouped by paper. Click any panel to zoom.</p>

    {% assign batteries = site.data.gallery_batteries %}

    <div class="battery-index card card-glass animate-on-scroll" aria-label="Figure battery index">
      <p class="battery-index__label">Index</p>
      <div class="battery-index__links">
        {% for battery in batteries %}
          <a class="tag" href="#{{ battery.id }}">{{ battery.title }}</a>
        {% endfor %}
      </div>
    </div>

    <div class="figure-batteries mt-6">
      {% for battery in batteries %}
        <article class="figure-battery card card-glass animate-on-scroll" id="{{ battery.id }}">
          <header class="figure-battery__header">
            <h3 class="figure-battery__title">{{ battery.title }}</h3>
            <a class="figure-battery__paper link-arrow" href="{{ battery.href }}" target="_blank" rel="noopener">Paper</a>
          </header>

          <div class="figure-battery__grid" aria-label="Panels for {{ battery.title }}">
            {% for panel in battery.panels %}
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
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <h2 class="section-title text-center animate-on-scroll">Before &amp; After Comparisons</h2>
    <p class="text-center text-muted mb-6 animate-on-scroll">Interactive sliders showing satellite imagery changes over time. Drag the slider to compare.</p>

    <div class="comparison-gallery">
      <div class="comparison-item animate-on-scroll">
        <h3>Urban Expansion</h3>
        <p>Rapid urbanization captured through satellite imagery showing city growth over decades.</p>
        {% include image-compare.html
          placeholder_text="Urban expansion comparison"
          before_label="1990"
          after_label="2020"
        %}
      </div>

      <div class="comparison-item animate-on-scroll">
        <h3>Deforestation Patterns</h3>
        <p>Forest cover changes in tropical regions tracked through Landsat time series data.</p>
        {% include image-compare.html
          placeholder_text="Deforestation comparison"
          before_label="2000"
          after_label="2020"
        %}
      </div>

      <div class="comparison-item animate-on-scroll">
        <h3>Conflict Impact</h3>
        <p>Building damage assessment showing infrastructure changes in conflict-affected areas.</p>
        {% include image-compare.html
          placeholder_text="Conflict impact comparison"
          before_label="Pre-conflict"
          after_label="Post-conflict"
        %}
      </div>

      <div class="comparison-item animate-on-scroll">
        <h3>Night Lights Changes</h3>
        <p>Economic activity patterns revealed through changes in night-time light emissions.</p>
        {% include image-compare.html
          placeholder_text="Night lights comparison"
          before_label="2012"
          after_label="2022"
        %}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container-narrow text-center">
    <h2 class="animate-on-scroll">Use Our Images</h2>
    <p class="animate-on-scroll">Images from our research are available for academic and educational use with attribution. For high-resolution versions or media inquiries, please <a href="{{ '/contact/' | relative_url }}">contact us</a>.</p>
  </div>
</section>

<!-- Lightbox -->
<div class="lightbox" id="lightbox">
  <button class="lightbox-close" type="button" aria-label="Close">&times;</button>
  <img src="" alt="">
</div>
