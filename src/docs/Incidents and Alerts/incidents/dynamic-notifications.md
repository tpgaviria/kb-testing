---
title: "Dynamic Notifications"
slug: "dynamic-notifications"
excerpt: "Add severity levels to incidents to support effective incident triage"
hidden: false
createdAt: "2017-07-07T16:12:30.072Z"
updatedAt: "2020-06-11T00:22:09.267Z"
---
[block:callout]
{
  "type": "info",
  "title": "Accessing this feature",
  "body": "Legacy Lite and Basic plans do not have access to Dynamic Notifications. If you would like to use to this feature, please [contact our Sales team](https://www.pagerduty.com/contact-sales/) to switch to any of our current plans."
}
[/block]

[block:api-header]
{
  "title": "Event/Alert Severity Levels"
}
[/block]
Alerts in PagerDuty can be generated with a severity field. These severity values can be directly provided from the triggering monitoring tool, or set using event rules.

When an incident is generated from an alert, the alert’s severity field is used to determine the urgency level. The values of this field must be one of the following: `critical`, `error`, `warning`, or `info`. Note that this is case sensitive, so `Info` will not work. Urgency mapping works as follows:
[block:html]
{
  "html": "<div class=\"magic-block-parameters\">\n   <div class=\"block-parameters-table\">\n      <div class=\"table\">\n         <div class=\"tr\">\n            <div class=\"th\" style=\"width: 100px\">Alert Severity</div>\n            <div class=\"th\">Description</div>\n            <div class=\"th\">Default Incident Urgency</div>\n            <div class=\"th\">Incident Behavior</div>\n         </div>\n         <div class=\"tr\">\n            <div class=\"td\">\n               <p><code>critical</code></p>\n            </div>\n            <div class=\"td\">\n               <p>A failure in the system&#39;s primary application.</p>\n            </div>\n            <div class=\"td\">\n               <p>High</p>\n            </div>\n            <div class=\"td\">\n               <p>Uses high-urgency notification rules and escalates if not acknowledged.</p>\n            </div>\n         </div>\n         <div class=\"tr\">\n            <div class=\"td\">\n               <p><code>error</code></p>\n            </div>\n            <div class=\"td\">\n               <p>Any error which is fatal to the operation, but not the service or application.</p>\n            </div>\n            <div class=\"td\">\n               <p>High</p>\n            </div>\n            <div class=\"td\">\n               <p>Uses high-urgency notification rules and escalates if not acknowledged.</p>\n            </div>\n         </div>\n         <div class=\"tr\">\n            <div class=\"td\">\n               <p><code>warning</code></p>\n            </div>\n            <div class=\"td\">\n               <p>May indicate that an error will occur if action is not taken.</p>\n            </div>\n            <div class=\"td\">\n               <p>Low</p>\n            </div>\n            <div class=\"td\">\n               <p>Uses low-urgency notification rules and does not automatically escalate.</p>\n            </div>\n         </div>\n         <div class=\"tr\">\n            <div class=\"td\">\n               <p><code>info</code></p>\n            </div>\n            <div class=\"td\">\n               <p>Normal operational messages that require no action.</p>\n            </div>\n            <div class=\"td\">\n               <p>Low (if appended to an incident; we recommend suppressing info alerts)</p>\n            </div>\n            <div class=\"td\">\n               <p>Uses low-urgency notification rules and does not automatically escalate.</p>\n            </div>\n         </div>\n         <div class=\"tr\">\n            <div class=\"td\">\n               <p><em>Unknown</em></p>\n            </div>\n            <div class=\"td\">\n               <p>Automatically chosen when a monitoring tool is not setting or can not set the severity</p>\n            </div>\n            <div class=\"td\">\n               <p>High</p>\n            </div>\n            <div class=\"td\">\n               <p>Uses high-urgency notification rules and escalates if not acknowledged.</p>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"
}
[/block]
Severity to Urgency mappings are hard-coded (as shown below). Any incoming events that do not contain a Severity will default to High Urgency.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cdbff66-dynamic-notifications-incident-settings.png",
        "dynamic-notifications-incident-settings.png",
        2066,
        914,
        "#f1f1f2"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Using Severity to Control Urgency"
}
[/block]
In order to use this capability, go to a Service’s settings page and switch **“How should responders be notified”** to “Use alert severity to determine how responders are notified for each incident”:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/35dade2-dynamic-notifications-select-alert-severity.png",
        "dynamic-notifications-select-alert-severity.png",
        1772,
        386,
        "#cdd2d9"
      ]
    }
  ]
}
[/block]
Any alert-created incidents on the service will now determine their notification urgency according to the Severity of the alerts that create them. When an alert is added to an incident, or when an alert’s severity changes, it will also update its corresponding incident’s Notification Urgency, but only upward. For example, an alert changing from Warning to Critical will change the associated incident from Low to High, but another change from Critical to Warning will not down-urgency the incident.

Non-alert incidents, such as those manually triggered or triggered through the Create Incidents API, will always have their urgency set by the service’s setting. 
[block:api-header]
{
  "title": "Defined Support Hours"
}
[/block]
Users can also take advantage of Dynamic Notifications in relation to [defined support hours](https://support.pagerduty.com/docs/service-settings#use-case-support-hours) on a service. Defined support hours can be configured by editing the settings on the service in question.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d85cd51-dynamic-notifications-support-hours.png",
        "dynamic-notifications-support-hours.png",
        1806,
        1104,
        "#f1f1f2"
      ]
    }
  ]
}
[/block]
Customers can also base their Notification Urgencies off of time of day. Here, the user can set specific support hours, and decide how they want to be notified inside and outside of this time window. The user can select either High, or Low, or Dynamic Notifications. When support hours end, users also have the option to either leave Incidents at their current Urgency, or raise the Urgency of all triggered incidents for the Service to High.
[block:api-header]
{
  "title": "Upgrading Incident Notification Urgency"
}
[/block]
If multiple trigger events come in for the same alert, the alert will upgrade its severity value to the most severe value. For example, if an alert was initially triggered by a Warning event, but then a Critical event comes in, the alert will now be Critical, and the associated incident will change from low urgency to high urgency. If a subsequent Info event comes in, the incident will remain High Urgency. It will not downgrade to Low. 

There are three ways in which multiple alerts can be “bundled” into a single incident. First is by using our [Alert Grouping](https://support.pagerduty.com/docs/time-based-alert-grouping) feature. Here, users can group alerts for a set period of time, or until the incident resolves. While Grouping is activated, subsequent alerts will roll-up under the single incident. The incident will adopt the Notification Urgency that corresponds with the most severe alert that is grouped with it.

The second way alerts can be "bundled" is by manually merging their parent incidents. Below is an example of two alerts that have been merged into a single incident. In this example, the urgency of each alert was raised to **High** by the merge:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/17cc3b3-dynamic-notifications-alert-grouping.png",
        "dynamic-notifications-alert-grouping.png",
        2532,
        1436,
        "#fafafa"
      ]
    }
  ]
}
[/block]
The third way alerts can be “bundled” to a single incident is using a alert dedup_key. Using a dedup_key, a subsequent alert trigger will replace an existing alert. 
[block:api-header]
{
  "title": "PagerDuty Common Event Format"
}
[/block]
For integrations already mapped to the PagerDuty Common Event Format (PD-CEF), alerts of varying severities may be generated by default. For most integrations, however, alerts are generated as Critical by default, and event rules must be used to set the desired severity.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5872f92-dynamic-notifications-event-rule-severity.png",
        "dynamic-notifications-event-rule-severity.png",
        856,
        414,
        "#dededf"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Recommended Practices"
}
[/block]
**For immediately actionable events, set a “critical” or “error” severity.**

This will ensure that any associated incidents use high-urgency notification channels and escalate if not acknowledged.

**For actionable events that do not require immediate attention, set a “warning” severity.**

This will create a low-urgency incident that does not escalate.

**For non-actionable events, consider suppressing them in addition to setting an “info” severity.**

Non-actionable events do not require incident response, so in most cases you will want to suppress these.
[block:api-header]
{
  "title": "Frequently Asked Questions"
}
[/block]
**How does this interact with Incident Priority?**

Incident Priority and Incident Urgency are separate properties that today, do not influence each other. Currently, Priority can be set manually by users on an existing incident, during incident creation via manual creation, with the Incident Create API or it can be set [via event rules](https://support.pagerduty.com/docs/rulesets#section-set-priority-with-event-rules).  

**What if an alert does not have a severity attached?**

Alerts created prior to November 2016 may not have severity information attached. However, since then, all alerts are generated with severity, and default to Critical if the severity is not specified by the emitting system, by event transformer, or by an event rule. Events sent to the new Events API v2 must have severity specified.

**What about Email Integrations?**
Email Integrations will also not send in Severity. We are currently scoping out work to allow users to set Severity for email integrations.

**Can I customize the mapping of severity to urgency?**

As of the current date, mappings are not customizable. We intend to build this capability into the platform in future iterations of this feature.

**How do I set urgency if the monitoring tools does not sent it to PD?**

You can use the Event Rules engine to set a Severities for incoming alerts on a Service.

**How does this relate to PagerDuty CEF?**

Integrations mapped to CEF will automatically send in Severity. Users can always send in Severity information using the Events API v2.

**How does this relate to Alert Grouping?**

Users can group alerts into a single incident, either over a specific time period, or for as long as the incident is open. As new alerts bundle into an incident, we will upgrade the incident Urgency to the most severe alert. We will never downgrade an incidents Urgency.

**Will Incident Log Entries Update?**

Yes, we update the ILEs to indicate when incident Urgency is set by Severity, and when incident Urgency is upgraded due to alert Severity.