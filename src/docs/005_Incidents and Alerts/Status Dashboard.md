# Status Dashboard

---
PagerDuty’s status dashboard provides technical responders, business responders, and leaders a live, shared view of system health to improve awareness of operational issues. It displays the current status of key business services and sends notifications to alert users when business services are impacted. This feature improves communication between response teams and stakeholders during incidents. 

![](https://files.readme.io/9ebb333-status-dashboard-overview.png)

<!-- theme: info -->

> ### Note
>
> * The status dashboard feature is available on Team, Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan including the status dashboard feature.
>
>* While separate, status dashboard is designed to work well with the features of our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) add-on package. If you would like to use the full suite of PagerDuty Modern Incident Response capabilities along with status dashboard, please [contact our Sales team](https://www.pagerduty.com/contact-us/).

## Product Capabilities


<iframe width="560" height="315" src="https://www.youtube.com/embed/MaUmLBgLDBE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Status Dashboard

Designed with business stakeholders in mind, the status dashboard provides an overview of your business services' status, showing you at a glance whether any are being affected by incidents. A business service will appear as disrupted on the status dashboard when there is an open incident on any supporting technical service mapped to it and the incident has a priority assigned. Depending on your business service settings, this incident may need a [priority assigned over a certain level](https://support.pagerduty.com/docs/business-services#section-edit-or-delete-a-business-service). When there are no incidents with priority open on any of the supporting technical services, then the business service will show as operational on the status dashboard.

### Multiple Dashboard Views 

<!-- theme: info -->

> ### Note
>
> Multiple dashboard views is a feature of the [PagerDuty Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) add-on product. Please [contact our Sales team](https://www.pagerduty.com/contact-sales/) for information on adding PagerDuty Modern Incident Response to your subscription.

Admins and Account Owners can create multiple named dashboard views. This allows you to create dashboards for different business units or teams with varying multiple Business Service views. 

To create a new dashboard, click the **All Business Services** dropdown and select **+ New Dashboard**.

![](https://files.readme.io/a22cf61-status-dashboard-new-dashboard.png)

Enter a meaningful **Name**, optionally edit the **Custom URL** and select which **Business Services** you would like to include in this dashboard view. Click **Create Dashboard** to save.

![](https://files.readme.io/b6edcd1-status-dashboard-create-new-dash.png)

### Limited Stakeholder Access Level

The Limited Stakeholder role provides users access to view and subscribe to the status dashboard, view their own user profile, and does not show any other parts of PagerDuty, whether they are using the web UI or the mobile app. This access level is great for teams who don't need to see all of the alerts, schedules, and responder details in your account. 

To set up a Limited Stakeholder user, please visit our [User Roles](https://support.pagerduty.com/docs/user-roles#section-limited-stakeholder-users) article.

## Configure Status Dashboard

<!-- theme: warning -->

> ### Required User Permissions
>
> Admin, Manager, Global Admin and Account Owner base roles.
>
>If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

To configure the status dashboard, you must:

- [Step 1: Create business services](https://support.pagerduty.com/docs/status-communications-closed-beta#section-step-1-create-business-services) 
- [Step 2: Enable incident priority in your account](https://support.pagerduty.com/docs/status-communications-closed-beta#section-step-2-enable-incident-priority-in-your-account)

### Step 1: Create Business Services

Ideally, business services are:

- Recognizable to non-technical stakeholders
- Supported by one or more technical services in PagerDuty
 
You may have business services listed on an external status page, within a service catalog/CMDB, or defined in relation to existing health metrics from a monitoring tool.

1. Go to **Configuration** and select **Business Services**.
2. Click **Create New Business Service**. 
3. Enter a meaningful name that will define the business service and provide a description.
4. Enter the owner as yourself or a point of contact for the business service. *(Optional)*
5. Click **Add Upstream Dependencies** to add any technical services or business services that this service requires in order to be considered operational. For more information, please read our section on [upstream dependencies](https://support.pagerduty.com/docs/business-services#section-upstream-dependencies).
6. Click **Create Business Service** to save. 

<!-- theme: info -->

> ### Note
>
> While it is possible to configure multiple levels of business service dependencies, only the top level business services currently appear on the Status Dashboard. A “top level” business service is a business service that is not listed as an [upstream dependency](https://support.pagerduty.com/docs/business-services#section-upstream-dependencies) for another business service.

### Step 2: Enable Incident Priority in Your Account 

Next, follow the instructions in our section on [enabling incident priority](https://support.pagerduty.com/docs/incident-priority#section-enabling-incident-priority). Only incidents with an assigned priority will appear on your status dashboard. 

### Updating Business Service Status

During an incident, responders can update the status of a business service to indicate its disruption to business stakeholders via the status dashboard.  A business service will appear as disrupted on the status dashboard in two circumstances: 

1. When there is an open incident on any supporting technical service mapped to the business service and the incident has a [priority](https://support.pagerduty.com/docs/incident-priority) assigned. Depending on your business service settings, this incident may need a [priority assigned over a certain level](https://support.pagerduty.com/docs/business-services#section-edit-or-delete-a-business-service). 

2. When an open incident has been manually associated with a business service and the incident has a [priority](https://support.pagerduty.com/docs/incident-priority) assigned. Depending on your business service settings, this incident may need a [priority assigned over a certain level](https://support.pagerduty.com/docs/business-services#section-edit-or-delete-a-business-service). Responders can manually associate an incident with a business service by selecting the appropriate business service under the **Impacted Business Services** dropdown, found in the **Status Updates** tab of **Incident Details**.

![](https://files.readme.io/c5260e2-status-dashboard-impacted-business-services.png)

Incidents that have not been assigned a priority will not appear on the status dashboard, so that it does not become cluttered with operational noise. When the above criteria are not met, the business service will show as operational on the status dashboard.

### Subscribing to Business Services

<!-- theme: info -->

> ### Note
>
> Business service subscription is a feature of the [PagerDuty Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) add-on product. Please [contact our Sales team](https://www.pagerduty.com/contact-sales/) for information on adding PagerDuty Modern Incident Response to your subscription.

Business stakeholders can subscribe to business services they care about to stay informed about those services. Any user who subscribes to a business service will receive a notification whenever a status update is posted to the ***first*** ongoing incident (see note below) impacting that business service. These notifications are sent via email, SMS, or push, depending on the user’s preferences. All status updates also appear on the status dashboard. 

<!-- theme: warning -->

> ### Required User Permissions
>
> This subscription will only send notifications for status updates posted to the ***first*** incident created within the business service that meets the criteria to impact the business service.
>
>All other status updates made to incidents created within the business service during the time of the first incident will not use this subscription method until the original incident and all following incidents are resolved. 
>
>Once the business service has returned to a healthy state, the first incident to impact the business service can begin to use the status update subscriber notifications.

To subscribe to a business service, navigate to the **View My Subscriptions** page via the status dashboard. Select any business services you wish to subscribe to. Notifications will be sent to the first email, SMS, and push notification channels you have set up in PagerDuty.

![](https://files.readme.io/df06938-status-dashboard-view-subscriptions.png)

## FAQ 

### How can I set incident priority automatically?

There are three ways to set incident priority: 

1. [Set priority manually from the web or mobile app](https://support.pagerduty.com/docs/incident-priority).
2. [Set priority via the REST API](https://api-reference.pagerduty.com/#!/Incidents/post_incidents). You can use [this endpoint](https://api-reference.pagerduty.com/#!/Priorities/get_priorities) to get your **priority_id** values. 
3. [Set priority via Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-setting-priority-with-event-rules). You need the [Event Intelligence](doc:event-intelligence) add-on product or a Team, Business or Digital Operations plan to access this feature.
