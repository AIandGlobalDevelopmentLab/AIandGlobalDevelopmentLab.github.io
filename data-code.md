---
layout: default
title: Data & Code
description: Open-source software and datasets from the AI & Global Development Lab.
---

<div class="page-header page-header-left">
  <div class="container">
    <h1>Data & Code</h1>
    <p class="page-description">
      We release open-source software and datasets to enable reproducible research. All tools are freely available for academic use.
      For additional listings, see <a href="{{ site.main_site.links.data }}" target="_blank" rel="noopener">{{ site.main_site.name }}/data</a> and <a href="{{ site.main_site.links.code }}" target="_blank" rel="noopener">{{ site.main_site.name }}/code</a>.
    </p>
  </div>
</div>

<section class="section">
  <div class="container">
    <h2 class="section-title">Software</h2>
    <div class="grid grid-2">
      {% for tool in site.data.resources.software %}
      <div class="card">
        <h3 class="card-title">{{ tool.name }}</h3>
        <p class="card-description">{{ tool.description }}</p>
        <div class="mt-3">
          <span class="tag">{{ tool.language }}</span>
        </div>
        <div class="btn-group mt-3">
          {% if tool.github %}
            <a href="{{ tool.github }}" target="_blank" rel="noopener" class="btn btn-sm btn-secondary">GitHub</a>
          {% endif %}
          {% if tool.docs %}
            <a href="{{ tool.docs }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">Documentation</a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section section-gray">
  <div class="container">
    <h2 class="section-title">Datasets</h2>
    <div class="grid grid-2">
      {% for dataset in site.data.resources.datasets %}
      <div class="card">
        <h3 class="card-title">{{ dataset.name }}</h3>
        <p class="card-description">{{ dataset.description }}</p>
        <p class="text-small text-muted mt-2"><strong>Access:</strong> {{ dataset.access }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container container-narrow">
    <h2 class="section-title">Citation Guidelines</h2>
    <p>{{ site.data.resources.citation_guidelines }}</p>
    <p class="mt-4">For questions about accessing our data or using our software, please <a href="{{ '/contact/' | relative_url }}">contact us</a>.</p>
  </div>
</section>

<section class="section section-gray">
  <div class="container container-narrow">
    <h2 class="section-title">Machine-Readable Feeds</h2>
    <p class="text-muted">Structured lab data from this site (JSON):</p>
    <ul>
      <li><a href="{{ '/api/publications.json' | relative_url }}">Publications</a></li>
      <li><a href="{{ '/api/team.json' | relative_url }}">Team</a></li>
      <li><a href="{{ '/api/resources.json' | relative_url }}">Resources</a></li>
    </ul>
  </div>
</section>
