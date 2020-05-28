# Why Incidents Fail to Trigger

---
## Why was an Incident not Triggered or Created?

There are a few reasons why an incident would not be triggered or created in PagerDuty:
- [A Service was Disabled or Placed in Maintenance Mode](#section-a-service-was-disabled-or-placed-in-maintenance-mode)
- [Event Rules are Configured to Suppress Certain Alerts](https://support.pagerduty.com/docs/why-incidents-fail-to-trigger#section-event-rules-are-configured-to-suppress-certain-alerts)
- [Email Integration Settings are Filtering out Emails](#section-email-integration-settings-are-filtering-out-emails)
- [Email Management Rules are Appending Triggers to Existing Incidents](#section-email-management-rules-are-appending-triggers-to-existing-incidents)
- [Nobody was On-call](#section-nobody-was-on-call) 

### A Service was Disabled or Placed in Maintenance Mode

When a service is [disabled](/docs/maintenance-windows#section-disable-a-service) or in [maintenance mode](/docs/maintenance-windows#section-scheduling-maintenance), new incidents will not be triggered or created for that service. Because an incident is not created, PagerDuty will not send notifications to the person on-call for that service.

### Event Rules are Configured to Suppress Certain Alerts

If you have [Service Event Rules](https://support.pagerduty.com/docs/event-management#section-configure-event-rules-for-a-service) or [Global Event Rules](https://support.pagerduty.com/docs/global-event-rules) configured on your account, you may have event rules that are set to suppress alerts that meet certain criteria, and in those cases, an incident will not be triggered. 

For Service Event Rules, navigate to **Configuration** :fa-arrow-right: **Services**, click the **name** of the service where you expected the incident to trigger, and select the **Event Rules** tab. Check any event rules to see if **Suppress** is selected under **Actions Performed**:

![](https://files.readme.io/1f3e007-why-incidents-fail-service-event-rule-suppress.png)

For Global Event Rules, navigate to **Configuration** :fa-arrow-right: **Event Rules**. Next, check to see if any of your event rules have **Do not route alert to a service** selected under **Alert Behavior**, or if they have **Route to a service** selected, but under **Incident Behavior**, **Suppress and do not create an incident** is selected:

![](https://files.readme.io/438e2c9-why-incidents-fail-do-not-route-to-service.png)

![](https://files.readme.io/6f912b7-why-incidents-fail-suppress-do-not-create-incident.png)

### Email Integration Settings are Filtering out Emails

If you have regex filters set up on your email integration service, then you will want to check to make sure that your regex filters are not [filtering out emails](doc:email-management-filters-and-rules#section-limit-noise-with-email-integration-filters) that you want to trigger incidents.

For example, if you have the following regex filter:

![](https://files.readme.io/7948e76-why-incidents-fail-regex-rules.png)

Then emails with the subject line "PROBLEM" will not trigger incidents in PagerDuty, because they are filtered out based on your regex rules.
- [View some regular expression examples](/docs/email-management-filters-and-rules#section-regular-expression-tips-examples)
- [Test your regular expressions with Rubular](http://rubular.com/)

### Email Management Rules are Appending Triggers to Existing Incidents

Email integration settings also have email management rule settings. These are distinct from email filters. While email filters determine which emails trigger incidents for your service, incident creation settings determine how emails create new incidents. 

If you have either of these two email management rules for your email integration service:

- **Open a new alert only if an open incident does not already exist**
- **Open and resolve alerts based on custom rules**

...then an incident was most likely appended to an existing incident, which would explain why a new incident was not created. When a trigger is appended to an incident it will appear in the same incident timeline. [Learn more about incident creation settings](/docs/email-management-filters-and-rules#section-trigger-and-resolve-alerts-with-email-management-rules).

### Nobody was On-call

If no one is on-call on a service's escalation policy, PagerDuty does not have a user to assign an incident to, and we will not create a new incident. 

For example, if your escalation policy only has the following schedule associated with it, where one user is on-call from 00:00 - 08:00, if a trigger comes in between 08:01 - 23:59, no new triggers will be created in PagerDuty because no one will be on-call.

To address this, check the [escalation policy](doc:escalation-policies) associated with your service and make sure that someone will be on-call when you need incidents to trigger.

<!-- theme: info -->

> ### Note
>
> If you try to trigger a new incident through the website while nobody is on-call on the escalation policy associated with that service, you will receive the error **Incident could not be assigned**.
>
>![](https://files.readme.io/4ad931c-why-incidents-fail-no-one-on-call.png)
