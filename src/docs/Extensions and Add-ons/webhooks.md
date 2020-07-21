---
title: "Webhooks"
slug: "webhooks"
hidden: false
createdAt: "2017-05-10T19:34:59.926Z"
updatedAt: "2020-07-02T18:48:03.607Z"
---
Webhooks allow you to receive HTTP callbacks when incidents are triggered and updated. Details about the event are sent to your specified URL, such as [Slack](https://www.pagerduty.com/docs/guides/slack-integration-guide/), [HipChat](https://www.pagerduty.com/docs/guides/hipchat-extension-guide), or your own [custom PagerDuty webhook processor](https://developer.pagerduty.com/docs/webhooks/v2-overview/).

#Add a Webhook

1. Navigate to **Configuration → Services**, then click the **name** of the service you want to add a webhook to.
2. Select the **Integrations** tab, under Extensions and Add-Ons, click **Add or manage extensions for this service** and then click **New Extension**.
3. For the **Extension Type** select your webhook type or **Generic V2 Webhook**.
4. Enter a **Name** for your webhook.
5. Enter your endpoint's **URL** in the **Details** field.
6. Click **Save**.

To test your webhook, click **New Incident** on the service to trigger a test incident, and then check your endpoint for updates. We recommend reviewing the webhook PagerDuty sends when an incident triggers. You can do this by using a tool online such as [Beeceptor](https://beeceptor.com/), [webhook.site](https://webhook.site), or [postb.in](https://postb.in/).
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9d610c0-webhooks-check-webhook-message.png",
        "webhooks-check-webhook-message.png",
        924,
        255,
        "#dcdcdd"
      ]
    }
  ]
}
[/block]