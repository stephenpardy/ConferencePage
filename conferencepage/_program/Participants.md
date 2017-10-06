---
title:  "Participants"
link: "participants"
order: 3
layout: section
---

{% assign sortedParticipants = site.data.participants | sort:"LastName" %}
{% assign n = site.data.participants.size | divided_by: 2 %}

<div class="row">
  <div class="col-sm-6">
    <ul>
      {% for person in sortedParticipants limit:n %}
        <li class='participant {{ person.Type }}'> {{ person.FirstName }} {{ person.LastName }} - {{ person.Affil }}
        {% if person.Type == 'i' %}<br> <b> Invited Talk </b>
        {% else %}
          {% if person.Type != 'n' %}<br> <b>
            {% case person.Type %}
              {% when 'p' %}
                Poster 
              {% when 't' %}
                Talk 
              {% else %}
            {% endcase %}
          Title:</b>
            {% if person.Title != 'NaN' %}
              {{ person.Title }}
            {% else %}
              TBD
            {% endif %}
          {% endif %}
        {% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="col-sm-6">
    <ul>
      {% for person in sortedParticipants offset:n %}
        <li class='participant {{ person.Type }}'> {{ person.FirstName }} {{ person.LastName }} - {{ person.Affil }}
        {% if person.Type == 'i' %}<br> <b> Invited Talk </b>
        {% else %}
          {% if person.Type != 'n' %}<br> <b>
            {% case person.Type %}
              {% when 'p' %}
                Poster 
              {% when 't' %}
                Talk 
              {% else %}
            {% endcase %}
          Title:</b>
            {% if person.Title != 'NaN' %}
              {{ person.Title }}
            {% else %}
              TBD
            {% endif %}
          {% endif %}
        {% endif %}
        </li>
      {% endfor %}
    </ul>
  </div>
</div> <!-- row -->
