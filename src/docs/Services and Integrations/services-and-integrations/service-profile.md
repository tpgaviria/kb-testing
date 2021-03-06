---
title: "Service Profile"
slug: "service-profile"
hidden: false
createdAt: "2019-12-13T17:13:35.191Z"
updatedAt: "2020-05-27T20:35:15.277Z"
---
The service profile provides a high-level view of current context on a service's details. When collaborating across teams, you can see at-a-glance who owns the service, who’s on-call, or how to contact the Team responsible for the service. To access a service’s profile, navigate to **Configuration** :fa-arrow-right: **Services** and click the desired service’s **name**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eab4af2-service-profile-overview.png",
        "service-profile-overview.png",
        2582,
        442,
        "#f0ebec"
      ]
    }
  ]
}
[/block]
#Service Details
##Service Name and Description
The name and description of the PagerDuty service. Managers of a service and Global Admins can edit a service name or description inline by clicking the **Edit** button. For best practices on naming your services, please see our [Service Configuration Guide](https://community.pagerduty.com/t/service-configuration-guide/5110).

##Status
The status is the current state of the service with regards to whether there are any open incidents. 

* **No Open Incidents**: There are currently no open incidents on the service.
* **Awaiting Response**: There are one or more open incidents on the service with a Triggered status that have not been Acknowledged yet. 
* **Response in Progress**: There are one or more open incidents on the service with an **Acknowledged** status.
* **Disabled**: The service is currently disabled and will not trigger any new incidents.
* **Maintenance**: The service is currently in maintenance mode.

Status takes the following precedence: 

**Disabled** :fa-arrow-right: **Maintenance Window** :fa-arrow-right: **Active with/without incidents**.

##On Call Now
The current user(s) on call for the service. This will display the full list of users on call at the *first level* of the escalation policy. If no one is currently on call for the service, this information will be highlighted so that you can easily identify gaps in on-call coverage.

##Team
The [Team](https://support.pagerduty.com/docs/teams) that is associated with this service. If your account does not have the Teams feature available, the escalation policy associated with this service will be displayed instead.

##Communication Channel
The Communication Channel field allows you to configure a link back to your preferred communication channel where the service’s owner and/or Team can best be reached. This may be an email, URL to a Slack channel, or a link to another form of contact. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "The Communication Channel added here is for your Teams’ internal use, and doesn’t impact any webhooks you may have configured."
}
[/block]
#Activity Tab
The Activity tab shows a timeline with current and recent activity for your service. 

##Recent Activity
This section will show you current incidents that have been triggered, maintenance windows, and when your service configuration was last edited. 

You can also take actions on incidents such as: **Acknowledge**, **Resolve**, **[Join Response](https://support.pagerduty.com/docs/add-responders)** or **Subscribe** to updates.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cbe6470-service-profile-recent-activity.png",
        "service-profile-recent-activity.png",
        1618,
        686,
        "#f7f5f6"
      ]
    }
  ]
}
[/block]
##High Priority Incidents
This section shows incidents on the service with the two highest priority levels in your account (e.g. P1, P2 or SEV1, SEV2).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/974605a-high-priority-incidents.png",
        "high-priority-incidents.png",
        1036,
        255,
        "#f4f3f5"
      ]
    }
  ]
}
[/block]
##Suppressed Alerts
If there are [event rules](https://support.pagerduty.com/docs/event-management#section-suppression-and-event-rules) that suppress specific alerts for this service, you can view some of the most recent alerts here. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7339619-service-profile-suppressed-alerts.png",
        "service-profile-suppressed-alerts.png",
        1209,
        563,
        "#f7f8f8"
      ]
    }
  ]
}
[/block]
##Maintenance Windows
If you have maintenance windows on this service, they will be listed here in order of when they are scheduled. 

#Integrations Tab

The Integrations tab includes any integrations and extensions that you connect to and receive PagerDuty alerts from. 

##Integrations
In the Integrations section, you can view and configure inbound integrations to send events to the service. You can also copy an integration key by clicking the clipboard icon next to it:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fcf6d6f-service-profile-copy-integration-key.png",
        "service-profile-copy-integration-key.png",
        1670,
        546,
        "#f6f6f7"
      ]
    }
  ]
}
[/block]
###Add an Integration to a Service

1. Navigate to **Configuration** :fa-arrow-right: **Services** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: select the **Integrations** tab :fa-arrow-right: click **Add a new integration**.
2. Enter an **Integration Name** in the format `monitoring-tool-service-name` (e.g. “Datadog-Shopping-Cart”).
3. There are three integration types:
   a.  **Select a Tool**: [Check to see if we have an existing integration for your service](https://www.pagerduty.com/integrations/). Search for your service by clicking on the dropdown menu next to *Integration Type*.
   b. **Integrate via Email**: If the tool you are integrating with this service can send email, you can [create an integration email address](https://www.pagerduty.com/docs/guides/email-integration-guide/).
c. **Use our API directly**: If the tool you are integrating with this service is able to make HTTP calls, you can trigger, acknowledge, and resolve incidents via our API. Our [developer documentation](https://v2.developer.pagerduty.com/docs) provides several examples.
4. Click **Add Integration**.

###Edit an Existing Integration

To edit an existing integration:

1.  Navigate to **Configuration** :fa-arrow-right: **Services** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: select the **Integrations** tab :fa-arrow-right: click the **Name** of your desired integration :fa-arrow-right: click **Edit Integration**.
2. On the next screen you may edit the **Integration name**, copy or **Generate a new integration key** and select how you would like alerts to be deduplicated in the **Deduplicate on** dropdown. 
3. Click **Save changes**.

###Edit Alert and Incident Settings
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7232deb-service-profile-alert-incident-settings.png",
        "service-profile-alert-incident-settings.png",
        1600,
        175,
        "#fbfbfb"
      ]
    }
  ]
}
[/block]
To edit Alert and Incident Settings:

1. Navigate to **Configuration** :fa-arrow-right: **Services** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: select the **Integrations** tab :fa-arrow-right: click **Edit** next to **Alert and Incident Settings**.
2. Select whether you would like to **Create both alerts and incidents** *or* **Create incidents only**.
3. Click **Save Changes**.

#Response Tab
The Response tab includes settings that help your team respond to incidents. 

##Automate 

Automate incoming alerts and how they are managed with [Event Rules](https://support.pagerduty.com/docs/event-management#section-service-event-rules) and [Alert Grouping](https://support.pagerduty.com/docs/intelligent-alert-grouping).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/43781e6-service-profile-automate.png",
        "service-profile-automate.png",
        1288,
        269,
        "#fafafa"
      ]
    }
  ]
}
[/block]
##Assign and Notify 

Assign and notify your responders when an incident is triggered with custom [escalations](https://support.pagerduty.com/docs/escalation-policies), [notification behaviors, support hours](https://support.pagerduty.com/docs/service-settings#section-enable-urgencies), and actions.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ed4bb3-service-profile-assign-notify.png",
        "service-profile-assign-notify.png",
        1292,
        346,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
To edit these settings, you can click **Edit** and then change the default settings. There are four options to configure how your team is notified for an incident:

* **High-urgency notifications, escalate as needed**: There are currently no open incidents on the service.
* **Low-urgency notifications, do not escalate**: Any incidents triggered with this setting only notify the on-call responder based on the low-urgency notification settings on their profile.
* **Dynamic Notifications based on alert severity**: Notify users about incidents classified as either high or low based on the criticality defined by the integrated monitoring tool.
* **Based on support hours**: There are currently no open incidents on the service.

You can learn more in our [Configurable Service Settings](https://support.pagerduty.com/docs/service-settings#section-high-and-low-urgency-incidents) article. 


##Remediate 

Remediate incidents faster with a link to your team’s runbook for triaging incidents, or a [custom incident action](https://support.pagerduty.com/docs/custom-incident-actions).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d7a57ce-service-profile-remediate.png",
        "service-profile-remediate.png",
        814,
        360,
        "#f7f7f8"
      ]
    }
  ]
}
[/block]
##Co-ordinate Responders and Stakeholders 

Coordinate responders and stakeholders by automatically adding a default conference bridge to incidents on this service and immediately [run a response play](https://support.pagerduty.com/docs/response-automation) to engage stakeholders.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3091d0e-service-profile-coordinate-responders.png",
        "service-profile-coordinate-responders.png",
        810,
        273,
        "#f6f7f8"
      ]
    }
  ]
}
[/block]
#Impact Tab

##Service Dependencies
[block:callout]
{
  "type": "info",
  "title": "Beta",
  "body": "Service Dependencies is currently in Beta and features and documentation are subject to change."
}
[/block]
Service Dependencies can be used to define other technical or business services that your service uses or is used by your service. If an issue arises on your service or one of the dependencies you have configured, you can use the impact tab to quickly assess the scope of the impact. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6ccf9be-service-profile-service-dependencies.png",
        "service-profile-service-dependencies.png",
        1044,
        889,
        "#f3f2f3"
      ]
    }
  ]
}
[/block]
You can expand each technical service to see details such as the associated escalation policy and who is currently on-call. 

At the moment, Service Dependencies can only be configured through the [REST API](https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1service_dependencies~1associate/post).

#FAQ

##What’s the difference between the service profile and the old service configuration page?
1. We’ve replaced the view of all incidents with an Activity Timeline to better highlight the most recent changes and incidents for the service.
2. We have added Suppressed Alerts as well as Maintenance windows so you can see related information that may be impacting a service.
3. We’ve added **Runbooks** and **Communication Channel** metadata to enrich your Service information.
4. We’ve consolidated various configuration settings on a single, user-friendly page with inline editing.
 

##I already have a Slack channel configured for my service, why is it not appearing under Communication channel?
Communication channels are configured separately from Slack extensions for the service. You may have a channel where you’ve configured your PagerDuty notifications to appear, but the Communication channel should be where other teams can best reach out to your team. This may or may not be the same as the channel where your Slack extension is configured.