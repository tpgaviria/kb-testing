# Conference Bridge

---
A conference bridge allows you to use your preferred web conferencing provider for incident responders. There are two ways to create conference bridges in your PagerDuty account:

- [Create an Account-level Conference Bridge](#section-create-an-account-level-conference-bridge)
- [Create a Service-level Conference Bridge](#section-create-a-service-level-conference-bridge)

And there are two ways to add a conference bridge to an incident:

- [Manually Add a Conference Bridge to an Incident via Add Responders](#section-manually-add-a-conference-bridge-to-an-incident-via-add-responders)
- [Automatically Add a Conference Bridge to an Incident with a Response Play](https://support.pagerduty.com/docs/conference-bridge#section-automatically-add-a-conference-bridge-to-an-incident-with-a-response-play)

<!-- theme: info -->

> ### Note
>
> * The conference bridge feature is available on current Team, Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with the conference bridge feature.
>
>* While separate, conference bridge is designed to work well with the features of our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) add-on package. If you would like to use the full suite of PagerDuty Modern Incident Response capabilities along with conference bridge, please [contact our Sales team](https://www.pagerduty.com/contact-sales/).

## Create an Account-level Conference Bridge
Conference bridges can be added as account-level extensions. This provides users with a list of persistent conference lines to choose from when triggering an incident.
1. Go to **Configuration ➡️ Extensions**.
2. Go to the **Conference Bridges** tab, and click **New Conference Bridge**.
3. Add a **Label**, **Description**, **Conference Number**, and **Conference URL** for your conference bridge, and click **Save**.
    - The **Label** is the name of the conference bridge as it will appear in the selection drop-down menu.
    - The **Description** is a brief explanation of the conference bridge.
    - The **Conference Number** is the phone number users will call into. Phone numbers should be formatted like `415-555-1212,,,,1234#`, where a comma (`,`) represents a one-second wait and pound (`#`) completes access code input.
    - The **Conference URL** is the meeting URL for screen sharing purposes.
![](https://files.readme.io/c9c5234-conference-bridge-extensions-page.png)
4. Now the conference bridge will be available as an option when adding a bridge to an incident.
![](https://files.readme.io/8b2a4c3-conference-bridge-account-level-new-incident.png)

## Create a Service-level Conference Bridge
When adding a conference bridge to a service it is important to note that the conference bridge information will appear on **all incidents that trigger on that service**. We recommend adding a conference bridge to services dedicated to critical incidents that require a bridge.
1. Go to **Configuration ➡️ Services**.
2. Find your service and click **Edit Service** from the right sidebar.
3. While in edit mode, go to **Conference Bridge Settings** section — this is where you can add the conference bridge information for your service.
    - Phone numbers should be formatted like `415-555-1212,,,,1234#`, where a comma (`,`) represents a one-second wait and pound (`#`) completes access code input.
    - You can also enter an optional **Meeting URL**.
4. When you are done, click **Save changes**.
![](https://files.readme.io/b44b8c4-cb_add_to_service.png)

When an incident is triggered on your service you will see the conference bridge information in the web UI, email notifications, and Slack (if you have a [Slack integration](https://www.pagerduty.com/docs/guides/slack-integration-guide/) configured).

![](https://files.readme.io/73b6248-conference-bridge-info-on-incident.png)

## Manually Add a Conference Bridge to an Incident via Add Responders
If you do not have conference bridge information added to your service, you can use the **Add Responders** feature to input the conference bridge information.
1. After an incident has been triggered, acknowledge the incident and click on **Add Responders** at the top right-hand corner.
2. Select the users/escalation policies you wish to add as a responder. 
3. *Optional*: You can also add a note to send to the users you are requesting to join as a responder.
4. Check the **Use Conference Bridge** checkbox. If you already have an account-level or service-level Conference Bridge configured, you can select it from the **Choose a Conference Bridge** dropdown. If you do not already have one configured, you can add the details manually:
    - **Dial-in Number**: Phone numbers should be formatted as `415-555-1212,,,,1234#`, where a comma (`,`) represents a one-second wait and pound (`#`) completes access code input. 
    - **Meeting Link**: You can also enter an optional meeting URL.
5. Click **Add Responder**.

Requests will be sent to responders, who can review conference bridge details on the incident details page and in the responder email notifications.

At this time, if you wish to add a conference bridge to an open incident you will need to use the add responders feature. On the other hand, if you've configured a service-level conference bridge, you can enter new conference bridge info when adding a bridge via Response Mobilizer.

## Automatically Add a Conference Bridge to an Incident with a Response Play

<!-- theme: info -->

> ### Note
>
> Response plays are a feature of our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) add-on product and they are available standard for Digital Operations accounts. Please [contact our sales team](https://www.pagerduty.com/contact-sales/) if you are interested in the Modern Incident Response product.

Adding a conference bridge to a response play allows you to easily mobilize your responders - you can do this automatically at the service level or for individual incidents. 
1. Go to **Configuration** ➡️ **Response Plays**.
2. Select **New Response Play**.
3. Add responders to notify when the response play is run.
4. Configure the conference bridge information - this will be shared with responders when the response play is run.
5. When you are done, click **Save changes**.

![](https://files.readme.io/0f2e0e0-conference-bridge-response-play.png)

Once you've created the response play, you can configure the play to run automatically at the service level for all incidents that are created on that service. You can also allow your responders to run the response play on demand. This will allow them to run Response Plays for individual incidents. You can learn more about response plays [here](https://support.pagerduty.com/docs/response-automation).

## Joining Conference Bridges as a Responder

Conference bridge information is available within incidents in the web UI, email notifications, Slack (if you have a [Slack integration](https://www.pagerduty.com/docs/guides/slack-integration-guide/) configured) and via voice call. When referencing the web UI, email notifications and Slack, responders will need to manually dial into the conference bridge or click its link. For voice call notifications, responders have the option of using the [One Touch To Join](https://support.pagerduty.com/docs/conference-bridge#section-one-touch-to-join-conference-bridge) feature. 

### Conference Bridge Information in the Web UI

![](https://files.readme.io/11014b0-conference-bridge-web-ui.png)

### Conference Bridge Information in Email Notifications

![](https://files.readme.io/46b985a-conference-bridge-email.png)

### Conference Bridge Information in Slack Notifications

![](https://files.readme.io/7b2f42f-conference-bridge-info-slack.png)

### Conference Bridge Information in Voice Call Notifications

When responders receive voice call notifications, they will hear the following prompt:

"*PagerDuty Alert.  Please help me with [Incident Title]*

*Press 1 to accept the request*
*Press 2 to decline the request*"

**By default, they will not be able to receive conference bridge information in the voice call**. Once accepted, they will then need to check the incident in the [web UI](https://support.pagerduty.com/docs/conference-bridge#section-conference-bridge-information-in-the-web-ui), an [email notification](https://support.pagerduty.com/docs/conference-bridge#section-conference-bridge-information-in-email-notifications) or a [Slack notification](https://support.pagerduty.com/docs/conference-bridge#section-conference-bridge-information-in-slack-notifications) to obtain the conference bridge information and enter the bridge manually. 

**If you would like responders to be able to join conference bridges via voice call notifications**, you can opt to use our [One Touch To Join Conference Bridge](https://support.pagerduty.com/docs/conference-bridge#section-one-touch-to-join-conference-bridge) add-on feature.

### One Touch To Join Conference Bridge

<!-- theme: info -->

> ### Note
>
> One Touch to Join Conference Bridge works with the [Conference Bridge](https://support.pagerduty.com/docs/response-bridge#section-service-level-response-bridge) and [Add Responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders) capabilities available in our [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) product add-on. It can be enabled upon request for customers with [Modern Incident Response](https://support.pagerduty.com/docs/pagerduty-modern-incident-response) - please reach out to your sales representative for more information.

The One Touch To Join Conference Bridge feature enables rapid response team assembly by giving responders a push-button means of joining a conference bridge. This feature relies on two core PagerDuty Platform features: [Conference Bridge](https://support.pagerduty.com/docs/response-bridge#section-service-level-response-bridge) and [Add Responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders). When responders are added to an incident and receive a voice call, they will receive the option to “Join the bridge” which will immediately add them to the conference call. The One Touch To Join Conference Bridge solution works with your existing direct-dial conference bridge provider and reduces effective time-to-engage and resolution time for major incidents.

Configure One Touch To Join Conference Bridge:

1. [Configure a conference bridge](https://support.pagerduty.com/docs/response-bridge).
2. Responders must have:
    a. A phone number listed in the **Contact Information** tab of their PagerDuty user profile.
    b. A high-urgency notification rule in the **Notification Rules** tab using this phone number in their user profile.

![](https://files.readme.io/c5c6bb7-conference-bridge-add-phone-number.png)

![](https://files.readme.io/b63d65f-conference-bridge-notification-rule-phone.png)

3. During an incident with a conference bridge, add responders by using the [Add Responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders) feature or at-scale with [Response Plays](https://support.pagerduty.com/docs/response-automation). 

Any requested responder with the above configuration will receive a voice call with the following phrasing:

"*PagerDuty Alert.  Please help me with [Incident Title]*

*Press 1 to join the bridge*
*Press 2 to accept the request*
*Press 3 to decline the request*"

The following table lists the effects of each response to the voice call:


Response to Voice Call | Result | Responder Status|Conference Bridge Impact| Incident Timeline | 
---------|----------|---------|---------|----------|
 1 - Join the Bridge | Responder joins the bridge and Responder Request is accepted. | Responder Status is marked as **Engaged**, as per the [icon on the Responders box in the Incident Detail page](https://support.pagerduty.com/docs/mobilizing-a-response#section-status-of-responders).|Responder automatically joins to the bridge for the incident.  No manual dialing required.|An Incident Timeline entry is created showing when the Responder joined the call.|
 2 - Accept the Request | Responder Request is accepted. | Responder Status is marked as **Engaged**.|The responder will have to manually dial into the bridge and their participation will not be visible on the Timeline.|An Incident Timeline entry is created showing this accepted request.|
 3 - Decline the Request | Responder Request is declined. | Responder Status marked as **Declined**.<br>If the Added Responder is part of an Escalation Policy (EP) the responder on the next EP level would be paged with an Add Responder request.|None|An Incident Timeline entry is created showing this declined  request.|
  No Answer | Responder Request is unanswered. | Responder Status remains marked as **Pending**. <br> If the Added Responder is part an Escalation Policy (EP) the responder on the next EP level would be paged with an Add Responder request.|None|None|

Whenever a responder who has joined the bridge via One Touch To Join disconnects or the overall bridge call ends, the Incident Timeline will reflect these departures as well. This information can then be used in incident analysis using the [Postmortems](https://support.pagerduty.com/docs/postmortems) tool.

![](https://files.readme.io/946be0f-one-touch-timeline-view.png)

You can add as many responders to your conference bridge as your conference provider allows.  One Touch To Join calls will disconnect after **two hours**.  Should the responder still need to participate, they can manually redial the bridge based on the conference details attached to the PagerDuty incident.

If a responder misses a voice call, PagerDuty will attempt to reach them using each of the configured contact methods used by their high-urgency notification rules. We recommend that at least two contact methods are configured so that if a notification for one channel is missed, context is provided in the other channel. Thus, is the voice call is missed, the responder will still be able to manually join the conference bridge using information found in the web UI, email notification or Slack message, but they will not be able to use One Touch To Join. 

#### Supported Countries and Pricing

The One Touch To Join feature is supported in over 30 of our highest responder countries.  We’ve classified countries into two groups: Base or Responder (listed in table below). The One Touch To Join feature is available when:

- The conference bridge is hosted in a Base country, and
- The phone numbers of requested responders are for Base or Responder locales.


Bridge Based Countries | Responder Countries* | 
---------|----------|
 Australia<br>Canada<br>China<br>Germany<br>India<br>Japan<br>Luxembourg<br>Mexico<br>New Zealand<br>United Kingdom<br>United States | All Bridge Based Countries<br>Argentina<br>Brazil<br>Bulgaria<br>Costa Rica<br>Czech Rep.<br>France<br>Guatemala<br>Hungary<br>Indonesia<br>Ireland<br>Israel<br>Netherlands<br>Nigeria<br>Pakistan<br>Philippines<br>Poland <br>Russia<br>Singapore<br>South Africa<br>Spain<br>Sri Lanka<br>Taiwan<br>Ukraine| 

*One Touch To Join works with conference bridges hosted in Bridge Based countries only.