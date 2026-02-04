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
    <h2 class="section-title animate-on-scroll">Research Imagery</h2>
    <div class="gallery-grid animate-stagger">
      <div class="gallery-item animate-on-scroll">
        <div class="media-placeholder">Poverty Map<br>Africa</div>
        <div class="gallery-caption">High-resolution poverty estimates for sub-Saharan Africa</div>
      </div>

      <div class="gallery-item animate-on-scroll">
        <div class="media-placeholder">Satellite<br>Imagery</div>
        <div class="gallery-caption">Satellite imagery used for building damage assessment</div>
      </div>

      <div class="gallery-item animate-on-scroll">
        <div class="media-placeholder">Causal<br>Inference</div>
        <div class="gallery-caption">Causal inference framework visualization</div>
      </div>

      <div class="gallery-item animate-on-scroll">
        <div class="media-placeholder">Night<br>Lights</div>
        <div class="gallery-caption">Night lights data showing economic activity patterns</div>
      </div>

      <div class="gallery-item animate-on-scroll">
        <div class="media-placeholder">Building<br>Detection</div>
        <div class="gallery-caption">Automated building detection and damage classification</div>
      </div>

      <div class="gallery-item animate-on-scroll">
        <div class="media-placeholder">Time<br>Series</div>
        <div class="gallery-caption">Temporal analysis of environmental change</div>
      </div>
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
