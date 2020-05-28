# Quick Start Guide
---
This guide will help you get started with your new PagerDuty account, from configuring your user profile to receiving your first notification. **Open the linked sections in new tabs and return to this guide once finished with their instructions in order to continue through each step**. If there are any terms that are unfamiliar, you may want to check out our [Glossary](doc:glossary).

## Step 1: Configure Your User Profile

Configure the following settings in your user profile:

☑️ [Contact Information](https://support.pagerduty.com/docs/configuring-a-user-profile#section-contact-information)

☑️ [Notification Rules](https://support.pagerduty.com/docs/configuring-a-user-profile#section-notification-rules)

☑️ [User Settings](https://support.pagerduty.com/docs/configuring-a-user-profile#section-user-settings)

## Step 2: Configure the Incident Notification Pipeline

Configure the following objects in your PagerDuty account so that you can open an incident on a service, which will then send a notification to a user on its associated escalation policy.

<!-- theme: warning -->

> ### Required User Permissions
>
>* Adding users and creating escalation policies and teams are actions that can only be performed by Admins, Global Admins and Account Owners. If you do not have one of the above roles, please contact an Admin or Account Owner to configure. 
>* Users, Managers, Admins, Global Admins and Account Owners can create services.

☑️ [Add Users](https://support.pagerduty.com/docs/users)

☑️ [Create an On-Call Schedule](https://support.pagerduty.com/docs/schedules#section-create-a-schedule)

☑️ [Create an Escalation Policy](https://support.pagerduty.com/docs/escalation-policies#section-create-an-escalation-policy) and add the above schedule to it. 

☑️ *Optional*: [Create a Team](https://support.pagerduty.com/docs/teams#section-create-a-team) and add the above escalation policy to it. This will associate all users and schedules on the escalation policy with this team. 

☑️ [Create a Service](https://support.pagerduty.com/docs/services-and-integrations#section-create-a-new-service) and add the above escalation policy to it so that users on its associated on-call schedule can begin receiving notifications. 

## Step 3: Create Your First Notification

You should now have the following configured:

☑️ Contact Information

☑️ Notification Rules

☑️ User Settings

☑️ Schedule

☑️ Escalation Policy (with the above Schedule added)

☑️ Service (with the above Escalation Policy added)

Once these have been set up, you will be ready to trigger an incident so that you can test sending notifications:

1. Edit the escalation policy created above by navigating to **Configuration** ➡️ **Escalation Policies** ➡️ ⚙️ ➡️ **Edit**. If you are not already on Level 1 of the escalation policy, ***temporarily*** add yourself to the first level so that you are notified immediately after an incident is triggered. **Note**: If there are any other users or schedules on this first level, they will also be notified, so you may want to take note of these settings and then temporarily remove them at your own discretion. Click **Save**. 
2. Next, go to the **Configuration** menu and select **Services**.
3. Click the **name** of the service that is attached to the above escalation policy. 
4. Click **+ New Incident** on the right hand side.

![](https://raw.githubusercontent.com/PagerDuty/knowledge-base/master/assets/images/quick-start-guide-new-incident.png?token=AKSSOJ23CSNXNAUMJTDENOK6FC7II)

5. In the **Assign to** dropdown, select the escalation policy you just edited, above. 
6. Enter `Test Incident` as the **Title** and an *optional* **Description** for the incident. If there are others on Level 1 of the escalation policy, this is a good place to add any additional context to your test incident. 
7. Click **Create Incident** at the bottom of the window.
8. You will then see the Incident Details page for your incident. If you navigate to the **Incidents** page in the main menu, you will see it under **Open** incidents as well.
9. You should now begin to receive email, phone call, SMS, and/or push notification(s) depending on the notification rules that you configured above.
10. Return to the escalation policy and edit it back to its original settings, clicking **Save** when finished. 

Congratulations, you’ve received your first notification! From here, you can acknowledge, resolve, re-assign/escalate the incident via phone/SMS/web UI or through the mobile app.
