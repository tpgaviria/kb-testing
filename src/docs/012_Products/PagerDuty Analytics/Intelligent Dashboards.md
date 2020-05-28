---
title: "Intelligent Dashboards"
excerpt: ""
---
Intelligent Dashboards measure the impact of real-time work on teams and business objectives, promoting continuous improvement in digital operations towards greater success. Digital business leaders can use flexible data visualizations to compare key metrics to industry benchmarks or teams to company averages. After making improvements in training, processes and technology investments, leaders can then monitor the performance of Teams and Services and ensure they are trending in the right direction.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1cc4483-intelligent-dashboards-full-screen.png",
        "intelligent-dashboards-full-screen.png",
        1319,
        1055,
        "#ebf2f0"
      ]
    }
  ]
}
[/block]
#Product Capabilities

##Team Performance Dashboard

The Team Performance Dashboard provides key insights and highlights trends that impact performance of your Teams and their Services. Managers using the Team Performance dashboard will be able to select either their industry benchmark or the company average as a reference line to compare their teams to. Data points that make up each metric, such as each individual team, can be drilled down by clicking into each heading. To access the Team Performance Dashboard, navigate to **Analytics** :fa-arrow-right: **Intelligent Dashboards**.
###Parameters
Filter by:
* **team_scope**: My Teams or All Teams
* **time_range**: Last 7 days, Last 30 days or Last 90 days
* **Urgency**: High Urgency, Low Urgency or All Incidents
* **Major**:  Major Only or All Incidents

###Team Performance Metrics
[block:parameters]
{
  "data": {
    "0-0": "***Response Effort in Hours***",
    "1-0": "***Response Effort in Hours by Team***",
    "2-0": "***Incident Volume***",
    "3-0": "***Incident Volume by Team***",
    "4-0": "***Escalations***",
    "5-0": "***Escalations by Team***",
    "6-0": "***Interruption Volume***",
    "7-0": "***Interruption Volume by Team***",
    "0-1": "Total time in hours that all involved responders have spent resolving each incident from their acknowledgement to resolution.",
    "1-1": "Response Effort in Hours (defined above) broken out by team.",
    "2-1": "Total count of incidents.",
    "3-1": "Total count of incidents broken out by team. In cases where responders across multiple teams are involved, the count is not distinct  (e.g., if Roger from Team A and John from Team B are involved in responding to an incident, it will be counted for Team A and for Team B as well).",
    "4-1": "Total count of instances where an incident is escalated between responders assigned to an escalation policy.",
    "5-1": "Total count of escalations (defined above) broken out by team.",
    "6-1": "Total count of phone, SMS or push incident notifications sent to responders. Interruptions are grouped by Business Hours, Off Hours and Sleep Hours:\n\n* **Business Hours**: 8am-6pm Mon-Fri, based on the user’s time zone**. \n\n* **Off Hours**: 6pm-10pm Mon-Fri and all day Sat-Sun, based on the user’s time zone**.\n\n* **Sleep Hours**: 10pm-8am every day, based on the user’s time zone**. \n\n** If the user has not set their local time zone in their PagerDuty account, then account’s time zone is used.",
    "7-1": "Interruption volume (defined above) broken out by team."
  },
  "cols": 2,
  "rows": 8
}
[/block]
###Team Details Metrics
For the Response Effort in Hours by Team, Incident Volume by Team, Escalations by Team and Interruption Volume by Team metrics, one can drill down into data for each team by clicking on the team’s name. Each Team Details page will have Incident Response and Incident Impact metrics.  Any filters applied to the Team Performance dashboard will carry over to the Team Details view as well. 

####Incident Response
[block:parameters]
{
  "data": {
    "0-0": "***MTTA***",
    "1-0": "***MTTR***",
    "2-0": "***Escalations***",
    "3-0": "***Reassignments***",
    "4-0": "***MTTR vs. Incident Volume***",
    "0-1": "Mean Time to Acknowledge",
    "1-1": "Mean Time to Resolve",
    "2-1": "Total count of instances where an incident is escalated between responders assigned to an escalation policy.",
    "3-1": "Total count of instances where an additional responder, who was not on-call for the incident, is added.",
    "4-1": "A bar chart of Incident Count with the Mean Time to Resolve in minutes transposed for comparison."
  },
  "cols": 2,
  "rows": 5
}
[/block]
####Incident Impact
[block:parameters]
{
  "data": {
    "0-0": "***Interruption Volume***",
    "0-1": "Month-over-month trend report in volume of phone, SMS or push incident notifications sent to responders. Interruptions are grouped by Business Hours, Off Hours and Sleep Hours:\n\n* **Business Hours**: 8am-6pm Mon-Fri, based on the user’s time zone**. \n\n* **Off Hours**: 6pm-10pm Mon-Fri and all day Sat-Sun, based on the user’s time zone**.\n\n* **Sleep Hours**: 10pm-8am every day, based on the user’s time zone**. \n\n** If the user has not set their local time zone in their PagerDuty account, then account’s time zone is used",
    "1-0": "***Response Hours Cost***",
    "1-1": "Month-over-month bar chart with the amount of response hours. Hover over each bar to see the cost of response hours.",
    "2-0": "***Incidents List***",
    "2-1": "A list of all incidents and their details for the time range parameter specified."
  },
  "cols": 2,
  "rows": 3
}
[/block]
#FAQ
##How far back can I look at my data?
At moment 90 days, but longer time frames and custom date ranges are on the road map.
