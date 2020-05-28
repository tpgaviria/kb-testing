# Common Event Format (PD-CEF)

---
The PagerDuty Common Event Format (PD-CEF) is a standardized alert format that allows us to correlate similar items across integrations and better understand the events from your environment. PD-CEF also allows you to view alert and incident data in a cleaner, more normalized way. You can also use PD-CEF to dynamically suppress non-actionable alerts using [Event Rules](doc:event-management#section-suppression-and-event-rules).

PD-CEF details display at the top of alert and incident detail pages. They express common operations event concepts in a normalized, readable way.

Within the [alerts table](https://support.pagerduty.com/docs/alerts#section-alerts-table), the PD-CEF fields Severity, Summary, Source, Class, Component, and Group can be viewed in relation to your alerts. To customize the fields shown on this page, click the **Customize Columns** button on the right side.

![](https://files.readme.io/036ca6a-pdcef-alerts-table-fields.png)

## PD-CEF Fields

PD-CEF details map to the following fields. The table below outlines the name, type, and description of each value, as well as an example value for each. 


Name | Type | Example Value |Usage
---------|----------|---------|---------
 **Summary** | String | \"PING OK - Packet loss = 0%, RTA = 1.41 ms\"w\n\"Host 'acme-andromeda-sv1-c40 :: 179.21.24.50' is DOWN\"| A high-level, text summary message of the event. Will be used to construct an alert's description.
 **Source** | String | \"prod05.theseus.acme-widgets.com\"\n\n\"171.26.23.22\"\n\n\"aws:elasticache:us-east-1:852511987:cluster/api-stats-prod-003\"\n\n\"9c09acd49a25\"| Specific human-readable unique identifier, such as a hostname, for the system having the problem.
 **Severity** | Enum {Info, Warning, Error, Critical}| Info, Warning, Error, Critical| How impacted the affected system is. Displayed to users in lists and influences the priority of any created incidents.
 **Timestamp**|Timestamp|2015-07-17T08:42:58.315+0000|When the upstream system detected / created the event. This is useful if a system batches or holds events before sending them to PagerDuty.
**Class** |String|\"High CPU\"\n\n\"Latency\"\n\n\"500 Error\"|The class/type of the event.
**Component**|String|\"keepalive\"\n\n\"webping\"\n\n\"mysql\"\n\n\"wqueue\"\n\n\"LOAD_AVERAGE\"|The part or component of the affected system that is broken.
**Group**|String|[\"production-app-stack\"]\n\n\"prod-datapipe\"\n\n\"www\"\n\n\"web_stack\"|A cluster or grouping of sources. For example, sources “prod-datapipe-02” and “prod-datapipe-03” might both be part of “prod-datapipe”
**Custom Details**|Free-form details from the event.|{\"ping time\": \"1500ms\", \"load avg\": 0.75 }|Object

## PD-CEF fields as they appear on an individual alert

![](https://files.readme.io/1b175de-pdcef-fields-in-alert.png)

## Events API v2

The Events API v2 offers an easier way to leverage PD-CEF fields in your alerts. Monitoring partners can now directly send in the PD-CEF format, giving you the benefit of the format without needing to manually convert your events. Custom monitoring can also leverage this format, to take advantage of the new PD-CEF display and workflow features in PagerDuty. 

Review our [developer docs](https://v2.developer.pagerduty.com/docs/events-api-v2) for more information about the Events API v2 and how to use it.

PD-CEF is currently available for the following integrations:

* AWS Cloudwatch
* Azure
* Datadog
* Github
* Hipchat
* Logic Monitor
* Microsoft OMS
* Nagios
* New Relic
* Pingdom
* PRTG
* Sensu
* Slack
* Splunk
* Wormly
* Zabbix