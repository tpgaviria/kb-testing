# Time-Based Alert Grouping

---

## Overview

When enabled, Time-Based Alert Grouping will automatically add incoming alerts into open incidents on a service to help keep you focused on the problem at hand. Once Time-Based Alert Grouping is enabled on a service, the first new incoming alert will create a new incident. Subsequent alerts will be added to that incident for the specified time period while the incident is open.

<!-- theme: info -->

> ### Note
>
> Time based alert grouping is available to customers on our Digital Operations, and [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.

## Configuration

You’ll find this option in under the alert grouping tab, on the service details page. This option is only accessible if the option to “Create alerts and incidents” is also enabled on the service.

![](https://files.readme.io/7b258fe-time-based-setting.png)

## Options

### Intelligently based on the alert content and past groups
Alerts are added intelligently to existing open incidents based on a machine learning model trained specifically on the historical data of your services. The grouping behavior adapts as you and your team use PagerDuty, learning from user behavior such as manually merging incidents together. [Learn more about Intelligent Alert Grouping](https://support.pagerduty.com/docs/intelligent-alert-grouping).

### For the following duration (time-based)
You will be prompted to choose how you'd like all of the alerts from that service to roll up into the incident, either over a given time span or for the duration of the incident (2).
* Time {2 minutes, 5 minutes, 15 minutes, 30 minutes, 1 hour, 2 hours, 4 hours, 8 hours, 12 hours, 24 hours}
* Until incident is resolved

### Do not group alerts automatically on this service
Default behavior. Alerts will not be grouped. Inbound events will respect any dedupe keys sent in through the API.

![](https://files.readme.io/a05d6b0-time-based-options.png)

If you choose a time window, the timer will start when an incident is triggered on a service by an alert. From there, all alerts received on that service will be grouped for the given time period. If the incident is resolved within that time period, the timer will stop, and no subsequent alerts will be grouped into that incident.  The timer will restart when the next alert on that service comes in and triggers a new incident. Otherwise, if the incident is not resolved within that time period, the incident will remain open and the next alert will trigger a new incident. All subsequent alerts will be grouped into the new incident. 

If you choose ‘Until incident is resolved’, the first alert on the service will trigger an incident and all subsequent alerts will be grouped into that incident until it is resolved, regardless of time span.

Alerts are not automatically grouped into manually triggered incidents. 

## Things to keep in mind

1. The service must have **Incidents & Alerts** enabled in Settings. 
2. While the feature is designed to reduce notification noise, the number of times you are actually notified will be based on your Notification Rules. If you have an Acknowledgement Timeout set up on a service, and you have a rule set up to receive a phone call when that timeout is reached, you will still get that phone call.
3. Alerts not grouped in a manner that you intended can be manually moved to new or existing incidents. From the Alerts tab on the Incident Details, there is the option to “Move to a new incident” or “Move to an existing incident.”  You will see a modal offering you the option to move this alert to a new incident or move to an existing incident.

![](https://files.readme.io/237b51d-move-tb-ag.png)

![](https://files.readme.io/755c993-time-based-move.png)

## Example

**Shopping Cart** service is configured for Time-Based Alert Grouping, 1 hour time window.


| | Example 1: Incident resolves within 45 minutes | Example 2: Incident does not resolve within 1 hour
---------|----------|---------
 10:00am | TRIGGERED: An alert comes in, creates Incident 1. The 1 hour timer begins, set to group all new alerts on the **Shopping Cart** service into Incident 1 until 11:05am. | TRIGGERED: An alert comes in, creates Incident 1. The 1 hour timer begins, set to group all new alerts on the **Shopping Cart** service into Incident 1 until 11:05am.
 10:07am | ACK: Responder acknowledges Incident 1 | ACK: Responders acknowledges Incident 1
 10:15am | Five more alerts come in on Shopping Cart. Incident 1 now has 6 alerts, all triggered. | Five more alerts come in on Shopping Cart. Incident 1 now has 6 alerts, all triggered.
 10:45am | RESOLVE: The responder resolves Incident 1. New alerts on the Shopping Cart service will no longer be grouped into incident 1. | Incident 1 is still in the acknowledged state, grouping alerts.
 10:55am | TRIGGERED: An alert comes in on Shopping Cart service, creates Incident 2. A new 1 hour timer begins, set to group all new alerts on the Shopping Cart service into Incident 2 until 11:55am. | An alert comes in on Shopping Cart, is grouped into Incident 1.  Incident 1 now has 7 alerts: 3 resolved, 4 triggered.
 11:00am | Incident 1 is resolved, Incident 2 is triggered with 1 alert. | Incident 1 is still acknowledged, the timer is up and PagerDuty will no longer actively group new alerts into Incident 1. Incident 1 is acknowledged with 7 alerts.
 11:10am | An alert comes in, is grouped into Incident 2. Incident 2 now has 2 alerts. |TRIGGERED: An alert comes in, creates Incident 2. The The 1 hour timer begins, set to group all new alerts on the **Shopping Cart** service into Incident 2 until 12:10am.


## FAQ

### How is this different from deduplication?

Deduplication is configured on a per-integration basis, and often requires specific event information, like an incident key or an alert key. Deduplication is great for services with one simple integration. When you have multiple integrations on a service, or your monitoring tool generates a wide variety of alerts, it can become increasingly difficult to manage. Time-Based Alert Grouping allows you to group all incoming events on the service into the current incident for the specified time period, regardless of the monitoring tool from which the alert originated.

### How is this different from snoozing? 

Snoozing keeps an incident from moving up the chain of an Escalation Policy and notifying users. Snoozing does not prevent new incidents from being generated on a service. 

### Can I still manually merge incidents? 

Yes. Time-Based Alert Grouping will have no effect on your ability to manually merge incidents. All grouped alerts will be merged into a single incident.

### Can alerts be grouped into a manually triggered incident?

Alerts are only grouped into incidents that were initially created by an alert. Alerts will not be grouped into incidents that are manually triggered on a service. 

### Will incidents created by REST API be grouped by Time-Based Alert Grouping?

No. Like manual creation, the [incidents REST API](https://v2.developer.pagerduty.com/docs/incident-creation-api) bypasses alerts and creates incidents directly. Thus, it is not affected by Time-Based Alert Grouping, which extends the behavior of how inbound events and alerts translate to triggered incidents. 

This would also apply to any and all integrations that create incidents via REST API, which includes the [ServiceNow Enterprise integration](https://www.pagerduty.com/docs/guides/ServiceNow-integration-guide/).

### Is there a limit to how many alerts can group into a single incident?

Yes - incidents are limited to 1000 alerts each. After this limit is reached, a new incident will be created and subsequent alerts will continue grouping under the new incident.