---
title: "Content Based Alert Grouping"
slug: "content-based-alert-grouping"
hidden: true
createdAt: "2020-07-08T23:56:42.721Z"
updatedAt: "2020-07-08T23:57:38.791Z"
---
Content Based Alert Grouping (currently in beta) is a feature that allows service administrators to configure grouping based on their preferred, user-defined field. Accounts working with predictable, homogenous alert data can now customize how alerts are grouped without having to train the algorithm on their specific data. Similar to other alert grouping mechanisms, Content Based Alert Grouping will only group alerts on the same service.
[block:callout]
{
  "type": "info",
  "title": "Beta",
  "body": "Content Based Alert Grouping is currently in beta. Since this feature is not ready for general availability, it is not warranted and should not be relied upon. Any feedback provided to your Customer Success Manager or our [Support Team](https://www.pagerduty.com/contact-us/) may be used as we choose, and the feature along with this documentation is subject to change."
}
[/block]
# Configure Content Based Alert Grouping
[block:callout]
{
  "type": "warning",
  "body": "User, Admin, Manager, Global Admin or Account Owner roles can configure Content Based Alert Grouping.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).",
  "title": "Required User Permissions"
}
[/block]
**Important Notes**:

* Grouping can only be set up to one [Common Event Format (PD-CEF)](https://support.pagerduty.com/docs/pd-cef) field.
* Content Based Alert Grouping requires data to be formatted in PD-CEF.
* Alerts will only be grouped on exact matches for the entire selected field.

1. Select **Configuration** :fa-arrow-right: **Services** and click the **name** of the service where you would like to use Content Based Alert Grouping.
2. Select the **Response** tab and click **Edit** under the **Alert Grouping** section.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9b9d6f0-content-based-alert-grouping-edit.png",
        "content-based-alert-grouping-edit.png",
        775,
        293,
        "#f6f8f8"
      ]
    }
  ]
}
[/block]
3. Under **How should alerts be grouped into incidents on this service?**, select **Based on the content of the alert** and select your preferred **PagerDuty Alert Field**:

* **Class**
* **Component**
* **Group**
* **Severity**
* **Source**
* **Summary**
* **Custom Details**: Once selected, enter your **Custom Field Name**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/39666de-content-based-alert-grouping-select-content.png",
        "content-based-alert-grouping-select-content.png",
        807,
        463,
        "#eaeae8"
      ]
    }
  ]
}
[/block]
4. Click **Save Alert Grouping Settings** to complete configuration.