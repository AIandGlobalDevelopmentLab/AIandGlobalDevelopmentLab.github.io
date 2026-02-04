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
        {% if director.photo %}
          <img class="team-photo" src="{{ director.photo | relative_url }}" alt="{{ director.name }}" loading="lazy" />
        {% else %}
          {% assign parts = director.name | split: ' ' %}
          {% assign first_initial = parts[0] | slice: 0 %}
          {% assign last_index = parts.size | minus: 1 %}
          {% assign last_initial = parts[last_index] | slice: 0 %}
          <div class="team-photo team-photo-placeholder" aria-hidden="true">{{ first_initial }}{{ last_initial }}</div>
        {% endif %}
        <h3 class="team-name">{{ director.name }}</h3>
        <p class="team-role">{{ director.role }}<br>{{ director.institution }}</p>
        <p class="card-description team-bio mt-2">{{ director.bio }}</p>
        <div class="team-links mt-3">
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
        {% if person.photo %}
          <img class="team-photo" src="{{ person.photo | relative_url }}" alt="{{ person.name }}" loading="lazy" />
        {% else %}
          {% assign parts = person.name | split: ' ' %}
          {% assign first_initial = parts[0] | slice: 0 %}
          {% assign last_index = parts.size | minus: 1 %}
          {% assign last_initial = parts[last_index] | slice: 0 %}
          <div class="team-photo team-photo-placeholder" aria-hidden="true">{{ first_initial }}{{ last_initial }}</div>
        {% endif %}
        <h3 class="team-name">{{ person.name }}</h3>
        <p class="team-role">
          {{ person.role }}
          {% if person.institution and person.institution != "" %}<br>{{ person.institution }}{% endif %}
        </p>
        {% if person.bio %}
          <p class="card-description team-bio mt-2">{{ person.bio }}</p>
        {% endif %}
        {% if person.website or person.github or person.links %}
          <div class="team-links mt-3">
            {% if person.website %}
              <a href="{{ person.website }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">Website</a>
            {% endif %}
            {% if person.github %}
              <a href="https://github.com/{{ person.github }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub</a>
            {% endif %}
            {% if person.links %}
              {% for link in person.links %}
                <a href="{{ link.url }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">{{ link.label }}</a>
              {% endfor %}
            {% endif %}
          </div>
        {% endif %}
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
    {% assign phd_students = site.data.team.students | where: "group", "PhD" %}
    {% assign masters_students = site.data.team.students | where: "group", "Masters" %}
    {% assign other_students = site.data.team.students | where: "group", "Other" %}

    {% if phd_students.size > 0 %}
      <h3 class="mt-4 mb-3 text-center">Ph.D.</h3>
      <div class="grid grid-4">
        {% for person in phd_students %}
          <div class="card team-card">
            {% if person.photo %}
              <img class="team-photo" src="{{ person.photo | relative_url }}" alt="{{ person.name }}" loading="lazy" />
            {% else %}
              {% assign parts = person.name | split: ' ' %}
              {% assign first_initial = parts[0] | slice: 0 %}
              {% assign last_index = parts.size | minus: 1 %}
              {% assign last_initial = parts[last_index] | slice: 0 %}
              <div class="team-photo team-photo-placeholder" aria-hidden="true">{{ first_initial }}{{ last_initial }}</div>
            {% endif %}
            <h3 class="team-name">{{ person.name }}</h3>
            <p class="team-role">
              {{ person.role }}
              {% if person.institution and person.institution != "" %}<br>{{ person.institution }}{% endif %}
            </p>
            {% if person.bio %}
              <p class="card-description team-bio mt-2">{{ person.bio }}</p>
            {% endif %}
            {% if person.website or person.github or person.links %}
              <div class="team-links mt-3">
                {% if person.website %}
                  <a href="{{ person.website }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">Website</a>
                {% endif %}
                {% if person.github %}
                  <a href="https://github.com/{{ person.github }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub</a>
                {% endif %}
                {% if person.links %}
                  {% for link in person.links %}
                    <a href="{{ link.url }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">{{ link.label }}</a>
                  {% endfor %}
                {% endif %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% endif %}

    {% if masters_students.size > 0 %}
      <h3 class="mt-6 mb-3 text-center">Master’s</h3>
      <div class="grid grid-4">
        {% for person in masters_students %}
          <div class="card team-card">
            {% if person.photo %}
              <img class="team-photo" src="{{ person.photo | relative_url }}" alt="{{ person.name }}" loading="lazy" />
            {% else %}
              {% assign parts = person.name | split: ' ' %}
              {% assign first_initial = parts[0] | slice: 0 %}
              {% assign last_index = parts.size | minus: 1 %}
              {% assign last_initial = parts[last_index] | slice: 0 %}
              <div class="team-photo team-photo-placeholder" aria-hidden="true">{{ first_initial }}{{ last_initial }}</div>
            {% endif %}
            <h3 class="team-name">{{ person.name }}</h3>
            <p class="team-role">
              {{ person.role }}
              {% if person.institution and person.institution != "" %}<br>{{ person.institution }}{% endif %}
            </p>
            {% if person.bio %}
              <p class="card-description team-bio mt-2">{{ person.bio }}</p>
            {% endif %}
            {% if person.website or person.github or person.links %}
              <div class="team-links mt-3">
                {% if person.website %}
                  <a href="{{ person.website }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">Website</a>
                {% endif %}
                {% if person.github %}
                  <a href="https://github.com/{{ person.github }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub</a>
                {% endif %}
                {% if person.links %}
                  {% for link in person.links %}
                    <a href="{{ link.url }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">{{ link.label }}</a>
                  {% endfor %}
                {% endif %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% endif %}

    {% if other_students.size > 0 %}
      <h3 class="mt-6 mb-3 text-center">Other Students</h3>
      <div class="grid grid-4">
        {% for person in other_students %}
          <div class="card team-card">
            {% if person.photo %}
              <img class="team-photo" src="{{ person.photo | relative_url }}" alt="{{ person.name }}" loading="lazy" />
            {% else %}
              {% assign parts = person.name | split: ' ' %}
              {% assign first_initial = parts[0] | slice: 0 %}
              {% assign last_index = parts.size | minus: 1 %}
              {% assign last_initial = parts[last_index] | slice: 0 %}
              <div class="team-photo team-photo-placeholder" aria-hidden="true">{{ first_initial }}{{ last_initial }}</div>
            {% endif %}
            <h3 class="team-name">{{ person.name }}</h3>
            <p class="team-role">
              {{ person.role }}
              {% if person.institution and person.institution != "" %}<br>{{ person.institution }}{% endif %}
            </p>
            {% if person.bio %}
              <p class="card-description team-bio mt-2">{{ person.bio }}</p>
            {% endif %}
            {% if person.website or person.github or person.links %}
              <div class="team-links mt-3">
                {% if person.website %}
                  <a href="{{ person.website }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">Website</a>
                {% endif %}
                {% if person.github %}
                  <a href="https://github.com/{{ person.github }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">GitHub</a>
                {% endif %}
                {% if person.links %}
                  {% for link in person.links %}
                    <a href="{{ link.url }}" target="_blank" rel="noopener" class="btn btn-sm btn-ghost">{{ link.label }}</a>
                  {% endfor %}
                {% endif %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% endif %}
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
