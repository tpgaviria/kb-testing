# Intelligent Alert Grouping

---
<!-- theme: info -->

> ### Note
>
> This feature is now currently available as part of the [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence) package or on Digital Operations plans. If you would like to sign up for a trial of Intelligent Alert Grouping and other Event Intelligence features, please [contact our Sales team](https://www.pagerduty.com/contact-us/#contact-sales).

## Overview

When enabled on a service, Intelligent Alert Grouping will automatically add incoming alerts to related open incidents on that service to help keep responders focused on the problem at hand. Once Intelligent Alert Grouping has been enabled on a service, the first new incoming alert will create a new incident. The underlying algorithm will then determine which, if any, subsequent alerts should be grouped into existing incidents.  Once an incident is closed, no new alerts will be added to it. 

The Intelligent Alert Grouping algorithm includes a real-time, machine-learning-based model that is designed to quickly and accurately process and cluster machine-generated data on each service. The algorithm will adapt over time to understand new types of alerts and react to human response behavior. 

## How to Tell When an Incident is Grouping Alerts

When enabled, you can see Intelligent Alert Grouping actively grouping alerts on the details page of a specific incident. Grouped alerts will appear under the Alerts tab.

The alert grouping labels notify you that the incident is using alert grouping. This could mean either Time-Based Alert Grouping or Intelligent Alert Grouping. In this case, the alert grouping details indicate that this incident is adding alerts via Intelligent Alert Grouping. Beneath the incident title, you can also see the number of grouped alerts, as well as the time the most recent alert was added. 

![](https://files.readme.io/512a9ba-alert_grouping_indicators.png)

![](https://files.readme.io/1eea35e-Alert_grouping_details.png)

## Getting Started

### Recommended Services

Intelligent alert grouping is recommended on eligible services, indicated on the service details page, under the alert grouping tab. Intelligent alert grouping does not group alerts from different services together. 

To be recommended for intelligent alert grouping, a service must have alerts and incidents enabled. 

You can find whether a service is recommended or not on the service details page, under the alert grouping tab. If the service is configured to only create incidents, the Intelligent Alert Grouping option will be not be available. You can edit your service on the service configuration page to enable alerts and incidents. Please note that some integrations do not currently support alerts and incidents - you can read more about this [here](https://support.pagerduty.com/docs/alerts#section-bi-directional-integration-limitations). 

![](https://files.readme.io/072b3be-IAG_tab_screenshot.png)

### Influencing the Algorithm

The Intelligent Alert Grouping algorithm is built to observe real alert data and incident history and adapt as new alerts are seen on the service. No explicit configuration is necessary, other than selecting the Intelligent Alert Grouping option. 

The best way for the algorithm to learn and adapt to new grouping behaviors is to manually merge incidents that are related, and to manually move alerts out of incidents when they are not related. For steps on how to merge incidents and move alerts, see [this Knowledge Base article](https://support.pagerduty.com/docs/editing-incidents#section-how-to-merge-incidents).

The algorithm interprets and adjusts to new alert data or behavior on a service quickly. We strongly recommend **against** sending in test data to try and influence the algorithm, as this can result in unpredictable behavior.

## Options

### Intelligently based on the alert content and human response behavior
The machine learning model intelligently adds alerts to existing, open incidents and adapts as you and your team use PagerDuty, learning from user behavior such as manually merging incidents together.

### For the following duration (time-based)
Groups all alerts for the specified time period while the incident is open. For more information, check out our article on [Time-Based Alert Grouping](https://support.pagerduty.com/docs/time-based-alert-grouping).

### Do not group alerts automatically on this service
Default behavior. Alerts will not be automatically grouped. Inbound events will respect any dedupe keys sent in through the API.

![](https://files.readme.io/5c050d6-Screen_Shot_2018-03-23_at_11.10.22_AM.png)

## How Does Intelligent Alert Grouping Decide Which Alerts to Group?

The Intelligent Alert Grouping algorithm is designed to make conservative and reasonable alert groupings based on merge behavior and alert textual similarity on a service. The algorithm reacts to feedback from you and your team. For example, if you manually merge incidents together, the algorithm will learn to group those types of alerts together in the future. If you find an incident has a group of alerts that does not match your expectations, you can manually move the alert to a new incident or into other another existing incident. 

For a walkthrough of how to manually merge alerts together, check out
[this Knowledge Base article](https://support.pagerduty.com/docs/editing-incidents#section-how-to-merge-incidents).

![](https://files.readme.io/90aa65a-manually_merge.png)

![](https://files.readme.io/d65fb31-Move_alert_new_incident.png)

### How Intelligent Alert Grouping Works 

Intelligent Alert Grouping uses a machine-learning-based algorithm that leverages both the alert data coming in to the system and the way human responders interact with the resulting incidents. This algorithm evaluates when the alerts were created, the content of the alerts and how responders merge incidents and move alerts out of incidents. When not enough alerts have been grouped, we do our best to assume how alerts should be grouped based on textual similarity.

The data model is designed to react to real data that is created in real time. Test data tends to look and behave differently from real data, which is why we recommend **against** feeding your service with test data to influence the algorithm. The best way to provide feedback to the algorithm is to use PagerDuty to respond to real incidents with real people responding to those incidents.

## FAQ

### Can we expose the machine learning-based model via the API?
No, not at this time.

### Can I still manually merge incidents? 
Yes. Doing so will train the machine learning model to improve alert grouping for future incidents. 

### Can we plug our own machine learning code into PagerDuty?
No, not at this time.

### Does this take into account some of the rules or correlations we have configured outside of PagerDuty?
No, this model is entirely based on actions taken within PagerDuty.

### Does it affect the machine learning capabilities if I rename the service?
No, it does not. 

### What user role is this setting available to?
Once Event Intelligence is enabled on the account, the setting is available to anyone who can edit a service.

### Can Intelligent Alert Grouping group alerts together from multiple services?
Not at the moment. Intelligent Alert Grouping only looks at alerts from a single service. If you want alerts from different services to be grouped, you may need to reconfigure your service so that all related alerts are sent to the same service. For best practices, please see our [Service Configuration Guide](https://community.pagerduty.com/t/service-configuration-guide/5110). 

### Why didn’t my alerts get grouped together?
There are three main reasons the Intelligent Alert Grouping algorithm did not group alerts that were on the same service:
1. The alerts weren’t close together in time.
2. The incoming alert data was not similar enough to desired alerts or was more similar to the alerts it was grouped with.
3. Human response behavior via merging or moving alerts out of incidents overrode the desired behavior.

The Intelligent Alert Grouping algorithm takes into consideration several different factors, which makes understanding why alerts are grouped or not difficult to trace. If you believe that there has been enough history for an alert to be grouped, but are still noticing some unexpected grouping behavior, please reach out to [our Support team](mailto:support@pagerduty.com) and send links to specific incidents/alert groupings and summarize why the grouping behavior is unexpected.

### Why don’t I see any alert grouping options on the Alert Grouping tab?
There could be a few reasons why you don’t see any options for alert grouping on this page
* **If you see only one option for no automatic grouping:** 
Your current pricing plan does not support any alert grouping options. If you are interested in trying alert grouping on any of your services, [contact our Sales team](https://www.pagerduty.com/contact-us/#contact-sales) to start a free trial for Event Intelligence
* **If you see a message that the service is configured to incidents only:** 
This means that your service is able to create alerts, but it is not yet configured to do so. See [Enabling Alerts](https://support.pagerduty.com/docs/alerts#section-enabling-alerts) for steps on how to change your service settings.
* **If you see a message that the service has integrations that do not support alerts:** 
Some monitoring tools do not support creating alerts, and therefore any services with these tools integrated will not be able to take advantage of some advanced features such as alert grouping and event rules. To enable alerts on a service, you need to remove the integration that does not support alerts. For a list of integrations that do not support alerts please see [this article](https://support.pagerduty.com/docs/alerts#section-bi-directional-integration-limitations).

### Is there a limit to how many alerts can group into a single incident?

Yes - incidents are limited to 1000 alerts each. After this limit is reached, a new incident will be created and subsequent alerts will continue grouping under the new incident.