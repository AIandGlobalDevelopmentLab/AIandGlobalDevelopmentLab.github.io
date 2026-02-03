---
layout: default
title: Team
description: Meet the researchers behind the AI & Global Development Lab.
---

<div class="page-header">
  <div class="container">
    <h1>Team</h1>
    <p class="page-description">An interdisciplinary team spanning computer science, statistics, political science, and sociology.</p>
  </div>
</div>

<section class="section">
  <div class="container">
    <h2 class="section-title">Lab Directors</h2>
    <div class="grid grid-3">
      {% for director in site.data.team.directors %}
      <div class="card team-card team-card-large">
        <div class="team-photo" style="background-color: #e8e8ed; display: flex; align-items: center; justify-content: center; color: #86868b; font-size: 14px;">Photo</div>
        <h3 class="team-name">{{ director.name }}</h3>
        <p class="team-role">{{ director.role }}<br>{{ director.institution }}</p>
        <p class="card-description" style="margin-top: 12px; font-size: 14px;">{{ director.bio }}</p>
        <div class="team-links" style="margin-top: 16px;">
          {% if director.website %}
            <a href="{{ director.website }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">Website</a>
          {% endif %}
          {% if director.github %}
            <a href="https://github.com/{{ director.github }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub</a>
          {% endif %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

{% if site.data.team.researchers.size > 0 %}
<section class="section section-gray">
  <div class="container">
    <h2 class="section-title">Researchers</h2>
    <div class="grid grid-4">
      {% for person in site.data.team.researchers %}
      <div class="card team-card">
        <div class="team-photo" style="background-color: #e8e8ed; display: flex; align-items: center; justify-content: center; color: #86868b; font-size: 12px;">Photo</div>
        <h3 class="team-name">{{ person.name }}</h3>
        <p class="team-role">{{ person.role }}<br>{{ person.institution }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

{% if site.data.team.students.size > 0 %}
<section class="section">
  <div class="container">
    <h2 class="section-title">Students</h2>
    <div class="grid grid-4">
      {% for person in site.data.team.students %}
      <div class="card team-card">
        <div class="team-photo" style="background-color: #e8e8ed; display: flex; align-items: center; justify-content: center; color: #86868b; font-size: 12px;">Photo</div>
        <h3 class="team-name">{{ person.name }}</h3>
        <p class="team-role">{{ person.role }}<br>{{ person.institution }}</p>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}

{% if site.data.team.alumni.size > 0 %}
<section class="section section-gray">
  <div class="container">
    <h2 class="section-title">Alumni</h2>
    <div class="grid grid-4">
      {% for person in site.data.team.alumni %}
      <div class="card team-card">
        <h3 class="team-name">{{ person.name }}</h3>
        <p class="team-role">{{ person.role }}</p>
        {% if person.current %}
          <p class="text-small text-muted">Now: {{ person.current }}</p>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>
{% endif %}
