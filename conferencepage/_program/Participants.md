---
title:  "Participants"
link: "participants"
order: 2
layout: section
---

{% assign sortedParticipants = site.data.participants | sort:"LastName" %}
{% assign n = site.data.participants.size | divided_by: 2 %}

<div class="row">
  <div class="col-sm-6">
    <ul>
      {% for person in sortedParticipants limit:n %}
        <li class='participant'> {{ person.FirstName }} {{ person.LastName }} - {{ person.Affil }}
        {% if person.Title != 'NaN' %}
        <br> <b>Title:</b> {{ person.Title }}
        {% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="col-sm-6">
    <ul>
      {% for person in sortedParticipants offset:n %}
        <li class='participant'> {{ person.FirstName }} {{ person.LastName }} - {{ person.Affil }}
        {% if person.Title != 'NaN' %}
        <br> <b>Title:</b> {{ person.Title }}
        {% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
</div> <!-- row -->