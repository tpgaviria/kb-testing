# Services and Integrations Basics
---
A service may represent an application, component, or team you wish to open incidents against. When you create services in PagerDuty, they should reflect a service in your infrastructure. You can then add one or multiple [tool integrations](https://www.pagerduty.com/integrations/) to that service in order to receive events from those tools. Follow this process for all of the other services reflected in PagerDuty that leverage the same monitoring tool in your organization. If a tool cannot integrate via the API, you can use an email integration to integrate with any monitoring tool that can send emails (even in-house solutions).

<!-- theme: success -->

> ### Best Practices
>
> When creating new services, we highly recommend reading our [Service Configuration Guide](https://community.pagerduty.com/t/service-configuration-guide/5110), which includes best practices and common use cases.

## Create a New Service

<!-- theme: warning -->

> ### Required User Permissions
>
> User, Admin, Manager, Global Admin or Account Owner roles can create services.
>
>If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

1. Navigate to **Configuration ➡️ Services**. If you are creating a new service, click **Add New Service**. Otherwise, you can skip to [Add integrations to an existing service](https://support.pagerduty.com/docs/services-and-integrations#section-add-integrations-to-an-existing-service).
2. Under General Settings, enter a **Name** that represents the application, component or team that you wish to open incidents against (examples: "MobileApp", "Shopping Cart" or "BizOps"). Please note that when an incident is triggered, this is the service name it will be associated with. 
3. Add a **Description** of what this service represents in your infrastructure. 
4. Then select which **Integration Type** you will be using, and enter an integration name in the format `monitoring-tool-service-name` (e.g. “Datadog-Shopping-Cart”).

There are 4 integration types:

a. **Select a Tool**: [Check to see if we have an existing integration for your service](https://www.pagerduty.com/integrations/). Search for your service by clicking on the dropdown menu next to *Integration Type*.

b. **Integrate via Email**: If the tool you are integrating with this service can send email, you can [create an integration email address](https://www.pagerduty.com/docs/guides/email-integration-guide/).

c. **Use our API directly**: If the tool you are integrating with this service is able to make HTTP calls, you can trigger, acknowledge, and resolve incidents via our API. Our [developer documentation](https://v2.developer.pagerduty.com/docs) provides several examples.

d. **Don't use an integration**: Choose this option if you only wish to manually create incidents.

5. Under **Incident Settings**, select an **Escalation Policy** and **Notification Urgency**.
6. Under **Incident Behavior**, select whether you would like to **Create alerts and incidents** or **Create incidents**.
7. Finally, click **Add Service** to save your new service.

You can also customize your service to include other attributes such as [urgency](https://support.pagerduty.com/docs/service-settings#section-enable-urgencies), [acknowledgment timeouts](/docs/service-settings#section-acknowledgement-timeouts), [auto-resolution](https://support.pagerduty.com/v1/docs/service-settings#section-auto-resolution), [response plays](https://support.pagerduty.com/v1/docs/response-automation#section-automatically-running-a-response-play-at-incident-creation), or [alerts](https://support.pagerduty.com/docs/alerts).

## Edit Existing Service Settings

To edit an existing service's settings:

1. Navigate to **Configuration** ➡️ **Services** ➡️ click the **name** of your desired service ➡️ click the **Edit Service** button on the right hand side.
2. On the next screen, depending on how your service was configured, you will have the option to edit **General Settings**, **Conference Bridge Settings**, **Incident Settings**, **Incident Behavior** and/or **Alert Grouping**. 
3. Once you have edited your preferred settings, click **Save changes**.

### Add Integrations to an Existing Service

You can add more than one integration on a service, which allows you to represent the actual entities you are monitoring, managing, and operating as services in PagerDuty. Entities can be applications, micro-services in an application’s architecture, or cross-cutting shared infrastructure (such as networks, security, etc.,). With integrations consolidated under one service, you will also have proper service-level reporting in our [Analytics](https://support.pagerduty.com/docs/analytics) module.

1. Go to **Configuration ➡️ Services** and select a service to add an integration to. Open the **Integrations** tab and click the **New Integration** button.
2. Select your **Integration Type** (as described in the above section) and name your integration.
3. Click **Save**.

<!-- theme: success -->

> ### Best Practices
>
> For additional tips on how to use multiple integrations to represent your systems, please check out [our best practices article here](https://community.pagerduty.com/t/integrations-using-multiple-integrations-per-service-to-represent-your-systems/446).

For information on how to add extensions to a service, please visit our section on [Extensions](https://support.pagerduty.com/docs/extensions-add-ons#section-extensions).

### Move an Integration to Another Service

You have the ability to move an integration from one service to another if need be. You can move integrations between as many services as needed, as many times as needed and all incidents tied to that integration will follow.

<!-- theme: info -->

> ### Note
>
> Your integration key will *not* change after moving the integration from one service to another.

1. Navigate to **Configuration ➡️ Services**.
2. Click the **name** of the service which contains the integration you would like to move.
3. Go to the **Integrations** tab on the service's page. Then click the settings gear next to the integration to select **Move to Another Service**. You have the option rename the integration before or after moving it.

![](https://files.readme.io/e09aeb6-services-integrations-move-to-another-service.png)

<!-- theme: info -->

> ### Note
>
> If the settings on the service you are moving an integration to differ from the current service, you'll receive a warning message with the option to proceed or cancel.

4. Select the **Destination Service** where you would like the Integration to move to, and click **Move Integration**.

### Delete an Integration From a Service

If an integration is no longer needed, it can be deleted. A deleted integration cannot be recovered. You will need to create a new integration of the same type on the service should you wish to use that integration again.

1. Find the integration to delete by navigating to **Configuration** ➡️ **Services** ➡️ **Integrations** tab.
2. Click the gear icon for the integration and select **Delete**.

<!-- theme: info -->

> ### Note
>
> * If you'd like to temporarily deactivate an integration instead, you can either place the service in maintenance mode, or temporarily move the integration to an inactive service.
> * When an integration is deleted, we do not remove the incidents. There are no changes to the open or resolved incidents.

## Disabling and Re-Enabling Services

Disabling a service is a good choice in the following cases:

- A service is no longer in use and you want to preserve its settings for future use.
- Preventing incidents from triggering.

Disabling a service is very similar to [putting a service in maintenance mode](/docs/maintenance-windows). New incidents will not trigger while a service is in either of these states.

The main difference is that a maintenance window will eventually end and bring a service back online. A disabled service must be manually re-enabled. 

### Disable a Service

1. Navigate to the **Configuration** menu and select **Services**.
2. Click on the **name** of the service you would like to disable.
3. Click **Disable Service** on the right-hand side of the page and then click **Disable** on the confirmation dialog.

![](https://files.readme.io/5ab89d4-services-integrations-basics-disable-service.png)

### Re-Enable a Service

1. Navigate to the **Configuration** menu and select **Services**.
2. Click on the **name** of the service you would like to enable.
3. Clickthe **Enable Service** button, and your service will be re-enabled.

![](https://files.readme.io/ea9e409-services-integrations-basics-enable-service.png)

## Create a Generic Events API Integration

If there is not an out-of-the-box integration for your tool, you can create an Events API integration for as long as your system can make outbound HTTP calls.

<!-- theme: warning -->

> ### Required User Permissions
>
> Manager**, Admin, Global Admin or Account Owner roles can add integrations. 
>
>**Permissions for adding integrations may vary. Please check for notes on requirements in the intro of the Integration Guide.
>
>If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

To add a generic integration:

1. Navigate to **Configuration ➡️ Services**.
2. If you are creating a new service for your integration, click **Add New Service**. If you are adding your integration to an existing service, click the **name** of the service you want to add the integration to, go to the **Integrations** tab, then click **New Integration**.
3. Select **Use our API Directly** from the Integration Type menu, select whether you would like to use **Events API  v1 or v2** (if selecting V2, please see our section below for more details), and enter an **Integration Name**. If you are creating a new service for your integration, under General Settings, enter a **Name** for your new service. Under **Incident Settings**, select an **Escalation Policy**, **Notification Urgency**, and **Incident Behavior**.
4. Click **Add Service/Integration** and an integration key will be generated. You'll find this key on the **Integrations** tab. Use this key in your monitoring tool to send events to PagerDuty, which create incidents on your service.

![](https://files.readme.io/b5433e1-services-integrations-integration-key.png)

### Events API v2
The Events API allows monitoring tools to directly send events in the [PD-CEF](/docs/formatting-incidents#section-pagerduty-common-event-format-pd-cef) format. If you are using custom monitoring, you can also use this format to take advantage of PD-CEF's display and workflow features.

You'll be prompted to choose Events API v1 or v2 when you select **Use our API directly** from the **Integration Type** menu.

![](https://files.readme.io/e35d261-services-integrations-events-api.png)

You must have **Create alerts and incidents** enabled to use Events API v2. This setting is under **Incident Behavior** at the bottom of your service configuration screen. When an Events API v2 integration type is selected the **Create incidents** option will be grayed out.

### Should I use Events API v1 or v2?
Events API v2 is designed to handle machine-generated monitoring and event data, such as infrastructure monitoring (Nagios, SignalFX, Datadog), application performance monitoring (New Relic, AppDynamics), and external site checks (Pingdom, Wormly). PD-CEF events generate alerts in PagerDuty, which can then be grouped together under PagerDuty incidents.

For human-generated events, tickets, or incidents, such as those from ServiceNow or JIRA, we suggest using the Events API v2, which enables direct, streamlined creation of PagerDuty incidents.

If you are using a custom monitoring tool, library, or script that has not yet been updated to v2, you should select [Events API v1](https://v2.developer.pagerduty.com/docs/events-api).

## Create a Vendor Specific Service via API

The easiest way to create a service and integration is in the PagerDuty web UI, however, you can create a service with a vendor-specific integration (i.e. AWS CloudWatch) via the [REST API](doc:using-the-api).

You'll need to know the vendor details, which are not shown in the web UI, but can be obtained via the [Vendors API](https://api-reference.pagerduty.com/#!/Vendors/get_vendors). Afterward, you can create a [new service](https://api-reference.pagerduty.com/#!/Services/post_services) or [new integration](https://api-reference.pagerduty.com/#!/Services/post_services_id_integrations) with the details you received from the Vendors API.