---
layout: default
title: Página Inicial
---

# Bem-vindo ao meu site!

## Postagens

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>