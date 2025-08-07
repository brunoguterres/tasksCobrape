---
layout: default
title: Postagens
permalink: /postagens/
---

# Postagens

Aqui você encontra todos os meus posts.

{% for post in site.posts %}
  - **[{{ post.title }}]({{ post.url }})**
    {{ post.excerpt }}
{% endfor %}