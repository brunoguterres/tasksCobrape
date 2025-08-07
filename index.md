---
layout: default
title: Página Inicial
---

# Bem-vindo ao meu site!

Este é o texto da minha página inicial.

[Veja meus posts aqui!](postagens.md)

# Postagens

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>