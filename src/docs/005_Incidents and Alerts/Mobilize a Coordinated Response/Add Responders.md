# Add Responders

---
Adding responders allows you to receive assistance from additional users with an incident response. Typical reasons for adding responders include SEV-1/P1 responses, critical incident responses, and mobilizing teams.  

<!-- theme: info -->

> ### Note
>
> * This feature is available on Team, Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring Add Responders.
>
> * While separate, Add Responders is designed to work well with the features of our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) add-on package. If you would like to use the full suite of PagerDuty Modern Incident Response capabilities along with Add Responders, please [contact our Sales team](https://www.pagerduty.com/contact-sales/).

## Add Responders to an Incident

You can request **individual users** or [**escalation policies**](https://support.pagerduty.com/docs/add-responders#section-escalation-policy-responder-notifications) as responders, with a limit of 300 Responders per incident. The requested users will receive notifications to **accept** or **decline** the request to respond to the incident. 

There are two ways to add responders to incidents:

* [Manually add responders to an ongoing incident](https://support.pagerduty.com/docs/add-responders#section-manually-add-responders-to-an-ongoing-incident)
* [Automatically add responders with response plays](https://support.pagerduty.com/docs/add-responders#section-automatically-add-responders-with-response-plays)

## Manually Add Responders to an Ongoing Incident

A user who can take action on the **open** incident can request responders within the web app and mobile app.

### In the Web App

**On an ongoing, *open* incident**:  
1. In the incident details section of an **open** incident, click the **Add Responders** button.

![](https://files.readme.io/3e9f052-mobilizing-response-add-responders.png)

2. Search and select the **name** of the responder or escalation policy in the **Start typing to search across Escalation Policies and Users** field. You may *optionally* add a message or a conference bridge. Finally, click **Add Responder**.

**When *manually* triggering an incident**: 
1. Click the **+ New Incident** button at the top right within the **Incidents** page or within a **Service** page.
2. In the **Additional Responders to Notify** section, search and select the **name** of the responder or escalation policy. When you have entered all necessary information for the incident, click **Create Incident**.

![](https://files.readme.io/d08e943-add-responders-add-ep-new-incident.png)

### In the Mobile App

**iOS**:
1. Tap the **+** button next to Responders, *or* tap the **More** button and select **Add Responders**. 
2. Next, select the **name** of the responder you would like to add, add an *optional* message, and tap **Notify**.

**Android**:
1. Tap the :fa-ellipsis-v: in the upper right and select **Add Responder**.
2. Next, select the **name** of the responder you would like to add, add an *optional* message, and tap **Notify**.

**Note:** You can add a conference bridge address in the initial request sent to responders.

### Automatically Add Responders With Response Plays

Using Add Responders manually is a flexible way to choose the exact responders needed for a given situation. However, determining which users and escalation policies to include (often by referencing written documentation to see who fits the current incident at hand), and then selecting them one by one, chews up valuable response time and is also error-prone. 

Instead, if you are frequently mobilizing the same set of responders, you can use [response plays](https://support.pagerduty.com/docs/response-automation) to automate and accelerate the mobilization process. A response play lets you configure the users and/or escalation policies to request as additional responders in advance. Then, during an incident, a responder can run the appropriate play by choosing it from their list of available plays.

Response plays can satisfy the following use cases:

* [Add Responders Automatically During an Ongoing Incident](https://support.pagerduty.com/docs/add-responders#section-add-responders-automatically-during-an-ongoing-incident)
* [Add Responders Automatically at Incident Creation](https://support.pagerduty.com/docs/add-responders#section-add-responders-automatically-at-incident-creation)

<!-- theme: info -->

> ### Note
>
> Response Plays are available on our Digital Operations plan and as part of our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) package. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.

#### Add Responders Automatically During an Ongoing Incident

From the PagerDuty mobile app, a play can be run on the incident like this:

![](https://files.readme.io/4b89233-add-responders-mobile-run-play.png)

Running a play from the PagerDuty web app is similarly straightforward:

![](https://files.readme.io/c7b8f33-add-responders-run-add-responders-play.png)

Immediately as the play is run, all of the additional responders identified in the play are notified, and your response team can quickly mobilize.

#### Add Responders Automatically at Incident Creation

Some scenarios require a coordinated response immediately, and ideally, mobilizing a response team happens without requiring human intervention. A few situations like this include:

* When an incident is created from business metric monitoring. e.g. revenue per hour falls below a minimum required value.
* When an incident is created from user-observable failures. e.g. website is determined to be unreachable by customers.
* When a critical incident is created based on triage that has occurred upstream of PagerDuty. e.g. an ITSM tool is in use, and only P1 incidents are synchronized with PagerDuty.

In all of these cases it is beneficial to have the response team [mobilize immediately upon incident creation](https://support.pagerduty.com/docs/response-automation#section-automatically-running-a-response-play-at-incident-creation).

## Responder Notifications

Users will receive notifications that ask them to **accept** or **decline** to join an incident. They can receive up to four notifications total when added as a responder, and only one notification for *each contact method type* (phone, SMS, email, push notification) that has a [**high urgency notification rule**](https://support.pagerduty.com/docs/configuring-a-user-profile#section-notification-rules). If they have more than one of a given contact method type, they will be notified by the one that is used by their **high-urgency notification rules** which has the **lowest notification delay**. 

For example, a user with the high-urgency notification rules below would be notified to join an incident immediately via push and phone call on their Mobile Default phone and at +1 555-555-5555, but *they would not* be notified at their backup contact methods because they are the same contact method types and they are set at a 5 minute notification delay: 

![](https://files.readme.io/4ef8484-add-responders-notification-rules.png)

### Escalation Policy Responder Notifications
If an escalation policy is requested as a responder, it will follow the escalation path of that specific escalation policy until someone **accepts** the request to join the incident. This escalation path is *separate* from the escalation policy on the service where the incident was generated. It is important for responders to **accept** the request to join before taking action on an incident. For example, if a requested responder from an escalation policy acknowledges the incident, but does not **accept** to join the incident, the add responder request will still continue to follow the escalation path and notify other responders until someone joins.

## Status of Responders 

To view the status of **all requested responders** for an incident, head to the incident details section of the particular incident in the web app. On the right-hand side within the incident, there will be a list of responders and icons to indicate whether they have joined, declined, or have yet to respond to your request.

There are 3 possible responder statuses: **Joined** if the requested responder accepted the request, **Declined** if they declined the request, and **Pending** if they have yet to respond. 

![](https://files.readme.io/51257c2-mobilizing-response-responder-statuses.png)

In the timeline of the incident in the web app, you can see when a requested responder accepted or declined the request. 

![](https://files.readme.io/c9dfcd6-mobilzing-response-responder-status-timeline.png)

In the mobile app, additional responders have been requested if you see **Coordinated Response** next to an incident. You can also view if a responder has **joined** or **declined** the request within the timeline of the incident.

In the mobile app, additional responders have been requested if you see **Coordinated Response** next to an incident. You can also view if a responder has **joined** or **declined** the request within the timeline of the incident.

## Other Features to Facilitate Incident Response

Instead of adding responders for additional assistance to the incident at hand, you can: 

* [Communicate with Stakeholders](/docs/communicating-with-stakeholders) which lets you **notify stakeholders** who aren't directly involved with resolving the incident. 
* [Escalating or Delegating an Incident](/docs/reassigning-and-delegating-incidents) which **re-assigns** the incident resolution responsibilities to another user.