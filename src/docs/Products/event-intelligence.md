---
title: "PagerDuty Event Intelligence"
slug: "event-intelligence"
hidden: false
createdAt: "2018-06-01T17:19:15.185Z"
updatedAt: "2020-05-22T21:17:08.773Z"
---
PagerDuty Event Intelligence, built with automatic adaptive learning and team-centric workflows in mind, makes it easy for teams to cut through the noise so you can focus on what matters. With Event Intelligence, teams can automate common manual workflows, significantly reduce operational noise, and access rich context during incident triage to speed up response. This package consists of a suite of tools to assist with: Alert Grouping, Intelligent Triage and Advanced Event Automation.
[block:callout]
{
  "type": "info",
  "body": "PagerDuty Event Intelligence is included in our Digital Operations plan. For other plans, it is a new subscription available on top of your existing PagerDuty account. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature suite."
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fbe2589-image4.png",
        "image4.png",
        1870,
        968,
        "#eef0ed"
      ]
    }
  ]
}
[/block]
#Alert Grouping

##Intelligent Alert Grouping

Intelligent Alert Grouping allows your responders to stay focused during a storm of alerts. When enabled on a service, Intelligent Alert Grouping uses a machine-learning based algorithm to automatically group related incoming alerts into a single open incident. 

No rules or additional configuration is needed in order for this algorithm to start grouping alerts - it begins grouping automatically once enabled. Over time, the Intelligent Alert Grouping algorithm will readjust to the unique history of alerts on your service. It's a tool that gets smarter the more you use it.

Intelligent Alert Grouping weighs various factors to determine when to group alerts. This includes recurring patterns in how responders have acknowledged, resolved, and grouped incidents in the past, as well as alerts previously grouped via the Time-Based Alert Grouping feature. 

To learn more about this feature, check out our article on [Intelligent Alert Grouping](https://support.pagerduty.com/docs/intelligent-alert-grouping). If you'd like to preview how Intelligent Alert Grouping would group your alerts before enabling it, check out our [Preview Intelligent Alert Grouping](https://support.pagerduty.com/docs/preview-intelligent-alert-grouping) feature.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1aaf469-event-intelligence-view-grouping.png",
        "event-intelligence-view-grouping.png",
        2514,
        1184,
        "#f6f6f7"
      ]
    }
  ]
}
[/block]
##Time-Based Alert Grouping

Time-Based Alert Grouping will automatically add incoming alerts into open incidents on a service to help keep you focused on the problem at hand. Once Time-Based Alert Grouping is enabled on a service, the first new incoming alert will create a new incident. Subsequent alerts will be added to that incident for the specified time period while the incident is open.

To learn more about this feature, check out our article on [Time-Based Alert Grouping](doc:time-based-alert-grouping).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/050d24e-event-intelligence-time-based-alert-grouping.png",
        "event-intelligence-time-based-alert-grouping.png",
        1762,
        976,
        "#e1e2e1"
      ]
    }
  ]
}
[/block]
# Intelligent Triage

##Past Incidents
Getting notified of an issue can be stressful – especially if the incident appears unfamiliar or new. For responders, seeing past similar incidents that have been resolved adds helpful context for an accurate triage that leads to shorter resolution time. You can see whether you or someone on your team was involved in a past incident, when these types of incidents happen, and dive into any of these incidents to discover what remediation steps were taken in the past.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1d48134-past-incidents-overview.png",
        "past-incidents-overview.png",
        1884,
        1228,
        "#f9fafb"
      ]
    }
  ]
}
[/block]
To learn more about this feature, check out our article on [Past Incidents](doc:similar-incidents).

## Related Incidents

The Related Incidents feature provides incident responders with the suggested 20 most recent related incidents that are impacting other responders and PagerDuty services. This feature uses a completely online and real-time machine learning algorithm to provide these insights, giving responders an at-a-glance-view of the full breadth and scope of incident impact. Related Incidents extends our machine learning capabilities beyond noise reduction, enriching incidents with deep contextual insights to help responders coordinate an effective team response and mitigate business disruption.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/86be99d-related-incidents-overview.png",
        "related-incidents-overview.png",
        1892,
        1348,
        "#f9fafc"
      ]
    }
  ]
}
[/block]
To learn more about this feature, check out our article on [Related Incidents](doc:related-incidents).

# Advanced Event Automation

## Threshold Alerts
With Threshold Alerts, it is possible to receive PagerDuty notifications only when your customized alert conditions breach specified limits. In this way, responders effectively reduce alert noise without missing critical issues. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f0f254d-Incident_Behavior_-_suppress_but_create_triggering_thresholds.png",
        "Incident Behavior - suppress but create triggering thresholds.png",
        1550,
        378,
        "#f8f8f9"
      ]
    }
  ]
}
[/block]
For more information about Threshold Alerts can be found in our [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-threshold-alerts) article.

## Adding Notes
Notes can help responders resolve incidents faster by including information or links related to the system that the event comes from. Notes are added automatically using Global Event Rules. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a3db784-Adding_notes.png",
        "Adding notes.png",
        1430,
        328,
        "#f9f9f9"
      ]
    }
  ]
}
[/block]
More information about Adding Notes can be found in our [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-adding-notes-with-event-rules) article.

## Scheduled Event Rules
You can gain a greater degree of control over your event rules by detailing a single specific time in the future in which they will be active. This is particularly helpful during rules testing and planned maintenance.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6d19e44-Scheduled_Event_Rules.png",
        "Scheduled Event Rules.png",
        3314,
        938,
        "#e1e7f6"
      ]
    }
  ]
}
[/block]
For more information about Scheduled Event Rules, visit our [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-scheduled-event-rules) article.

## Recurring Event Rules
If there are specific hours of the day or day(s) within a week when you would like an event to follow a particular rule, you can set its activity on an automatic, weekly recurring schedule. This feature is specific to each individual event rule and you can make additional changes, such as changing severity/priority, based on time of day. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5a84573-Scheduled_Event_Rules.png",
        "Scheduled Event Rules.png",
        3314,
        938,
        "#e1e7f6"
      ]
    }
  ]
}
[/block]
For more information about Recurring Event Rules, visit our [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-recurring-event-rules) article.

## Disable Event Rules
If you would like to pause an event rule’s activity, you can disable and re-enable it at a later time. This feature allows you to manually initiate integration-specific disablement during maintenance or testing on a tool. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f86533-event-intelligence-disable-event-rule.png",
        "event-intelligence-disable-event-rule.png",
        558,
        798,
        "#f5f6f6"
      ]
    }
  ]
}
[/block]
For more information about Disable Event Rules, visit our [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-disable-event-rules) article.