---
layout: default
title: Writing
permalink: /blog/
---
<section class="page">
  <header class="page-head fade">
    <p class="kicker">NOTES &amp; IDEAS</p>
    <h1>Writing</h1>
    <p class="lead">写下正在思考的事，让想法有处可去。</p>
  </header>

  {% if site.posts.size > 0 %}
  <div class="list fade" data-delay="1">
    {% for post in site.posts %}
    <a class="row" href="{{ post.url | relative_url }}">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
      <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.description | default: post.excerpt | strip_html | truncate: 140 }}</p>
      </div>
      <span class="row-arrow" aria-hidden="true">↗</span>
    </a>
    {% endfor %}
  </div>
  {% else %}
  <div class="empty">这里还很安静。新建一篇 Markdown 文章，下一次部署后它就会出现在这里。</div>
  {% endif %}
</section>
