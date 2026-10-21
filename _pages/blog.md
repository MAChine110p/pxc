---
layout: default
title: 博客
permalink: /blog/
---
<section class="page-heading">
  <p class="eyebrow">NOTES & IDEAS</p>
  <h1>博客<span class="accent">。</span></h1>
  <p class="lead">写下正在思考的事，让想法有处可去。</p>
</section>
{% if site.posts.size > 0 %}
<div class="post-list blog-list">
  {% for post in site.posts %}
  <article class="post-row">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
    <div><h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3><p>{{ post.description | default: post.excerpt | strip_html | truncate: 140 }}</p>{% if post.tags.size > 0 %}<div class="tags">{% for tag in post.tags %}<span>{{ tag }}</span>{% endfor %}</div>{% endif %}</div>
    <span class="row-arrow" aria-hidden="true">↗</span>
  </article>
  {% endfor %}
</div>
{% else %}
<div class="empty-state"><span class="empty-icon">✳</span><div><h3>这里还很安静</h3><p>新建一篇 Markdown 文章，下一次部署后它就会出现在这里。</p></div></div>
{% endif %}

