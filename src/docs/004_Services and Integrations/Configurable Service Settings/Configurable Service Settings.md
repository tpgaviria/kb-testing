# Configurable Service Settings

---

## Response Play

You can run a response play whenever an incident is created on a service. Choose the service and click on the **Edit Service** button. Once on the edit screen, you can choose or clear the response play that will be used for new incidents on the chosen service.

![](https://files.readme.io/122c76f-Screen_Shot_2017-10-27_at_11.33.00_AM.png)

## Enable Urgencies

Urgencies is a feature which allows you to customize how your team is notified based on the criticality of an incident: incidents can be either **high-urgency** (requires immediate attention) or **low-urgency** (it can wait). What does this mean for responders? As an incident responder, you can set up notification rules so that you won't be woken up for low-urgency incidents that can be handled in the morning, or you can set a service to notify you with only high-urgency or low-urgency notification methods at specific times of day.

<!-- theme: info -->

> ### Note
>
> Urgencies are available on all plans with the exception of our legacy Basic and Lite plans. If you are on one of our legacy plans and you would like access to Urgencies, you will need to begin a new subscription to one of our [current plans](https://www.pagerduty.com/pricing/). If you have any questions about these plans, please contact our [sales team](https://www.pagerduty.com/contact-sales/) for more details.

- [Step 1: Configure Service](#section-step-1-configure-service)
- [Step 2: Configure User Profiles](#section-step-2-configure-user-profiles)
- [Use Case 1: Critical and Non-Critical Incidents](#section-use-case-1-critical-and-non-critical-incidents)
- [Use Case 2: Support Hours](#section-use-case-2-support-hours)

### Step 1: Configure Service
Urgencies are defined at the Service level, and all services will initially default to High. This can be adjusted within the settings of a service; to access the settings, navigate to the service you wish to adjust and click **Edit Service**.

![](https://files.readme.io/08d9176-configurable-service-settings-configure-service.png)

You have the option to apply one of two (or four) options to all incidents originating from a particular service, depending on your account's plan:

- Notify responders until someone responds, escalate as needed (use high-urgency notification rules)
- Notify responders,  do not escalate (use low-urgency notification rules)
- Use alert severity to determine how responders are notified for each incident
- Use defined support hours to determine how responders are notified

Low-urgency incidents will not escalate. Only high-urgency incidents will escalate according to the rules defined in an escalation policy.

![](https://files.readme.io/18a8f5a-configurable-service-settings-edit-how-responders-notified.png)

Additionally, accounts with access to Support Hours can configure a setting to raise the urgency of all open incidents once on-call hours begin.

![](https://files.readme.io/ea7e472-configurable-service-settings-raise-urgency.png)

### Step 2: Configure User Profiles
Responders will next need to navigate to their User Profile and specify how they'd like to be notified based on the urgency of an incident.

It's a best practice to create several notification rules for high-urgency incidents and tier them so that the on-call responder will be notified numerous times until they acknowledge the incident.

With non-urgent incidents, however, the on-call responder may only want to receive a push notification, email, or no notification at all, for instance.

![](https://files.readme.io/337cf58-configurable-service-settings-high-low-notification-settings.png)

### Use Case: Support Hours

Let's take a support team as an example. Since a support team responds to customer inquiries during business hours, we want incidents to be categorized as critical during business hours and non-critical after hours. This way they are fresh for work the next day!

You have a few options for configuring your support hours. Your options are:
1. Notify until someone responds (escalates) -- maps to high urgency [notification rules](https://support.pagerduty.com/v1/docs/configuring-a-user-profile#section-notification-rules)
2. Notify but do not escalate -- maps to low urgency notification rules
3. Notify based on alert severity -- [Dynamic Notifications ](https://support.pagerduty.com/v1/docs/dynamic-notifications)

All three of these options are available both during support hours and outside of support hours. 

![](https://files.readme.io/7ef161d-Screen_Shot_2018-01-08_at_5.06.25_PM.png)

Beneath your support hours you can select the option **Raise urgency of all triggered incidents for this service to High when service support hours begin.** This means that all open incidents on the service will become high urgency, and responders will be notified using high urgency notification rules, and that notifications will be sent until someone responds. 

This setting is useful for teams who rely on support hours to give their team a rest during off-hours, but want to make sure that any incidents that come in during that time will be dealt with with some urgency by their team once their support hours begin.

Please note that the **Start** and **End** times are for **each** day. If there are two (or more) continuous days selected, then the Start and End times are for each day separately.

## High and Low Urgency Incidents

Urgencies can be configured to notify you based on your notification rules. When both high and low urgency incidents have been triggered, PagerDuty makes it easy to pinpoint which incidents are high urgency and which are low urgency by color coding them and prioritizing them according to their urgency level.

### Web Application
In the PagerDuty Dashboard, incident urgency is indicated in the **Urgency** column. High urgency incidents will be displayed at the top, followed by low urgency incidents. High urgency incidents will also have a lighter background than low urgency incidents. This helps you quickly identify incidents that are most critical.

For example in the screenshot below, incident #4728 was triggered most recently, but because it’s low urgency, it’s displayed below the higher priority incidents.

![](https://files.readme.io/8482f3c-configurable-service-settings-low-urgency-incident.png)

Incidents will maintain this urgency-based order, even after acknowledgment. In the example below, both incidents are acknowledged. The high urgency incident remains at the top of the table, followed by the low urgency incident.

![](https://files.readme.io/19ce742-configurable-service-settings-post-ack.png)

### Mobile App
If you have high and low urgency incidents open, high urgency incidents will be displayed at the top of the queue and low urgency incidents at the bottom.

![](https://files.readme.io/3699d42-open_incidents.png)

After an incident has been acknowledged, the bar to the left side of the incident will change from red to yellow.

High urgency incidents are still displayed at the top of queue, even after low urgency incidents have been acknowledged.

![](https://files.readme.io/b0332d2-open_incidents_ack.png)

## Acknowledgement Timeouts

The purpose of incident acknowledgement (ack) timeouts is to ensure that an incident is not forgotten after it has been acknowledged. This feature is off by default. 

With this feature enabled, an acknowledged incident will return to the **triggered** state after a specified amount of time. When the incident is re-triggered, it re-notifies the user(s) it is currently assigned to in the escalation policy, as well as the current user on-call (if the on-call responsibilities have changed since the ack.) 

### Acknowledgement timeout configuration
You can configure the length of the timeout, or turn it off completely, in the service settings:

1. Go to the **Configuration** menu and select **Services**.

2. Click on the service you wish to edit.

3. Click **Edit Service** in the top right corner of the page.

4. Under **Incident Settings**, check the **Acknowledgement timeout** checkbox to turn it on and select a time from the drop-down list. 

**Note:** If you need to quiet an individual incident for a *different* length of time than the service's incident ack timeout, you can instead [snooze the incident](https://support.pagerduty.com/v1/docs/editing-incidents#section-snooze-an-incident).

## Auto-resolution

If you would like an incident to automatically resolve after a given amount of time, you can set up an auto-resolution for your service. This feature is off by default.

Auto-resolution is recommended for services that are expected to produce a high number of active incidents, or for monitoring systems that send only **Triggers** but not **Resolves** (as with some e-mail-based monitoring systems). 

This feature can be useful when there are a high number of active incidents on a service (such as in a CentralOps/NOC environment), because if an incident is not resolved automatically by the monitoring system or manually by the user, and thus remains open, responders may not be aware of any recurrences of the issue.

With this feature enabled, an incident will automatically resolve after the specified time has passed, and no further notifications will be sent for this incident. Once an incident is resolved, it cannot be re-opened, so if further work is required, a new incident would need to be triggered manually.

Note that **triggered** and **acknowledged** incident states are both used in the timeout counter. **Snoozed** state incidents will reset the timeout counter.

### Auto-resolution configuration
You can configure the amount of time before an incident is automatically resolved, or turn it off completely, in the service settings:

1. Go to the **Configuration** menu and select **Services**.

2. Click on the service you wish to edit.

3. Click **Edit Service** in the top right corner of the page.

4. Under **Incident Settings**, check the **Auto-resolution** checkbox to turn it on, and then select a time from the drop-down list.