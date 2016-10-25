---
title:  "Program"
link: "Program"
order: 4
---

<div class="wrapper">
{% for day in site.data.program %}
  <div class="container">
    <div class="row">
      <div class="col-sm-12" style="background:#dcd4bf">
        <p class="text-center">{{ day.date }}</p>
      </div>
    </div>
    {% for session in day.schedule %}
    <div class="row">
      <div class="col-sm-12" style="background:#dfc288">
        <p class="text-center">{{ session.name }}</p>
      </div>
    </div>
    {% for talk in session.schedule %}
    <div class="row" style="border: 1px solid black">
        <div class="col-sm-3 col-xs-4">
          <p class="text-center"> {{ talk.time }} </p>
        </div>
        <div class="col-sm-4 col-xs-8">
          <p class="text-center"> {{ talk.name }}</p>
        </div>
        <div class="col-sm-5">
          <p class="text-center"> {{ talk.summary }}</p>
        </div>
    </div>
    {% endfor %}
    {% endfor %}
  </div>
{% endfor %}
</div>


