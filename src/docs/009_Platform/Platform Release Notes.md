---
title: "Platform Release Notes"
excerpt: ""
---
#August 2019

**New Features**

*Aug. 8 — [Email Domain Restriction](https://support.pagerduty.com/docs/configuring-a-user-profile#section-email-domain-restriction)*

Admins and Account Owners can now choose to restrict users to only use domains that are in the Email Domain Allow List when they change (or create) their login or contact email addresses. The restriction applies to users when updating future email addresses; existing email addresses will continue to function.

*Aug. 1 — [Operational Reviews: Scorecard Search](https://support.pagerduty.com/docs/operational-reviews#section-scorecard-search)*

Each list of Team On-Call Handoff, Service Performance and Business Performance review scorecards has a search capability. For users who have many scorecards in their list, the search allows them to find specific scorecards quickly.

*Aug. 23 — [Operational Reviews: Scorecard Subscribe/Unsubscribe](https://support.pagerduty.com/docs/operational-reviews#section-subscribe-or-unsubscribe-from-a-scorecard)*

By default, users see scorecards only for the teams they are on. With subscribe/unsubscribe, users can find scorecards for teams they care about but aren't members of, and allows them to hide scorecards they don't want to see anymore.

**Improvements**

*Aug. 30 — [Contextual Search - API Endpoints](https://api-reference.pagerduty.com/#!/Contextual_Search/get_tags)*

New API to manage, assign, and list Tags. A tag can be assigned to Escalation Policy, Team or User, and searches for those objects can be filtered to retrieve those with specific tags.

#July 2019

**New Features**

*Jul. 25 — [Status Dashboard](https://support.pagerduty.com/docs/status-dashboard)*

PagerDuty’s status dashboard provides technical responders, business responders, and leaders a live, shared view of system health to improve awareness of operational issues. It displays the current status of key business services and sends notifications to alert users when business services are impacted. This feature improves communication between response teams and stakeholders during incidents.

**Integrations**

*Jul. 16 — [Amazon EventBridge](https://support.pagerduty.com/docs/amazon-eventbridge-integration-guide)*

With Amazon EventBridge, PagerDuty customers are able to leverage the full breadth of AWS-supported integrations and functionality. When a PagerDuty incident is created or updated, an event or webhook can be sent to notify a designated Event Source in your AWS Account and Region. One can create an Event Bus to retrieve these notifications and deliver them to an AWS target such as Lambda to run a specific function, workflow, SNS topic for another notification delivery, etc.

*Jul. 10 — [ServiceNow: v6 Update](https://support.pagerduty.com/docs/servicenow-integration-guide)*

Teams are now able to [drive a coordinated response](https://support.pagerduty.com/docs/mobilize-a-coordinated-response), [add multiple responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders) and [add conference bridge](https://support.pagerduty.com/docs/conference-bridge) information to an incident from the ServiceNow interface. Admins and Account Owners can configure how different [priorities](https://support.pagerduty.com/docs/incident-priorityhttps://support.pagerduty.com/docs/incident-priority) should notify responders by mapping a Priority level to a PagerDuty Urgency level (Example: P1 incidents can call responders and P3 incidents can email). They can also customize data sent from ServiceNow to PagerDuty when creating an incident, and easily add Assignment Groups or Users.

#June 2019

**New Features**

*Jun. 22 — [One Touch to Join Conference Bridge](https://support.pagerduty.com/docs/conference-bridge#section-one-touch-to-join-conference-bridge)*

The One Touch To Join Conference Bridge feature enables rapid response team assembly by giving responders a push-button means of joining a conference bridge. This feature relies on two existing [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) features: [Conference Bridge](https://support.pagerduty.com/docs/response-bridge#section-service-level-response-bridge) and [Add Responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders). 

**Improvements**

*Jun. 28 — [PagerDuty Analytics: Scorecard Search](https://support.pagerduty.com/docs/operational-reviews)*

A new search capability for the list of Team On-Call Handoff, Service Performance and Business Performance review scorecards. For users who have many scorecards in their list, the search allows them to find specific scorecards quickly.

**Integrations**

*Jun. 19 — [AWS Security Hub](https://support.pagerduty.com/docs/aws-security-hub-integration-guide-pagerduty)*
The AWS Security Hub integration allows you to send AWS Security Hub Findings to PagerDuty and use the PagerDuty platform to manage, organize, and respond to events relevant to your organization.

#May 2019

**New Features**

*May 8 — [Contextual Search - Tagging](https://support.pagerduty.com/docs/contextual-search)*

Managers, Admins, Global Admins and Account Owners can now add tags to the following PagerDuty objects: Teams, Escalation Policies and Users. Adding this simple metadata provides extra context to help Responders and Managers organize and navigate to desired objects and easily reassign incidents.

**Improvements**

*May 31 — [Manage Your User Sessions - API Endpoints](https://api-reference.pagerduty.com/#!/Users/delete_users_id_sessions)*

New API endpoints to retrieve and delete user sessions. These can be used as part of an offboarding flow to ensure users are securely removed from all of their PagerDuty sessions.

#April 2019

**Integrations**

*Apr. 14 — [Cherwell Integration](https://www.pagerduty.com/docs/guides/cherwell-integration-guide/)*
The bi-directional Cherwell ITSM integration allows for advanced notification when incident tickets are created. 

#March 2019

**New Features**

*Mar. 1 — [Subscribe to Business Service Notifications](https://support.pagerduty.com/docs/business-services#section-creating-business-services)*
Users with [Visibility](https://support.pagerduty.com/docs/pagerduty-visibility) and [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) can now subscribe to be proactively notified about business service disruptions and responder updates via [response plays](https://support.pagerduty.com/docs/response-automation). 

#February 2019

**New Features**

*Feb. 7 — [Event Intelligence: Preview Intelligent Alert Grouping](https://support.pagerduty.com/docs/preview-intelligent-alert-grouping)*
Service owners can now preview potential noise reduction and grouping behavior before activating [Intelligent Alert Grouping](https://support.pagerduty.com/docs/event-intelligence#section-intelligent-alert-grouping). 

**Improvements**

*Feb. 15 — [Stakeholder Notifications for Business Services](https://support.pagerduty.com/docs/business-services)*

Business stakeholders can be automatically notified when a business service goes from healthy to disrupted by connecting a [response play](https://support.pagerduty.com/docs/response-automation) to a [business service](https://support.pagerduty.com/docs/business-services). This feature is only available with the [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) package.

#January 2019

**New Features**

*Jan. 31 — [PagerDuty Analytics: Operational Reviews](https://support.pagerduty.com/docs/operational-reviews)*

The Operational Reviews feature offers metrics for three different types of reviews, targeted at different levels of leadership in a digital business. The Business Outcomes, Service Performance and Team On-Call Handoff reviews contain scorecards intended to drive meetings and provide insight into the business impact of real-time operations. 

**Improvements**

*Jan. 30 — [Recurring Event Rules](https://support.pagerduty.com/docs/global-event-rules#section-recurring-event-rules)*

Recurring Event Rules allow Admins to set events to follow particular rules during specific hours of the day or day(s) within a week on an automatic, weekly recurring schedule. This feature is integration-specific and one can make additional changes, such as changing severity/priority, based on time of day. 

#December 2018

**Improvements**

*Dec. 1 — [Intelligent Alert Grouping Update](https://support.pagerduty.com/docs/intelligent-alert-grouping): Grouping Frequency*
Alerts that are new to a service and are seen in a short time period will be grouped together more frequently. This will reduce noise and responder alert fatigue.

#November 2018

**Improvements**

*Nov. 15 — [Mobile Scheduling](https://support.pagerduty.com/docs/using-mobile-schedules)*

With this improvement responders can:

- See up to two weeks of a schedule at a time
- Look ahead and back in schedules to see who will be and who was on call
- Easily book overrides

*Nov. 1 — [Events API Update: Rate Limit Increase](https://support.pagerduty.com/docs/apis)*
The Events API rate limit has been increased to 120 events/min for Starter, Team, and Business plans. Customer who require a higher rate limit for Global Event Rules may submit a request to be approved on a case-by-case basis. This increase can help facilitates the management of even higher volumes of operational data from noisier tools.

**Integrations**

*Nov. 26 — [PagerDuty + AWS CloudTrail Integration](https://support.pagerduty.com/docs/aws-cloudtrail-integration-guide)*
New native integration with AWS CloudTrail. Customers can route CloudTrail events to PagerDuty for real-time response.

*Nov. 26 — [PagerDuty + Amazon CloudWatch Integration Update](https://support.pagerduty.com/docs/aws-cloudwatch-integration-guide)*
Updates to our existing Amazon CloudWatch integration. We now support CloudWatch Events and Alarms. This update also enables customers to use CloudWatch with Global Event Rules.

*Nov. 26 — [PagerDuty + AWS Personal Health Dashboard Integration](https://support.pagerduty.com/docs/aws-personal-health-dashboard)*
New native integration with AWS Personal Health Dashboard. Customers can route Personal Health Dashboard events to PagerDuty for real-time response.

*Nov. 26 — [PagerDuty + Amazon GuardDuty Integration](https://support.pagerduty.com/docs/aws-guardduty-integration-guide)*
New native integration with Amazon GuardDuty. Customers can notify the right people about critical security issues for real-time response. 

#October 2018

**Improvements**

*Oct. 1 — [Global Event Rules Update: API](https://v2.developer.pagerduty.com/docs/global-event-rules-api)*
An API designed to help admins and developers automate the management of their Global Event Rules.

**Integrations**

*Oct. 1 — [Pivotal Cloud Foundry Integration](https://www.pagerduty.com/docs/guides/pivotal-cloud-foundry-integration-guide/)*
The Pivotal integration allows development teams to quickly onboard with a basic setup of critical PagerDuty components. 

*Oct. 1 — [Microsoft SCOM Integration](https://www.pagerduty.com/docs/guides/scom-integration-guide-2016/)*
The Microsoft SCOM integration allows customers to route infrastructure monitoring events to PagerDuty for real-time response.

#September 2018

**New Features**

*Sep. 12 — [PagerDuty Visibility](https://support.pagerduty.com/docs/pagerduty-visibility)*
PagerDuty Visibility is a new product that provides technical and business responders with a shared understanding of major incident scope and impact. This facilitates organization-wide response without technical and business responders interrupting each other for details.

*Sep. 12 — [PagerDuty Visibility: Business Services](https://support.pagerduty.com/docs/business-services)*
Business Services is a key feature of PagerDuty Visibility. It provides a way to model capabilities that span multiple technical services and may be owned by several different teams. This provides business users with customer-impact context even if they lack full understanding of the function and scope of all technical services.

*Sep. 12 — [PagerDuty Visibility: Business Impact Metrics](https://support.pagerduty.com/docs/impact-metrics)*
Impact Metrics is a key feature of PagerDuty Visibility. It allows you to quantify the impact of incidents on your business services in real time. By placing existing business impact metrics in context of major incidents, business stakeholders can have a fully automated, live view of the impact at any time.

**Improvements**

*Sep. 25 — [Event Rules Update: Rule Disablement](https://support.pagerduty.com/docs/global-event-rules#section-disable-event-rules)*
To pause an event rule’s activity, one can disable and re-enable it at a later time. This feature allows you to manually initiate integration-specific disablement during maintenance or testing on a tool.

**Integrations**

*Sep. 4 — [PagerDuty + Atlassian Bitbucket Integration](https://support.pagerduty.com/v1/docs/bitbucket)*
New integration with Atlassian Bitbucket. After a change is committed to a Bitbucket repository, failures in the pipeline can be routed to PagerDuty so they can be actioned in real time.

*Sep. 4 — [PagerDuty + Atlassian Jira Cloud Integration Update](https://support.pagerduty.com/v1/docs/jira-cloud):*
Updates to our existing bidirectional Jira Cloud integration.

- Bidirectional status sync
- Bidirectional note sync between PagerDuty and Jira
- Bidirectional priority sync
- Ability to have PagerDuty populate fields in Jira (such as mandatory or custom fields)
- Ability to automatically or manually create a Jira issue from PagerDuty
- Updated sidebar widget in Jira

*Sep. 4 — [PagerDuty + Atlassian Jira Server Integration Update](https://support.pagerduty.com/v1/docs/jira-server):*
Updates to our existing bidirectional Jira Server integration.

- Bidirectional status sync
- Bidirectional note sync between PagerDuty and Jira
- Bidirectional priority sync
- Ability to have PagerDuty populate fields in Jira (such as mandatory or custom fields)
- Ability to automatically or manually create a Jira issue from PagerDuty
- Updated sidebar widget in Jira.

*Sep. 12 — [Jira Service Desk Integration](https://support.pagerduty.com/docs/jira-server)*
Provides Jira Service Desk users with the ability to engage on-calls via PagerDuty. Tickets in Jira Service Desk can be escalated to the on-call either automatically (by configurable criteria) or manually (on button press). Integration is bidirectional, and syncs status, priority, and notes.

#August 2018

**Improvements**

*Aug. 1 — [Modern Incident Response Update: APIs](https://www.pagerduty.com/features/modern-incident-response/)*
Enables advanced API-based automation of incident response, including [mobilizing multiple responders for an incident](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents/post_incidents_id_responder_requests), sending [status updates](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents/post_incidents_id_status_updates), and [running response plays](https://v2.developer.pagerduty.com/v2/page/api-reference#!/Response_Plays/post_response_plays_response_play_id_run).

#June 2018

**New Features**

*Jun. 7 — [Event Intelligence Product Launch](https://www.pagerduty.com/features/event-intelligence-and-automation/)*
PagerDuty Event Intelligence is a new product that looks at both digital signals and human response behavior to optimize digital operations.
Using Event Intelligence, teams can automate common manual workflows, significantly reduce operational noise, and access rich context during incident triage to speed up response.

*Jun. 7 — Event Intelligence: [Threshold Alerts](https://support.pagerduty.com/docs/event-intelligence#section-threshold-alerts)*
Threshold Alerts are a key feature of the Event Intelligence package. They allow customers to receive PagerDuty notifications only when their customized alert conditions breach specified limits, enabling, responders to effectively reduce alert noise without missing critical issues.

*Jun. 7 — Event Intelligence: [Scheduled Rules](https://support.pagerduty.com/docs/event-intelligence#section-scheduled-rules)*
Schedule Rules are a key feature of the Event Intelligence package. Customers can gain a greater degree of control over their event rules by detailing specific times in the future in which they will be active. This is particularly helpful during rules testing and planned maintenance.

*Jun. 7 — [Event Intelligence: Event Rules](https://support.pagerduty.com/v1/docs/global-event-rules)*
Event Rules is a feature release for the Event Intelligence package. Event Rules allow you to define which team receives alerts based on content in those events. 

**Improvements**

*Jun. 28 — [Response Plays Update](https://support.pagerduty.com/docs/response-automation): [Response Bridge](https://support.pagerduty.com/docs/response-bridge)*
Users can now set a Response Bridge on an incident as part of response plays, allowing responders to use their preferred web conferencing provider for coordination.

*Jun. 12 — [Incident Timeline Update](https://support.pagerduty.com/docs/incidents#section-incident-lifecycle): Escalations Itemization During [Response Mobilization](https://support.pagerduty.com/docs/mobilizing-a-response)*
All escalations during response mobilization will now be itemized in the incident timeline. This facilitates the acceleration of incident response by allowing the right people to focus on resolution. Additionally, this information can be easily included in postmortems.

**Integrations**

*Jun. 1 — Integration Updates: Migration From API v1 to API v2 Endpoints*
Updates have been made to the following integrations using v1 APIs, and API endpoints have been migrated to v2 APIs:

- [CA UIM](https://www.pagerduty.com/docs/guides/ca-uim-integration-guide/)
- [Zenoss](https://www.pagerduty.com/integrations/zenoss/)
- [Ansible](https://www.pagerduty.com/docs/guides/ansible-integration-guide/)
- [Hubot](https://www.pagerduty.com/docs/guides/hubot-integration-guide/)
- [Zapier](https://www.pagerduty.com/integrations/zapier/)

Customers using an older version should update their integration to the latest version on our [website](https://v2.developer.pagerduty.com/docs/migrating-to-api-v2).

#May 2018

**New Features**

*May 1 — [Live Call Routing Updates: Customization and Transcription](https://support.pagerduty.com/docs/live-call-routing)*

- Ability to customize ring duration before a call escalates to the next responder
- Ability to customize the auto attendant greeting
- Transcription is available with premium Live Call Routing pricing on Team, Business, and Digital Operations plans. Please [contact our Sales team](https://www.pagerduty.com/contact-sales/) if you are interested in this feature

**Integrations**

*May 7 — [PagerDuty + Microsoft Azure Integration Update](https://www.pagerduty.com/docs/guides/azure-integration-guide/)*
Update to our existing Microsoft Azure integration. Support for the new Metric alert format with automatic syncing of PagerDuty incidents and Microsoft Azure Metric Alerts.


*May 7 — [PagerDuty + Microsoft VSTS Integration Update](https://www.pagerduty.com/docs/guides/visual-studio-team-services-integration-guide/)*
Update to our existing Microsoft VSTS integration. Automatic syncing of PagerDuty incidents with Microsoft Visual Studio Team Services Work Items.

#April 2018

**Integrations**

*Apr. 17 — [PagerDuty + Atlassian Stride](https://www.pagerduty.com/docs/guides/stride-extension-guide/)*
The Atlassian Stride extension allows you to be notified of PagerDuty incidents and acknowledge or resolve them straight from the Stride UI.

#September 2017

**New Features**

*Sep. 28 — API Updates: v2 [Webhooks](https://support.pagerduty.com/docs/webhooks) and [Extensions](https://support.pagerduty.com/docs/extensions-add-ons#section-extensions)*
- V2 webhooks
- Extensions API endpoint: Add extensions (like webhooks, etc.) to a service over the API
- New Notes webhook type: receive a webhook whenever a note is added to an incident
