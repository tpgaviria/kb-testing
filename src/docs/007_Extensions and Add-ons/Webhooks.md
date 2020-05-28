# Webhooks

---
Webhooks allow you to receive HTTP callbacks when incidents are triggered and updated. Details about the event are sent to your specified URL, such as [Slack](https://www.pagerduty.com/docs/guides/slack-integration-guide/), [HipChat](https://www.pagerduty.com/docs/guides/hipchat-extension-guide), or your own [custom PagerDuty webhook processor](https://v2.developer.pagerduty.com/docs/webhooks-overview).

## Add a Webhook

1. Navigate to **Configuration → Services**, then click the **name** of the service you want to add a webhook to.
2. Select the **Integrations** tab and click **New Extension**.
3. For the **Extension Type** select your webhook type or **Generic V2 Webhook**.
4. Enter a **Name** for your webhook.
5. Enter your endpoint's **URL** in the **Details** field.
6. Click **Save**.

![](https://files.readme.io/930cbd7-webhooks-add-extension.png)

To test your webhook, click **New Incident** on the service to trigger a test incident, and then check your endpoint for updates. We recommend reviewing the webhook PagerDuty sends when an incident triggers. You can do this by using a tool online such as [Beeceptor](https://beeceptor.com/), [webhook.site](https://webhook.site), or [postb.in](https://postb.in/).

![](https://files.readme.io/9d610c0-webhooks-check-webhook-message.png)

You can read more about PagerDuty Webhooks on our Developer Page here:

[Webhook Behavior](https://v2.developer.pagerduty.com/docs/webhook-behavior)
