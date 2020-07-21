---
title: "Related Incidents"
slug: "related-incidents-redact"
excerpt: "View active related incidents across all services to gain helpful context during incident triage"
hidden: true
metadata: 
  title: "Related Incidents"
  description: "View active related incidents across all services to gain helpful context during incident triage"
  image: 
    0: "https://files.readme.io/fdefd30-focus-summary.png"
    1: "focus-summary.png"
    2: 2077
    3: 418
    4: "#f9f5f5"
createdAt: "2019-10-21T21:57:24.642Z"
updatedAt: "2020-04-01T00:18:36.108Z"
---
The Related Incidents feature provides incident responders with the suggested 20 most recent related incidents that are impacting other responders and PagerDuty services. This feature uses a completely online and real-time machine learning algorithm to provide these insights, giving responders an at-a-glance-view of the full breadth and scope of incident impact. Related Incidents extends our machine learning capabilities beyond noise reduction, enriching incidents with deep contextual insights to help responders coordinate an effective team response and mitigate business disruption.
[block:callout]
{
  "type": "info",
  "body": "This feature is currently available as part of our [Digital Operations plan](https://www.pagerduty.com/pricing/) or can be purchased via [Event Intelligence](https://support.pagerduty.com/v1/docs/event-intelligence), an add-on to our Platform Team or Platform Business plans. If you would like to sign up for a trial of this and other Event Intelligence features, please [contact our Sales team](https://www.pagerduty.com/contact-us/#contact-sales).",
  "title": "Note"
}
[/block]

#View Related Incidents

To view Related Incidents, click your desired incident’s **Title** to see the incident details page, and then select the **Related Incidents** tab. The Related Incidents tab uses [Event Intelligence](https://support.pagerduty.com/docs/event-intelligence) to display a list of incidents on your PagerDuty account that are potentially related to the incident you are currently investigating. 

Related incidents are determined by three main factors: 

* How close in time the incidents were created.
* How related the alert metadata is.
* Human response behavior: Thumbs up/down and/or merging incidents across services.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/abf6f10-full-cropped.png",
        "full-cropped.png",
        3360,
        2695,
        "#f9f9fa"
      ]
    }
  ]
}
[/block]
The Related Incidents tab includes the following information:

- **# Incidents**: Total count of related incidents.
- **Impacted Services**: List of impacted services.
- **Responders**: List of impacted responders (those currently assigned to related incidents).
- **List of Related Incidents on a Timeline**: You may click on the **Incident Title**, **Assigned To** user or **Service** to view more details. 
- **Thumbs Up/Thumbs Down**: Indicate whether you believe an incident is or isn’t related to the one you are investigating, and give our machine learning model feedback. Feedback is real-time, completely processed online, and it is applied to suggest future related incidents. You can click the numbers below the thumbs up/down to view who voted for each option. **Note**: It takes about 5–10 human inputs to train our algorithm on a new behavior.
- **Why is this suggested?**: View why the incident was suggested as related by clicking on the magic wand link below the Thumbs Up/Thumbs Down. **Note**: Available to users at the beginning of 2020.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c567b01-focus-summary.png",
        "focus-summary.png",
        2077,
        418,
        "#f9f5f5"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5686717-focus-feedback.png",
        "focus-feedback.png",
        2122,
        481,
        "#fbf9f9"
      ]
    }
  ]
}
[/block]
#FAQ

##Related Incidents vs. Past Incidents: What’s the difference?

[Past Incidents](https://support.pagerduty.com/docs/similar-incidents) (previously named Similar Incidents) is a tab that displays *resolved* incidents from the past that were *on the same service* that may be similar to the current triggered incident. Related Incidents uses Event Intelligence to determine  what other *active* incidents *going on in real-time* across *all* services on your account are related, to help you better understand the breadth and scope of impact.

##Why don’t I see any related incidents? 

Here are some common reasons:
* **The incident seems unique**: The algorithm was unable to find another recent incident with metadata related to this one. If it identifies any while this incident is still going on, they will appear in the Related Incidents tab.
* **There isn’t enough data yet**: Your account doesn’t have enough data yet to start finding relationships among incidents. Continue to use PagerDuty normally and related incidents will begin to appear.

##Why do my related incidents appear to have the same title?

The incident title is often determined by the title of the first alert created for a given incident. It is likely that our machine learning algorithm deemed that alerts created close in time and with the same title are related.

##Why am I seeing resolved related incidents?

Responders find it is useful to see recently resolved related incidents to gain additional context during major incident response. For example: who resolved the incident and what actions were taken to resolve it. 

##Why don’t I see incidents that are related on the same service?

This is by design. If you notice a high volume of related or duplicate incidents on a particular service, we recommend enabling [Intelligent Alert Grouping to reduce noise](https://support.pagerduty.com/docs/intelligent-alert-grouping#section-recommended-services) on that service and prevent duplicate incidents from being created. 

##How do I configure Related Incidents?

This feature is available completely out of the box, and will begin working right away with no setup needed.

Please keep in mind that you must have access to the [Event Intelligence](https://support.pagerduty.com/docs/event-intelligence) add-on product, or be on the Digital Operations plan to access this feature.

##How do I improve future Related Incidents results?

Our machine learning algorithm can be influenced by user feedback. The machine learning algorithm looks at human response behavior including thumbs up/down feedback as well as cross-service merges in order to improve future Related Incidents.